import SectionLayout from "@/core/components/custom/ui/SectionLayout";

import BannerShop from "@/core/features/main/components/ui/shop/BannerShop";
import HeadFilterShop from "@/core/features/main/components/ui/shop/HeadFilterShop";
import ShopFilters from "@/core/features/main/components/ui/shop/ShopFilters";
import ShopProducts from "@/core/features/main/components/ui/shop/ShopProducts";
import React from "react";

function page() {
  return (
    <SectionLayout>
      <BannerShop />
      <HeadFilterShop />
      <div className="md:flex gap-5 sm:flex-col md:flex-row">
        <ShopFilters />
        <ShopProducts />
      </div>
    </SectionLayout>
  );
}

export default page;
