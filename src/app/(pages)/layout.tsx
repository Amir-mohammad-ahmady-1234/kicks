import Footer from "@/core/features/main/components/blocks/footer/Footer";
import Header from "@/core/features/main/components/blocks/header/Header";
import React from "react";

function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <Header />
      {children}
      <Footer />
    </main>
  );
}

export default layout;
