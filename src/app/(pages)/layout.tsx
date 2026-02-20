import Footer from "@/core/features/main/components/blocks/footer/Footer";
import Header from "@/core/features/main/components/blocks/header/Header";
import { HeaderProvider } from "@/core/features/main/context/HeaderContext";
import { getUserId } from "@/core/utils/getUserId";
import { isLogin } from "@/core/utils/isLogin";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "kicks",
  description:
    "Step up your shoe game with Kicks! Find the latest styles for men and women, shop online, and get them fast.",
};

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
