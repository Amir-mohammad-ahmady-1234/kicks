export interface CreateCartTs {
  userId: string;
  productId: string;
  quantity: number;
  size: string | null;
  price?: number;
  discount?: number | null;
}
