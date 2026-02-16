import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverActions: {
    bodySizeLimit: "10mb",
  },
  images: {
    domains: ["res.cloudinary.com", "placehold.jp"],
  },
};

export default nextConfig;
