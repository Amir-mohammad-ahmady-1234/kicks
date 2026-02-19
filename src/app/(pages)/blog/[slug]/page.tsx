import { getBlogBySlug } from "@/core/api-route/site/handlers/blog/findblogbyid/getBlogBySlug";
import SectionLayout from "@/core/components/custom/ui/SectionLayout";
import { Badge } from "@/core/components/shadcn/ui/badge";
import { BlogItemType } from "@/core/features/admin/assets/types/BlogTypes";
import { calculateReadingTime } from "@/core/features/main/utils/calculateReadingTime";
import { formatDate } from "@/core/utils/formatDate";
import { Calendar, Clock, User } from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";

async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const result = await getBlogBySlug({ slug });
  if (!result.success) {
    notFound();
  }

  const post = result.data as BlogItemType;

  return (
    <>
      <section className="max-w-5xl mx-auto px-4 mt-35">
        <div className="relative w-full h-75 md:h-125 rounded-2xl overflow-hidden shadow-xl">
          <Image
            src={post.Image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-lienar-to-t from-black/70 via-black/20 to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
            <Badge className="mb-3 bg-primary/90 hover:bg-primary text-white border-0 backdrop-blur-sm">
              {post.category}
            </Badge>
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight max-w-4xl">
              {post.title}
            </h1>
          </div>
        </div>
      </section>

      <SectionLayout>
        <article className="max-w-3xl mx-auto">
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 border-b pb-6 mb-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <User className="h-4 w-4 text-primary" />
              </div>
              <span className="font-medium">{post.author}</span>
            </div>

            <span className="text-gray-300">|</span>

            <span className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4 text-gray-400" />
              {formatDate(post.createdAt)}
            </span>

            <span className="text-gray-300">|</span>

            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-gray-400" />
              <span> {calculateReadingTime(post.content)} min read</span>
            </span>
          </div>

          <div
            className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-700 prose-img:rounded-xl prose-img:shadow-lg"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {post.tags && post.tags.length > 0 && (
            <footer className="mt-12 pt-6 border-t">
              <h3 className="text-sm font-medium text-gray-500 mb-3">tags:</h3>
              <div className="flex flex-wrap gap-2">
                {Array.isArray(post.tags) ? (
                  post.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full text-sm transition-colors"
                    >
                      #{tag}
                    </span>
                  ))
                ) : (
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                    #{post.tags}
                  </span>
                )}
              </div>
            </footer>
          )}
        </article>
      </SectionLayout>
    </>
  );
}

export default BlogPostPage;
