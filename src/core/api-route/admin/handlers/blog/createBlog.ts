"use server";
import { BlogFormData } from "@/core/features/admin/assets/types/BlogTypes";
import prisma from "@/core/lib/db/client";
import { BlogStatus, Prisma } from "@prisma/client";
export async function createBlog(dataP: BlogFormData) {
  try {
    await prisma.blog.create({
      data: {
        title: dataP.title,
        slug: dataP.slug || dataP.title.toLowerCase(),
        excerpt: dataP.excerpt,
        content: dataP.content,
        Image: dataP.Image,
        author: dataP.author,
        category: dataP.category,
        tags: dataP.tags,
        status: dataP.status as BlogStatus,
      },
    });
    return { success: true, message: "Blog post created successfully" };
  } catch (error) {
    console.log(error, "lkjasdkljasdklj");
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2002") {
        const target =
          (error.meta as { target?: string[] })?.target?.[0] || "field";

        if (target === "slug") {
          return {
            success: false,
            error:
              "A blog post with this slug already exists. Please change the title or slug.",
          };
        }

        return {
          success: false,
          error: `A blog post with this ${target} already exists`,
        };
      }

      if (error.code === "P2025") {
        return { success: false, error: "Record not found" };
      }

      if (error.code === "P2003") {
        return { success: false, error: "Invalid reference data" };
      }
    }

    if (error instanceof Prisma.PrismaClientValidationError) {
      return {
        success: false,
        error: "Invalid data submitted. Please check your input fields.",
      };
    }

    return {
      success: false,
      error: "Server error while creating blog post. Please try again later.",
    };
  }
}
