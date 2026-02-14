"use server";

import prisma from "@/core/lib/db/client";
import { uploadImage } from "@/core/lib/uploadfile/cloudinary";

export default async function updateProfile(userId: string, file: File) {
  if (!userId) {
    return { success: false, error: "User ID is required" };
  }

  try {
    const imageUrl = await uploadImage(file);

    const user = await prisma.user.update({
      where: { id: userId },
      data: { image: imageUrl },
    });

    return {
      success: true,
      message: "update user profile completed",
      user: user,
    };
  } catch (error) {
    console.log(error);
    return { success: false, error: "Server error" };
  }
}
