import { findAllBlog } from "@/core/api-route/site/handlers/blog/findallblog/findAllBlog";
import ReviewsSection from "./ReviewsSection";

async function ReviewsSectionSkeleton() {
  const pdatablog = await findAllBlog();

  const blog = pdatablog.blog || [];
  return <ReviewsSection blog={blog} />;
}

export default ReviewsSectionSkeleton;
