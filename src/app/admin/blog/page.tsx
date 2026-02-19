import BlogAdminPage from "@/core/features/admin/components/ui/blog/BlogAdminPage";

function page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  return <BlogAdminPage searchParams={searchParams} />;
}

export default page;
