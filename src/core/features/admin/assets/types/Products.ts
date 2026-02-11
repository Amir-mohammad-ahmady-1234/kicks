export enum categoryP {
  crocs = "crocs",
  nirkenstock = "nirkenstock",
  clarks = "clarks",
  timberland = "timberland",
  allen = "allen",
  oofos = "oofos",
  sorel = "sorel",
  hunter = "hunter",
}

export interface ProductType {
  productName: string;
  description: string;
  fullDescription: string;
  price: number;
  discount: number;
  mainImage: string;
  otherImages: string[];
  gender: "men" | "women";
  category: categoryP;
}
export type ProductOrderList = {
  id: string;
  name: string;
  description: string | null;
  mainImage: string | null;
  images: string[];
  category: string | null;
  gender: string | null;
  discount?: number;
  price: number;
};
