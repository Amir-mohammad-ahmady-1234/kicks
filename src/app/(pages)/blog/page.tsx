import { Paginations } from "@/core/components/custom/ui/Pagination";
import SectionLayout from "@/core/components/custom/ui/SectionLayout";
import { TypographyLarge } from "@/core/components/custom/ui/Typography";
import { Card, CardHeader } from "@/core/components/shadcn/ui/card";
import Image from "next/image";
import Link from "next/link";

function page() {
  const blogs = [
    {
      id: 1,
      slug: "blog/1",
      thumbnail: "/common/img/main/blog/blog1.png",
      title: "title1",
      createdAt: 12,
    },
    {
      id: 2,
      slug: "blog/2",
      thumbnail: "/common/img/main/blog/blog2.png",
      title: "title2",
      createdAt: 22,
    },
    {
      id: 3,
      slug: "blog/3",
      thumbnail: "/common/img/main/blog/blog3.png",
      title: "title3",
      createdAt: 32,
    },
    {
      id: 4,
      slug: "blog/1",
      thumbnail: "/common/img/main/blog/blog1.png",
      title: "title1",
      createdAt: 12,
    },
    {
      id: 5,
      slug: "blog/2",
      thumbnail: "/common/img/main/blog/blog2.png",
      title: "title2",
      createdAt: 22,
    },
    {
      id: 6,
      slug: "blog/3",
      thumbnail: "/common/img/main/blog/blog3.png",
      title: "title3",
      createdAt: 32,
    },
  ];
  return (
    <SectionLayout>
      <div className="flex  gap-2">
        <div className="w-3/12 ">
          <Card className="h-screen">
            <CardHeader>
              <TypographyLarge>archive</TypographyLarge>
            </CardHeader>
          </Card>
        </div>
        <div className="w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.map((blog) => (
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
            {" "}
            <Paginations />
          </div>
        </div>
      </div>
    </SectionLayout>
  );
}

export default page;
