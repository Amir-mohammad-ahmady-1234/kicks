import Footer from "@/core/features/main/components/blocks/footer/Footer";
import Header from "@/core/features/main/components/blocks/header/Header";
import { isLogin } from "@/core/utils/isLogin";
import React from "react";

async function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isSignUp = await isLogin();
  return (
    <main>
      <Header isSignUp={isSignUp} />
      {children}
      <Footer />
    </main>
  );
}

export default layout;
