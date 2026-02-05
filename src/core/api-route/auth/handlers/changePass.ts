"use server";

import prisma from "@/core/lib/db/client";
import bcrypt from "bcryptjs";

export async function changePass({
  email,
  newPassword,
}: {
  email: string;
  newPassword: string;
}): Promise<{ success: boolean; message?: string; error?: string }> {
  try {
    const emailcase = email.toLowerCase();

    if (!newPassword || newPassword.length < 8) {
      return {
        success: false,
        error: "Password must be at least 8 characters",
      };
    }

    const salt = await bcrypt.genSalt(12);
    const hashedPassword = await bcrypt.hash(newPassword, salt);
    const newpas = await prisma.user.update({
      where: { email: emailcase },
      data: { password: hashedPassword },
    });
    if (!newpas) {
      return { success: false, error: "User not found" };
    }
    return {
      success: true,
      message: "The password has been successfully changed",
    };
  } catch {
    return { success: false, error: "Server error" };
  }
}
