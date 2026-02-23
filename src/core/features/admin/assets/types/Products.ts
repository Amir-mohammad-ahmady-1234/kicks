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

export interface ProductDashboardStep3Ts {
  setSizes: React.Dispatch<React.SetStateAction<string[]>>;
  sizes: string[];
}
