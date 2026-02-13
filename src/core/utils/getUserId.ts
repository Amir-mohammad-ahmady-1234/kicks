import { cookies } from "next/headers";
import { decryptLicense } from "../lib/crypto/license";

export async function getUserId(): Promise<string | null> {
  const coocki = await cookies();
  const license = coocki.get("license")?.value;
  if (!license) {
    console.log("License cookie not found");
    return null;
  }
  const getUserId = decryptLicense(
    license,
    process.env.SECRET1,
    process.env.SECRET2,
  );

  return getUserId.userId;
}
