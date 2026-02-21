import { findAllProduct } from "@/core/api-route/site/handlers/shop/findallproduct/findAllProduct";
import CardsProduct from "./CardProduct";

async function CardsProductSkeleton() {
  const pdata = await findAllProduct();
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
  return <CardsProduct products={products} />;
}

export default CardsProductSkeleton;
