import * as bcrypt from "bcryptjs";
export async function hashedPassword(pass: string) {
  const hashedPassword = await bcrypt.hash(pass, 10);

  return hashedPassword;
}
