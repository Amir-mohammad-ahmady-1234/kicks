"use client";

import React, { useEffect, useState } from "react";
import { searchProducts } from "@/core/api-route/site/handlers/searchProducts/searchProducts";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { saveSearch } from "@/core/api-route/site/handlers/searchProducts/saveSearch";
import { useHeader } from "../../../context/HeaderContext";

interface Props {
  serachValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  setSearchingMode: React.Dispatch<React.SetStateAction<boolean>>;
  userId: string;
}

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  mainImage: string;
}

export default function SearchResult({
  serachValue,
  setSearchValue,
  setSearchingMode,
  userId,
}: Props) {
  const router = useRouter();
  const { setSearchModalOpen } = useHeader();
  const [results, setResults] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!serachValue || serachValue.trim().length < 3) {
      setResults([]);
      return;
    }

    let isCancelled = false;

    async function getResult() {
      setLoading(true);
      try {
        const res = await searchProducts(serachValue);
        if (!isCancelled && res.success) {
          setResults(res.data);
        }
      } catch (err) {
        console.error(err);
      } finally {
        if (!isCancelled) setLoading(false);
      }
    }

    const timeout = setTimeout(() => {
      getResult();
    }, 400);

    return () => {
      clearTimeout(timeout);
      isCancelled = true;
    };
  }, [serachValue]);

  if (loading) return <div>Loading...</div>;
  if (results.length === 0)
    return <div>No results found for {`"${serachValue}"`}</div>;

  async function handleProductClicked(productId: string) {
    const text = serachValue.trim();
    if (text.length > 0) {
      try {
        await saveSearch({ userId, text });
      } catch (err) {
        console.error("Failed to save search:", err);
      }
    }

    router.push(`/shop/${productId}`);

    setSearchModalOpen(false);
    setSearchValue("");
    setSearchingMode(false);
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {results.map((product) => (
        <div
          key={product.id}
          onClick={() => handleProductClicked(product.id)}
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors border cursor-pointer"
        >
          <Image
            src={product.mainImage || "/images/default.png"}
            alt={product.name}
            className="w-16 h-16 object-cover rounded-md shrink-0"
            width={64}
            height={64}
          />
          <div className="flex-1 min-w-0">
            <h4 className="font-medium text-sm truncate">{product.name}</h4>
            <p className="text-primary font-semibold mt-1">{product.price}$</p>
          </div>
        </div>
      ))}
    </div>
  );
}
