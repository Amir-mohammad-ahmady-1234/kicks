"use client";

import { findAllBlog } from "@/core/api-route/site/handlers/blog/findallblog/findAllBlog";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import SkeletonReview from "../skeleton/SkeletonReview";
import ReviewsSection from "./ReviewsSection";

export default function ReviewsSectionClient() {
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    async function fetchBlog() {
      try {
        const pdatablog = await findAllBlog();
        setBlog(pdatablog.blog || []);
      } catch {
        toast.error("Error fetching blog");
        setBlog([]);
      }
    }

    fetchBlog();
  }, []);

  if (!blog) {
    return <SkeletonReview />;
  }

  return <ReviewsSection blog={blog} />;
}
