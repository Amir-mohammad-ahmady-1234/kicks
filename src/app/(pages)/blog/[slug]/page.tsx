import SingelPageBlog from "@/core/features/main/components/ui/blog/SingelPageBlog";
import prisma from "@/core/lib/db/client";
import { Metadata } from "next";

type Props = { params: { slug: string } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await prisma.blog.findUnique({ where: { slug: params.slug } });

  if (!post) {
    return {
      title: "Blog Post Not Found",
      description: "The blog post you are looking for does not exist.",
    };
  }

  return {
    title: post.title,
    description: post.excerpt || "Read this blog post on Kicks Blog.",
  };
}

function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  return (
    <>
      <SingelPageBlog params={params} />
    </>
  );
}

export default BlogPostPage;
