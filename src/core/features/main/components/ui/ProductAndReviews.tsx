import { findAllBlog } from "@/core/api-route/site/handlers/blog/findallblog/findAllBlog";
import { findAllProduct } from "@/core/api-route/site/handlers/shop/findallproduct/findAllProduct";
import SectionLayout from "@/core/components/custom/ui/SectionLayout";
import CardsProduct from "@/core/features/main/components/ui/CardProduct";
import CategoriesSection from "@/core/features/main/components/ui/CategoriesSection";
import HeadeCardProduct from "@/core/features/main/components/ui/HeadeCardProduct";
import ReviewsSection from "@/core/features/main/components/ui/ReviewsSection";

import { getUserId } from "@/core/utils/getUserId";
import { Suspense } from "react";
import SkeletonSlide from "./SkeletonSlide";
async function ProductAndReviews() {
  const pdata = await findAllProduct();
  const pdatablog = await findAllBlog();
  const id = await getUserId();
  console.log(id);
  const products =
    pdata?.product?.map((item) => ({
      id: item.id,
      src: item.mainImage,
      title: item.name,
      price: item.price,
      percentOff: item.discount,
      mainImage: item.mainImage,
      category: item.category,
      star: item.star,
    })) ?? [];
  const blog = pdatablog.blog || [];
  return (
    <>
      <SectionLayout>
        <HeadeCardProduct />
        <Suspense fallback={<SkeletonSlide />}>
          <CardsProduct products={products} />
        </Suspense>
      </SectionLayout>
      <CategoriesSection />

      <SectionLayout>
        <ReviewsSection blog={blog} />
      </SectionLayout>
    </>
  );
}

export default ProductAndReviews;
