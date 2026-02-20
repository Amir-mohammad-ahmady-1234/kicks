import SingalPageProduct from "@/core/features/main/components/ui/product/SingalPageProduct";
import prisma from "@/core/lib/db/client";
import { Metadata } from "next";

type Props = { params: { slug: string } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = await prisma.products.findUnique({
    where: { id: params.slug },
  });

  if (!product) {
    return {
      title: "product Not Found",
      description: "The product you are looking for does not exist.",
    };
  }

  return {
    title: product.name,
    description: product.description || "buy this product on Kicks shop.",
  };
}

export default function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return <SingalPageProduct params={params} />;
}
