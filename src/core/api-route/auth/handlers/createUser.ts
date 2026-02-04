"use server";

import prisma from "@/core/lib/db/client";
import { verifyOtp } from "@/core/lib/otp/otp";
import { redis } from "@/core/lib/redis/redis";
import { Prisma } from "@prisma/client";

export async function createUser({
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
      return { success: false, error: verifyResult.error };
    }

    const redisregister = `pending:register:${emailformat}`;
    const hashedPass = await redis.get(redisregister);

    if (!hashedPass) {
      return {
        success: false,
        error: "Registration session expired. Please try again",
      };
    }

    let passwordHash: string;

    if (
      !passwordHash ||
      typeof passwordHash !== "string" ||
      passwordHash.length < 50
    ) {
      return {
        success: false,
        error: "Invalid password hash. Please register again.",
      };
    }

    let role = "USER";
    const adminEmail = process.env.EMAIL_ADMIN;
    if (adminEmail && adminEmail.toLowerCase() === emailformat) {
      role = "ADMIN";
    }

    await prisma.user.create({
      data: {
        email: emailformat,
        password: passwordHash,
        role,
      },
    });

    await redis.del(redisregister);

    return {
      success: true,
      message: "Account created successfully",
    };
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2002") {
        const target =
          (error.meta?.target as string[] | undefined)?.[0] || "field";
        return {
          success: false,
          error: `The ${target} is already taken`,
        };
      }
      if (error.code === "P2025") {
        return { success: false, error: "Record not found" };
      }
    }

    if (error instanceof Prisma.PrismaClientValidationError) {
      return { success: false, error: "Invalid data provided" };
    }

    console.error("Error creating user:", error);
    return { success: false, error: "Server error" };
  }
}
