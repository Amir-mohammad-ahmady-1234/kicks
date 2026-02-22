import { authsignal } from "./authsignal";

export async function sendOtpEmail1(email: string) {
  try {
    if (!email) {
      return { error: "email not fund" };
    }

    await authsignal.challenge({
      verificationMethod: "EMAIL_OTP",
      action: "signInWithEmail",
      email,
    });

    return {
      success: true,
      message: "otp send",
    };
  } catch (error) {
    return { error: error.message };
  }
}
