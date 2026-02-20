import SectionLayout from "@/core/components/custom/ui/SectionLayout";

import BannerShop from "@/core/features/main/components/ui/shop/BannerShop";
import HeadFilterShop from "@/core/features/main/components/ui/shop/HeadFilterShop";
import ShopProduct from "@/core/features/main/components/ui/shop/ShopProduct";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "shop",
  description:
    "Browse the latest sneakers and shoes at Kicks Shop. Filter by style, size, and category to find your perfect pair.",
};

function page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  return (
    <SectionLayout>
      <BannerShop />
      <HeadFilterShop />
      <ShopProduct searchParams={searchParams} />
    </SectionLayout>
  );
}

export default page;
