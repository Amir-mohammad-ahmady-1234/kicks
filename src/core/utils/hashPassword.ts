import * as bcrypt from "bcryptjs";

export async function hashedPassword(pass: string) {
  const hashedPassword = await bcrypt.hash(pass, 10);

  return hashedPassword;
}

export async function verifyPassword(mainPassword, hashedPassword) {
  return await bcrypt.compare(mainPassword, hashedPassword);
}
