export type CartItemTs = {
  item: {
    id: string;
    cartId: string;
    productId: string;
    product: { name: string; category: string; mainImage: string };
    price: number;
    quantity: number;
    discount?: number;
    size?: string;
  };
  index: number;
};
