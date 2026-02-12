import { blogspage } from "@/core/assets/mock/blog";
import { Paginations } from "@/core/components/custom/ui/Pagination";
import SectionLayout from "@/core/components/custom/ui/SectionLayout";
import { TypographyBig } from "@/core/components/custom/ui/Typography";
import Image from "next/image";
import Link from "next/link";

function page() {
  const pagination = {
    limit: 5,
    page: 1,
    total: 2,
    totalPages: 1,
  };
  return (
    <>
      <SectionLayout>
        <TypographyBig className="tracking-widest mb-6 mt-35">
          OUR <span className="text-primary">BLOG</span>
        </TypographyBig>
      </SectionLayout>
      <SectionLayout>
        <div className="flex  gap-2">
          <div className="w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {blogspage.map((blog) => (
                <div
                  key={blog.id}
                  className="bg-white border border-stone-100 rounded-2xl overflow-hidden shadow-sm transition hover:shadow-md hover:scale-103"
                >
                  <Link href={`blog/${blog.slug}`}>
                    <Image
                      src={blog.thumbnail}
                      alt={blog.title}
                      width={300}
                      height={250}
                      className="object-cover w-full h-48"
                    />
                  </Link>
                  <div className="p-4">
                    <h3 className="font-semibold text-base">{blog.title}</h3>
                    <p className="text-sm text-stone-500 bg-[#F5F5F5] mt-3 rounded-xl p-2">
                      {blog.createdAt} • admin
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-2">
              <Paginations pagination={pagination} />
            </div>
          </div>
        </div>
      </SectionLayout>
    </>
  );
}

export default page;
