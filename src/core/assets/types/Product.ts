export type ProductCardItem = {
  id: string;
  src: string;
  title: string;
  price: number;
  mainImage: string;
  percentOff: number;
  category: string;
  star?: number;
};

export type PropsCardProduct = {
  product?: ProductCardItem;
  listproducts?: ProductCardItem[];
  badgecolor?: string;
  IsPagination?: boolean;
  gridcss?: string;
};
