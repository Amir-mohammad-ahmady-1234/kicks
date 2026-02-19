import FilterAdminPage from "@/core/features/admin/components/ui/product/FilterAdminPage";

function page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  return <FilterAdminPage searchParams={searchParams} />;
}

export default page;
