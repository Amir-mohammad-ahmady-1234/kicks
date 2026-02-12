import { categoryP, Gender } from "@prisma/client";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export interface HandleSubmitEditFormTS {
  productName: string;
  description: string;
  fullDescription: string;
  price: string;
  discount: string;
  category: categoryP;
  gender: Gender;

  selectedSizes: string[];

  params: { id: string };
  router: AppRouterInstance;

  setSubmitting: (value: boolean) => void;
}
