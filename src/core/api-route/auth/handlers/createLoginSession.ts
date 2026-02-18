import { cookies } from "next/headers";
import { encryptLicense } from "@/core/lib/crypto/license";

export async function createLoginSession(user: {
  id: string;
  email: string;
  role: string;
}) {
  const expiration = new Date(
    Date.now() + 30 * 24 * 60 * 60 * 1000,
  ).toISOString();

  const licenseData = {
    userId: user.id,
    email: user.email,
    expiration,
    role: user.role,
    issuedAt: new Date().toISOString(),
    secretMessage: "cookie created successfully",
  };

  const encryptedLicense = encryptLicense(
    licenseData,
    process.env.SECRET1,
    process.env.SECRET2,
  );

  const cookiess = await cookies();
  cookiess.set("license", encryptedLicense, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 30 * 24 * 60 * 60,
  });
}
