import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/paneladmin", "/auth", "/barberly", "/api/"],
      },
      {
        userAgent: ["GPTBot", "ChatGPT-User", "anthropic-ai", "Claude-Web"],
        disallow: "/",
      },
    ],
    sitemap: "http://localhost:3000/sitemap.xml",
  };
}
