import { filterBlogTabel } from "@/core/api-route/admin/handlers/tabel/filterBlogTabel";
import { validSortOrder } from "@/core/utils/validSortOrder";
import { categoriesBlog } from "../../../assets/mock/categoriesBlog";
import HeadFilterBlog from "./HeadFilterBlog";
import TabelBlogs from "./TabelBlogs";

async function BlogAdminPage({ searchParams }) {
  const params = await searchParams;

  const Pdata = await filterBlogTabel({
    category: params.category as categoriesBlog,
    limit: params.limit ? Number(params.limit) : 5,
    page: params.page ? Number(params.page) : 1,
    search: params.search ?? "",
    sortOrder: validSortOrder(params),
  });
  console.log(Pdata);
  return (
    <section className="p-4">
      <HeadFilterBlog />
      <TabelBlogs data={Pdata.data || []} pagination={Pdata.pagination} />
    </section>
  );
}

export default BlogAdminPage;
