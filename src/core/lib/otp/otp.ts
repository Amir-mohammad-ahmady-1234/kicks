import { authsignal } from "../email/authsignal";
import { redis } from "../redis/redis";

export async function sendOtp(email: string) {
  try {
    const { challengeId } = await authsignal.challenge({
      verificationMethod: "EMAIL_OTP",
      action: "signInWithEmail",
      email,
    });

    await redis.set(`challenge:${email.toLowerCase()}`, challengeId, {
      ex: 10 * 60,
    });

    return { success: true, message: "OTP sent" };
  } catch (err) {
    return { success: false, error: err.message || "Error sending OTP" };
  }
}

export async function verifyOtp(email: string, code: string) {
  try {
    const challengeId = await redis.get(`challenge:${email.toLowerCase()}`);
    if (!challengeId) {
      return {
        success: false,
        error: "Challenge has expired or does not exist",
      };
    }

    const result = await authsignal.verify({
      challengeId: String(challengeId),
      verificationCode: code.trim(),
    });

    if (result.isVerified) {
      await redis.del(`challenge:${email.toLowerCase()}`);
      return { success: true };
    }

    return { success: false, error: "Incorrect code" };
  } catch (err) {
    return { success: false, error: err.message || "Error verifying code" };
  }
}

export async function resendOtp(email: string) {
  await redis.del(`challenge:${email.toLowerCase()}`);
  return sendOtp(email);
}
