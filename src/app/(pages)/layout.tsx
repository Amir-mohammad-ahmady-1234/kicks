import Footer from "@/core/features/main/components/blocks/footer/Footer";
import Header from "@/core/features/main/components/blocks/header/Header";
import { HeaderProvider } from "@/core/features/main/context/HeaderContext";
import { getUserId } from "@/core/utils/getUserId";
import { isLogin } from "@/core/utils/isLogin";
import React from "react";

async function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isSignUp = await isLogin();
  const userId = await getUserId();
  return (
    <main>
      <HeaderProvider>
        <Header isSignUp={isSignUp} userId={userId} />
      </HeaderProvider>
      {children}
      <Footer />
    </main>
  );
}

export default layout;
