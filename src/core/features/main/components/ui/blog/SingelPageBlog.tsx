import { getBlogBySlug } from "@/core/api-route/site/handlers/blog/findblogbyid/getBlogBySlug";
import { BlogItemType } from "@/core/features/admin/assets/types/BlogTypes";
import { notFound } from "next/navigation";
import ContentBlogSinglePage from "./ContentBlogSinglePage";
import HeadBlogSinglePage from "./HeadBlogSinglePage";

async function SingelPageBlog({ params }) {
  const { slug } = await params;

  const result = await getBlogBySlug({ slug });
  if (!result.success) {
    notFound();
  }

  const post = result.data as BlogItemType;

  return (
    <>
      <HeadBlogSinglePage post={post} />

      <ContentBlogSinglePage post={post} />
    </>
  );
}

export default SingelPageBlog;
