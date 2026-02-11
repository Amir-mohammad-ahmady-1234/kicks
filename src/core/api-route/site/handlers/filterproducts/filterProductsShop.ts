import { TabelFilter } from "@/core/api-route/admin/handlers/tabel/filterTabel";
import prisma from "@/core/lib/db/client";
import { categoryP, Prisma } from "@prisma/client";

export async function filterProductsShop({
  search,
  category,
  sortOrder = "asc",
  gender,
  page = 1,
  limit = 10,
  discountFilter = "all",
  size = "all-size",
  minPrice,
  maxPrice,
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
    if (size && size !== "all-size" && size !== "" && size !== "undefined") {
      const sizeValue = String(size).trim();
      where.size = {
        array_contains: [sizeValue],
      };
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
    if (discountFilter === "discount") {
      where.discount = { gt: 0 };
    } else if (discountFilter === "no-discount") {
      where.discount = { equals: 0 };
    }
    if (minPrice !== undefined || maxPrice !== undefined) {
      where.price = {};

      if (minPrice !== undefined && minPrice > 0) {
        where.price.gte = minPrice;
      }

      if (maxPrice !== undefined && maxPrice > 0) {
        where.price.lte = maxPrice;
      }
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
  } catch {
    return { success: false, message: "server error" };
  }
}
