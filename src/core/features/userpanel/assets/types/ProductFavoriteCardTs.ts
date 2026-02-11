import { Products } from "@prisma/client";

export interface ProductFavoriteCardTs {
  product: Products;
  index: number;
  userId: string;
}
