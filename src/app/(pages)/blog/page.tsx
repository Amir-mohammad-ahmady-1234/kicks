import BlogAllCards from "@/core/features/main/components/ui/blog/BlogAllCards";
import HeadBlog from "@/core/features/main/components/ui/blog/HeadBlog";

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
