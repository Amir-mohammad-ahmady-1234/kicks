import SingalPageProduct from "@/core/features/main/components/ui/product/SingalPageProduct";

export default function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return <SingalPageProduct params={params} />;
}
