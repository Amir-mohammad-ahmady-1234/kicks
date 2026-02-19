import { filterBlogTabel } from "@/core/api-route/admin/handlers/tabel/filterBlogTabel";
import { ImgNormalCustom } from "@/core/components/custom/ui/ImgNormalCustom";
import { Paginations } from "@/core/components/custom/ui/Pagination";
import SectionLayout from "@/core/components/custom/ui/SectionLayout";
import { TypographyBig } from "@/core/components/custom/ui/Typography";
import { categoriesBlog } from "@/core/features/admin/assets/mock/categoriesBlog";
import { formatDate } from "@/core/utils/formatDate";
import { validSortOrder } from "@/core/utils/validSortOrder";
import { BlogStatus } from "@prisma/client";
import { JsonValue } from "@prisma/client/runtime/library";
import { Calendar, ChevronRight, User } from "lucide-react";
import Link from "next/link";

type BlogDataTs = {
  id: string;
  title: string;
  excerpt: string;
  Image: string;
  author: string;
  category: string;
  status: BlogStatus;
  tags: JsonValue;
  createdAt: Date;
  updatedAt: Date;
  content: string;
  slug: string;
};

async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  const params = await searchParams;
  const blogdata = await filterBlogTabel({
    category: params.category as categoriesBlog,
    limit: 8,
    page: params.page ? Number(params.page) : 1,
    search: params.serch,
    sortOrder: validSortOrder(params),
  });
  const pagination = blogdata.pagination;
  const data = blogdata.data;
  return (
    <>
      <SectionLayout>
        <TypographyBig className="tracking-widest mb-6 mt-35">
          OUR <span className="text-primary">BLOG</span>
        </TypographyBig>
        <p className="text-gray-600 mb-8 max-w-2xl">
          Discover the latest trends, tips, and stories from the world of
          footwear
        </p>
      </SectionLayout>

      <SectionLayout>
        <div className="flex gap-2">
          <div className="w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.map((blog: BlogDataTs) => (
                <div
                  key={blog.id}
                  className="group bg-white border border-stone-100 rounded-2xl overflow-hidden shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                >
                  <Link
                    href={`blog/${blog.slug}`}
                    className="block overflow-hidden"
                  >
                    <div className="relative h-56 w-full overflow-hidden">
                      <ImgNormalCustom
                        src={blog.Image}
                        alt={blog.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <span className="absolute top-4 left-4 bg-primary text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                        {blog.category}
                      </span>
                    </div>
                  </Link>

                  <div className="p-5">
                    <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                      <span className="flex items-center gap-1">
                        <User className="h-3 w-3" />
                        {blog.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {formatDate(blog.createdAt)}
                      </span>
                    </div>

                    <Link href={`blog/${blog.slug}`}>
                      <h3 className="font-bold text-lg mb-2 line-clamp-2 hover:text-primary transition-colors">
                        {blog.title}
                      </h3>
                    </Link>

                    <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                      {blog.excerpt}
                    </p>

                    <Link
                      href={`blog/${blog.slug}`}
                      className="inline-flex items-center text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
                    >
                      Read More
                      <ChevronRight />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <Paginations pagination={pagination} />
            </div>
          </div>
        </div>
      </SectionLayout>
    </>
  );
}

export default BlogPage;
