import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendOtpEmail2(to: string, otp: string) {
  try {
    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: [to],
      subject: "Login/Registration Verification Code",
      html: `
        <div style="font-family: sans-serif; text-align: center; padding: 40px;">
          <h1 style="color: #333;">your verification code</h1>
          <p style="font-size: 24px; font-weight: bold; letter-spacing: 8px; color: #0066cc;">
            ${otp}
          </p>
          <p>This code is valid for 5 minutes.</p>
          <p style="color: #666; font-size: 14px;">
            If you have not requested, ignore this email.
          </p>
        </div>
      `,
    });

    if (error) {
      return { success: false, error };
    }

    return { success: true, data };
  } catch {
    return { success: false, error: "server err" };
  }
}
