"use server";

import prisma from "@/core/lib/db/client";
import { sendOtp } from "@/core/lib/otp/otp";
import { redis } from "@/core/lib/redis/redis";
import { hashedPassword, verifyPassword } from "@/core/utils/hashPassword";
import { createLoginSession } from "./createLoginSession";

export async function requestRegistration({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<{
  success: boolean;
  message?: string;
  login?: boolean;
  register?: boolean;
  error?: string;
}> {
  try {
    const emailcase = email.toLowerCase();

    const existingUser = await prisma.user.findUnique({
      where: { email: emailcase },
    });
    if (existingUser) {
      const isValid = await verifyPassword(password, existingUser.password);
      if (isValid) {
        await createLoginSession({
          id: existingUser.id,
          email: existingUser.email,
          role: existingUser.role,
        });
        return {
          success: true,
          message: "logged in successfully",
          login: true,
        };
      } else {
        return { success: false, error: "incorrect password" };
      }
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
      register: true,
    };
  } catch {
    return { success: false, error: "Server error" };
  }
}
