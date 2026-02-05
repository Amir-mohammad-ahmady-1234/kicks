import { generateOtp } from "@/core/utils/generateOtp";
import { sendOtpEmail } from "../email/sendEmail";
import { redis } from "../redis/redis";

export async function sendOtp(
  email: string,
): Promise<{ success: boolean; error?: string }> {
  try {
    const otp = generateOtp();
    const key = `otp:${email.toLowerCase()}`;
    await redis.set(key, otp, { ex: 5 * 60 });
    const emailResult = await sendOtpEmail(email, otp);
    if (!emailResult.success) {
      return { success: false, error: "There was a problem sending the email" };
    }
    return { success: true };
  } catch {
    return { success: false, error: "can not send otp" };
  }
}

export async function verifyOtp(
  email: string,
  code: string,
): Promise<{ success: boolean; error?: string }> {
  try {
    const key = `otp:${email.toLowerCase()}`;
    const stored = await redis.get(key);
    if (!stored) {
      return { success: false, error: "Code has expired or does not exist" };
    }

    if (String(stored) !== String(code)) {
      return { success: false, error: "code is wrong" };
    }

    await redis.del(key);

    return { success: true };
  } catch {
    return { success: false, error: "can not set otp" };
  }
}

export async function resendOtp(email: string) {
  await redis.del(`otp:${email.toLowerCase()}`);
  return sendOtp(email);
}
