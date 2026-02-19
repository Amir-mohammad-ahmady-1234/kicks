"use server";

import prisma from "@/core/lib/db/client";

export async function findAllBlog() {
  try {
    const blog = await prisma.blog.findMany();
    return {
      blog,
    };
  } catch {
    console.log("server error");
  }
}
