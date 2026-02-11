import { getUserId } from "./getUserId";

export async function isLogin(): Promise<boolean> {
  let isLogin: boolean;
  const isId = await getUserId();
  if (isId) {
    isLogin = true;
  } else {
    isLogin = false;
  }
  return isLogin;
}
