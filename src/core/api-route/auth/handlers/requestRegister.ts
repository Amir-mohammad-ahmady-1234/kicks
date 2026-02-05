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
    const emailcase = email.toLowerCase();

    const existingUser = await prisma.user.findUnique({
      where: { email: emailcase },
    });
    if (existingUser) {
      return { success: false, error: "This email is already registered" };
    }

    const sendotp = await sendOtp(emailcase);
    if (!sendotp.success) {
      return {
        success: false,
        error: sendotp.error || "Failed to send verification code",
      };
    }

    const redisregister = `pending:register:${emailcase}`;
    await redis.set(redisregister, await hashedPassword(password), {
      ex: 5 * 60,
    });

    return {
      success: true,
      message: "Verification code sent to your email",
    };
  } catch {
    return { success: false, error: "Server error" };
  }
}
