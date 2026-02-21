"use client";

import { categoriesData } from "@/core/assets/mock/categories";
import { TypographyH1 } from "@/core/components/custom/ui/Typography";
import { useEffect, useState } from "react";
import SkeletonCategories from "../skeleton/SkeletonCategories";
import CategoriesSection from "./CategoriesSection";

export default function CategoriesSectionClient() {
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCategories(categoriesData);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  if (!categories) {
    return <SkeletonCategories />;
  }

  return (
    <section className="bg-foreground">
      <div className="flex justify-start pages-container">
        <TypographyH1 className="text-secondary">Categories</TypographyH1>
      </div>
      <CategoriesSection categoriesData={categories} />;
    </section>
  );
}
