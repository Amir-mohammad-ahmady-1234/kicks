"use server";

import prisma from "@/core/lib/db/client";

interface UpdateUserData {
  name?: string;
  phone?: string | null;
  bio?: string | null;
  dateOfBirth?: string | null;
  country?: string | null;
  city?: string | null;
  address?: string | null;
  gender?: "MALE" | "FEMALE" | "OTHER" | null;
  website?: string | null;
  instagram?: string | null;
  linkedin?: string | null;
  github?: string | null;
}

export async function updateUser(userId: string, formData: UpdateUserData) {
  try {
    if (!userId) {
      return { success: false, error: "User ID is required" };
    }

    const user = await prisma.user.update({
      where: { id: userId },
      data: {
        name: formData.name,
        phone: formData.phone,
        bio: formData.bio,
        dateOfBirth: formData.dateOfBirth
          ? new Date(formData.dateOfBirth)
          : null,
        country: formData.country,
        city: formData.city,
        address: formData.address,
        gender: formData.gender,
        website: formData.website,
        instagram: formData.instagram,
        linkedin: formData.linkedin,
        github: formData.github,
      },
    });

    return {
      success: true,
      message: "update user data",
      user: user,
    };
  } catch {
    return { success: false, error: "Server error" };
  }
}
