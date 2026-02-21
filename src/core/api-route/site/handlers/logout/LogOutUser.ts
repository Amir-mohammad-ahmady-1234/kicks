"use server";

import { cookies } from "next/headers";

export async function LogOutUser(
  userId: string,
): Promise<{ success: boolean; message?: string; error?: string }> {
  try {
    if (!userId) {
      return { success: false, error: "user not found" };
    }
    const cookiess = await cookies();
    cookiess.set({
      name: "license",
      value: "",
      expires: new Date(0),
      path: "/",
    });

    return {
      success: true,
      message: "logut successfully",
    };
  } catch {
    return { success: false, error: "Server error" };
  }
}
