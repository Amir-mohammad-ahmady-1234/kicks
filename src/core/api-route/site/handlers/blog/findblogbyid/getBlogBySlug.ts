"use server";

import prisma from "@/core/lib/db/client";

export async function getBlogBySlug({ slug }) {
  try {
    const blog = await prisma.blog.findUnique({
      where: {
        slug,
      },
    });

    if (!blog) {
      return {
        success: false,
        error: "Blog post not found",
        data: null,
      };
    }

    return {
      success: true,
      data: blog,
    };
  } catch (err) {
    console.log(err);
    return {
      success: false,
      error: "Failed to fetch blog post",
      data: null,
    };
  }
}
