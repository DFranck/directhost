"use client";
import { useQuote } from "@/providers/cart/cart-provider";
import { useLocale, useTranslations } from "next-intl";
const Products = () => {
  const locale = useLocale();
  const t = useTranslations("Layout.Pages.Products");
  const { addToQuote, removeFromQuote } = useQuote();
  const imgStyle = "bg-border rounded w-full";
  const titleStyle = "text-primary font-bold";
  const cardStyle =
    "hover:border-primary transition-all h-full flex flex-col justify-between";
  return (
    <>
      <h1>items</h1>
    </>
  );
};

export default Products;
