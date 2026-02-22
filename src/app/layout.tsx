import type { Metadata } from "next";
import localFont from "next/font/local";
import NextTopLoader from "nextjs-toploader";
import { Toaster } from "sonner";
import "./globals.css";

const rubik = localFont({
  src: [
    {
      path: "../../public/common/fonts/Rubik-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/common/fonts/Rubik-Medium.ttf",
      weight: "500",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-rubik",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kicks-iota-three.vercel.app/"),
  title: "Kicks - Premium Footwear Store",
  description:
    "Step up your shoe game with Kicks! Find the latest styles for men and women, shop online, and get them fast.",
  openGraph: {
    title: "Kicks - Premium Footwear Store",
    description:
      "Step up your shoe game with Kicks! Find the latest styles for men and women, shop online, and get them fast.",
    url: "https://kicks-iota-three.vercel.app/",
    siteName: "Kicks",
    images: [
      {
        url: "https://kicks-iota-three.vercel.app/common/img/logo/logosite.png",
        width: 1200,
        height: 630,
        alt: "Kicks - Premium Footwear Store",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/site.webmanifest",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${rubik.variable} ${rubik.variable} antialiased`}>
        <NextTopLoader />
        <Toaster />
        {children}
      </body>
    </html>
  );
}
