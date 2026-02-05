"use server";

import { verifyOtp } from "@/core/lib/otp/otp";

export async function verifyForgetPassOtp({
  email,
  otp,
}: {
  email: string;
  otp: string;
}): Promise<{ success: boolean; message?: string; error?: string }> {
  try {
    const emailformat = email.toLowerCase();
    const verifyResult = await verifyOtp(emailformat, otp);

    if (!verifyResult.success) {
      return {
        success: false,
        error: verifyResult.error || "Invalid or expired code",
      };
    }

    return { success: true, message: "Code verified successfully" };
  } catch (err) {
    console.error(err);
    return { success: false, error: "Server error" };
  }
}
