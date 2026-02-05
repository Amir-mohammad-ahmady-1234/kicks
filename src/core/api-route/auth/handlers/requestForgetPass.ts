"use server";

import prisma from "@/core/lib/db/client";
import { sendOtp } from "@/core/lib/otp/otp";

export async function requestForgetPass({
  email,
}: {
  email: string;
}): Promise<{ success: boolean; message?: string; error?: string }> {
  try {
    const existuser = prisma.user.findUnique({
      where: { email: email.toLowerCase() },
    });
    if (!existuser) {
      return { success: false, error: "User not exist" };
    }

    const sendotp = await sendOtp(email);
    if (!sendotp.success) {
      return {
        success: false,
        error: sendotp.error || "Failed to send verification code",
      };
    }
    return {
      success: true,
      message: "Verification code sent to your email",
    };
  } catch {
    return { success: false, error: "Server error" };
  }
}
