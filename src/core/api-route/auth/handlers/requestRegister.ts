"use server";

import prisma from "@/core/lib/db/client";
import { sendOtp } from "@/core/lib/otp/otp";
import { redis } from "@/core/lib/redis/redis";
import { hashedPassword } from "@/core/utils/hashPassword";

export async function requestRegistration({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<{ success: boolean; message?: string; error?: string }> {
  try {
    const normalizedEmail = email.toLowerCase();

    const existingUser = await prisma.user.findUnique({
      where: { email: normalizedEmail },
    });
    if (existingUser) {
      return { success: false, error: "This email is already registered" };
    }

    const otpResult = await sendOtp(normalizedEmail);
    if (!otpResult.success) {
      return {
        success: false,
        error: otpResult.error || "Failed to send verification code",
      };
    }

    const redisregister = `pending:register:${normalizedEmail}`;
    await redis.set(redisregister, await hashedPassword(password), {
      ex: 2 * 60,
    });

    return {
      success: true,
      message: "Verification code sent to your email",
    };
  } catch {
    return { success: false, error: "Server error" };
  }
}
