import { filterBlogTabel } from "@/core/api-route/admin/handlers/tabel/filterBlogTabel";
import { Paginations } from "@/core/components/custom/ui/Pagination";
import SectionLayout from "@/core/components/custom/ui/SectionLayout";
import { categoriesBlog } from "@/core/features/admin/assets/mock/categoriesBlog";
import { validSortOrder } from "@/core/utils/validSortOrder";
import { BlogDataTs } from "../../../assets/types/Blog";
import CardBlog from "./CardBlog";

async function BlogAllCards({ searchParams }) {
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
    <SectionLayout>
      <div className="flex gap-2">
        <div className="w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.map((blog: BlogDataTs) => (
              <div
                key={blog.id}
                className="group bg-white border border-stone-100 rounded-2xl overflow-hidden shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
              >
                <CardBlog blog={blog} />
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Paginations pagination={pagination} />
          </div>
        </div>
      </div>
    </SectionLayout>
  );
}

export default BlogAllCards;
