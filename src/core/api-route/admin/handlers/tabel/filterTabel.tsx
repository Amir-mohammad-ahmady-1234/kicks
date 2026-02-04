import prisma from "@/core/lib/db/client";
import { categoryP, Prisma } from "@prisma/client";

interface TabelFilter {
  search?: string;
  category?: categoryP;
  page?: number;
  limit?: number;
  sortOrder?: "desc" | "asc";
  gender?: "men" | "women";
}

export async function filterActionTabel({
  search,
  category,
  sortOrder = "asc",
  gender,
  page = 1,
  limit = 10,
}: TabelFilter) {
  try {
    const where: Prisma.ProductsWhereInput = {};

    if (search) {
      const searchTerm = search.trim();
      where.OR = [
        { name: { contains: searchTerm, mode: "insensitive" } },
        { description: { contains: searchTerm, mode: "insensitive" } },
      ];
    }

    if (category) {
      const validCategories: categoryP[] = [
        "crocs",
        "nirkenstock",
        "clarks",
        "timberland",
        "allen",
        "oofos",
        "sorel",
        "hunter",
      ];
      if (!validCategories.includes(category)) {
        return {
          success: false,
          error: `"${category}" invalid`,
          data: [],
        };
      }
      where.category = category;
    }
    if (gender) {
      if (gender === "men" || gender === "women") {
        where.gender = gender;
      }
    }

    if (sortOrder !== "asc" && sortOrder !== "desc") {
      return {
        success: false,
        error: `"${sortOrder}" invalid`,
        data: [],
      };
    }

    const skip = (page - 1) * limit;

    const [product, total] = await Promise.all([
      prisma.products.findMany({
        where,
        skip,
        take: limit,
        orderBy: { id: sortOrder },
      }),
      prisma.products.count({ where }),
    ]);

    return {
      data: product,
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    };
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2002") {
        const target =
          (error.meta as { target?: string[] })?.target?.[0] || "نام محصول";
        return {
          success: false,
          error: `محصول با این ${target} قبلاً وجود دارد`,
        };
      }

      if (error.code === "P2025") {
        return { success: false, error: "رکورد مورد نظر پیدا نشد" };
      }
    }

    if (error instanceof Prisma.PrismaClientValidationError) {
      return {
        success: false,
        error: "داده‌های ارسالی معتبر نیست (مثل دسته‌بندی اشتباه)",
      };
    }

    console.error("Error creating product:", error);
    return { success: false, error: "خطای سرور" };
  }
}
