import BlogAllCards from "@/core/features/main/components/ui/blog/BlogAllCards";
import HeadBlog from "@/core/features/main/components/ui/blog/HeadBlog";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "blog",
  description:
    "Read the latest articles and tips on sneakers, shoe trends, and style at Kicks Blog. Stay updated with the newest footwear news.",
};

function BlogPage({
  searchParams,
}: {
  searchParams?: Promise<{ [key: string]: string | undefined }>;
}) {
  return (
    <>
      <HeadBlog />
      <BlogAllCards searchParams={searchParams} />
    </>
  );
}

export default BlogPage;
