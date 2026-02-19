import SingelPageBlog from "@/core/features/main/components/ui/blog/SingelPageBlog";

function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  return (
    <>
      <SingelPageBlog params={params} />
    </>
  );
}

export default BlogPostPage;
