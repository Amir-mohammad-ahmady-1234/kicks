import prisma from "@/core/lib/db/client";
import { Prisma } from "@prisma/client";
import { TabelBlogFilter } from "../../ts/TabelBlogFilter";
export type discountFilterTs = "all" | "discount" | "no-discount";

export async function filterBlogTabel({
  search = "",
  category,
  sortOrder = "asc",
  page = 1,
  limit = 10,
}: TabelBlogFilter) {
  try {
    const where: Prisma.BlogWhereInput = {};

    if (search) {
      const searchTerm = search.trim();
      where.OR = [
        { title: { contains: searchTerm } },
        { excerpt: { contains: searchTerm } },
        { content: { contains: searchTerm } },
      ];
    }

    if (category) {
      where.category = category;
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

    const [blogs, total] = await Promise.all([
      prisma.blog.findMany({
        where,
        skip,
        take: limit,
        orderBy: { id: sortOrder },
      }),
      prisma.blog.count({ where }),
    ]);

    return {
      success: true,
      data: blogs,
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    };
  } catch {
    return {
      success: false,
      error: "Filter blogs  error",
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
