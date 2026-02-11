import prisma from "@/core/lib/db/client";
import { categoryP, Prisma } from "@prisma/client";
export type discountFilterTs = "all" | "discount" | "no-discount";
export interface TabelFilter {
  search?: string;
  category?: categoryP;
  page?: number;
  limit?: number;
  minPrice?: number;
  maxPrice?: number;
  discountFilter?: discountFilterTs;
  size?: string;
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
        { name: { contains: searchTerm } },
        { description: { contains: searchTerm } },
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
          error: "The input is not valid",
          data: [],
          pagination: { total: 0, page: 1, limit, totalPages: 0 },
        };
      }
      where.category = category;
    }

    if (gender) {
      if (gender !== "men" && gender !== "women") {
        return {
          success: false,
          error: "The input is not valid",
          data: [],
          pagination: { total: 0, page: 1, limit, totalPages: 0 },
        };
      }
      where.gender = gender;
    }

    if (sortOrder !== "asc" && sortOrder !== "desc") {
      return {
        success: false,
        error: "The input is not valid",
        data: [],
        pagination: { total: 0, page: 1, limit, totalPages: 0 },
      };
    }

    const skip = (page - 1) * limit;

    const [products, total] = await Promise.all([
      prisma.products.findMany({
        where,
        skip,
        take: limit,
        orderBy: { id: sortOrder },
      }),
      prisma.products.count({ where }),
    ]);

    return {
      success: true,
      data: products,
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    };
  } catch (error) {
    console.error("Filter products error:", error);

    let errorMessage = "خطای سرور";

    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2002") {
        const target = error.meta?.target?.[0] || "نام محصول";
        errorMessage = `محصول با این ${target} قبلاً وجود دارد`;
      } else if (error.code === "P2025") {
        errorMessage = "رکورد مورد نظر پیدا نشد";
      }
    } else if (error instanceof Prisma.PrismaClientValidationError) {
      errorMessage =
        "داده‌های ارسالی معتبر نیست (مثل دسته‌بندی یا جنسیت اشتباه)";
    }

    return {
      success: false,
      error: errorMessage,
      data: [],
      pagination: {
        total: 0,
        page: 1,
        limit,
        totalPages: 0,
      },
    };
  }
}
