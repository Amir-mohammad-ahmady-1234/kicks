import crypto from "crypto";

export function generateKey(secret1: string, secret2: string): Buffer {
  const combined = secret1 + secret2;
  return crypto.createHash("sha256").update(combined).digest();
}

export function encryptLicense(
  data: object,
  secret1: string,
  secret2: string,
): string {
  const key = generateKey(secret1, secret2);
  const iv = crypto.randomBytes(12);

  const cipher = crypto.createCipheriv("aes-256-gcm", key, iv);

  const jsonData = JSON.stringify(data);
  let encrypted = cipher.update(jsonData, "utf8", "hex");
  encrypted += cipher.final("hex");

  const authTag = cipher.getAuthTag().toString("hex");

  return `${iv.toString("hex")}:${encrypted}:${authTag}`;
}

export function decryptLicense(
  encrypted: string,
  secret1: string,
  secret2: string,
): object | null {
  try {
    const key = generateKey(secret1, secret2);
    const [ivHex, encryptedHex, authTagHex] = encrypted.split(":");

    if (!ivHex || !encryptedHex || !authTagHex) return null;

    const iv = Buffer.from(ivHex, "hex");
    const authTag = Buffer.from(authTagHex, "hex");

    const decipher = crypto.createDecipheriv("aes-256-gcm", key, iv);
    decipher.setAuthTag(authTag);

    let decrypted = decipher.update(encryptedHex, "hex", "utf8");
    decrypted += decipher.final("utf8");

    return JSON.parse(decrypted);
  } catch (err) {
    console.error("License decrypt failed:", err);
    return null;
  }
}

export function createLicenseData(userId: string, days = 30) {
  const expiration = new Date(
    Date.now() + days * 24 * 60 * 60 * 1000,
  ).toISOString();

  return {
    userId,
    expiration,
    issuedAt: new Date().toISOString(),
    secretMessage: "licnese opened",
  };
}
