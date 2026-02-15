"use server";

import { uploadImage } from "@/core/lib/uploadfile/cloudinary";

export default async function getImageUrl(file: File) {
  try {
    const imageUrl = await uploadImage(file);

    return {
      success: true,
      message: "get image url from cloudinary successfully.",
      imageUrl,
    };
  } catch (error) {
    console.log(error);
    return { success: false, error: "Server error" };
  }
}
