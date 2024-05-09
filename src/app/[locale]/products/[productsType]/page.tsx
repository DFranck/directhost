"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { products } from "@/mocks/products";
import { useQuote } from "@/providers/cart/cart-provider";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
const ProdcutsTypePage = () => {
  const locale = useLocale();
  const params = useParams();
  const router = useRouter();
  const { addToQuote } = useQuote();
  const page = params?.productsType;
  const [displayedProducts, setDisplayedProducts] = useState(products);
  const t = useTranslations(
    `Layout.Pages.Products.${
      page.slice(0, 1).toString().toUpperCase() + page.slice(1)
    }`
  );
  console.log(page);
  const imgStyle = "bg-border rounded w-full";
  const titleStyle = "text-primary font-bold";
  const cardStyle = "hover:border-primary transition-all";
  useEffect(() => {
    switch (page) {
      case "spades":
        setDisplayedProducts(
          products.filter((product) => product.name === "spade")
        );
        break;
      case "accessories":
        setDisplayedProducts(
          products.filter((product) => product.name === "accessory")
        );
        break;
      default:
        setDisplayedProducts(products);
        break;
    }
    if (page !== "spades" && page !== "accessories") {
      router.push(`/${locale}/not-found`);
    }
  }, [page, locale, router]);

  return (
    <>
      <div className="flex justify-center flex-col text-center max-w-7xl w-full gap-2 p-4 ">
        <h2 className=" font-bold text-4xl">{t("title")}</h2>
        <p>{t("subtitle")}</p>
      </div>
      <div
        className={cn(
          "flex justify-center gap-2 p-4 flex-wrap w-full max-w-7xl"
        )}
      >
        {displayedProducts.map((product: any) => (
          <div
            key={product.name + product.id}
            className="opacity-0 animate-fadeIn relative min-w-[160px] md:min-w-[200px] xl:min-w-[250px] w-1/5"
            style={{
              animationDelay: `${displayedProducts.indexOf(product) * 100}ms`,
            }}
          >
            <Link
              href={`/${locale}/products/${
                product.name === "spade" ? "spades" : "accessories"
              }/${product.id}`}
            >
              <Card className={cardStyle}>
                <CardHeader className="p-2">
                  {product.name === "spade" && (
                    <CardTitle className={titleStyle}>
                      {t("cardTitle", {
                        numberOfSpade: product.numberOfSpade,
                        upperTreeBallDiameter: product.upperTreeBallDiameter,
                      })}
                    </CardTitle>
                  )}
                  {product.name === "accessory" && (
                    <CardTitle className={titleStyle}>
                      {t("cardTitle")}
                    </CardTitle>
                  )}
                  {product.name === "spade" && (
                    <CardDescription>
                      {t("cardDescription", {
                        diameterBreastHeight: product.diameterBreastHeight[1]
                          ? product.diameterBreastHeight[1]
                          : product.diameterBreastHeight[0],
                      })}
                    </CardDescription>
                  )}
                  {product.name === "accessory" && (
                    <CardDescription>{t("cardDescription")}</CardDescription>
                  )}
                </CardHeader>
                <CardContent className="p-2">
                  {product.thumbnail && (
                    <Image
                      src={product.thumbnail[0]}
                      alt={product.name + product.reference}
                      width={150}
                      height={150}
                      className={imgStyle}
                    />
                  )}
                </CardContent>
              </Card>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProdcutsTypePage;
