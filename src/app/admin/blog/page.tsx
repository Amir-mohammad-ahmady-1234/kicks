import { filterBlogTabel } from "@/core/api-route/admin/handlers/tabel/filterBlogTabel";
import Modal from "@/core/components/custom/ui/Modal";
import { TypographyH3 } from "@/core/components/custom/ui/Typography";
import { Button } from "@/core/components/shadcn/ui/button";
import { categoriesBlog } from "@/core/features/admin/assets/mock/categoriesBlog";
import FormCreateBlog from "@/core/features/admin/components/ui/blog/FormCreateBlog";
import TabelBlogs from "@/core/features/admin/components/ui/blog/TabelBlogs";
import { validSortOrder } from "@/core/utils/validSortOrder";
import { Plus } from "lucide-react";

async function page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
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
      <div className="flex items-center justify-between">
        <TypographyH3>Blog</TypographyH3>

        <Modal
          trigger={
            <Button variant="outline">
              <Plus /> ADD NEW Blog
            </Button>
          }
          title="new product"
          description="Please enter product information"
          className="w-2xl"
        >
          <FormCreateBlog />
        </Modal>
      </div>
      <TabelBlogs data={Pdata.data || []} pagination={Pdata.pagination} />
    </section>
  );
}

export default page;
