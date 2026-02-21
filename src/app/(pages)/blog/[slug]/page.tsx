import SingelPageBlog from "@/core/features/main/components/ui/blog/SingelPageBlog";
import SkeletonBlogSingle from "@/core/features/main/components/ui/skeleton/SkeletonBlogSingle";
import prisma from "@/core/lib/db/client";
import { Metadata } from "next";
import { Suspense } from "react";

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
      <Suspense fallback={<SkeletonBlogSingle />}>
        <SingelPageBlog params={params} />
      </Suspense>
    </>
  );
}

export default BlogPostPage;
