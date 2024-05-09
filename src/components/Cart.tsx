"use client";
import { Product, useQuote } from "@/providers/cart/cart-provider";
import { ShoppingCart } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Input } from "./ui/input";
const Cart = () => {
  const pathname = usePathname();
  const isPathnameCheckout = pathname.includes("cart");
  const { quoteList, totalQuantity } = useQuote();
  const [showCart, setShowCart] = useState(false);
  const locale = useLocale();
  const t = useTranslations("Layout.Cart");
  const { addToQuote, reduceFromQuote } = useQuote();
  const [quantity, setQuantity] = useState(1);
  const handleQuantityChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    product: { product: Product; quantity: number }
  ) => {
    event.preventDefault();
    const prevValue = product.quantity;
    const value = parseInt(event.target.value);
    if (!isNaN(value)) {
      setQuantity(value);
      addToQuote(product.product, value);
      reduceFromQuote(product.product.id, prevValue);
    }
  };
  if (!isPathnameCheckout) {
    return (
      <>
        {quoteList.length > 0 &&
          (showCart ? (
            <Card className="fixed bottom-4 right-4">
              <Button
                variant="ghost"
                className="absolute top-2 right-2"
                onClick={() => setShowCart(false)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
                  />
                </svg>
              </Button>
              <CardHeader className="p-4">
                <CardTitle>{t("title")}</CardTitle>
                <CardDescription>
                  {totalQuantity} {t("goods")}
                </CardDescription>
              </CardHeader>
              <CardContent className="p-2">
                <ul className="flex flex-col gap-2">
                  {quoteList.map((product) => (
                    <div
                      key={product.product.id}
                      className="flex rounded justify-between p-2 bg-accent gap-2 items-center"
                    >
                      <div className="flex items-center">
                        <Input
                          className="w-6 p-0 text-center h-full appearance-none border-none shadow-none select-none"
                          min="1"
                          max="99"
                          step="1"
                          name="quantity"
                          defaultValue={product.quantity}
                          value={product.quantity}
                          onChange={(e) => handleQuantityChange(e, product)}
                        />
                        <span>x</span>
                      </div>
                      <p>{product.product.reference}</p>
                      <div className="flex gap-2">
                        <div className="flex gap-0.5">
                          <div className="flex flex-col gap-0.5">
                            <button
                              type="button"
                              className="px-2 text-foreground border rounded hover:bg-primary/40"
                              onClick={() => {
                                addToQuote(product.product);
                              }}
                            >
                              +
                            </button>
                            <button
                              type="button"
                              className="px-2 text-foreground border rounded hover:bg-destructive/40"
                              onClick={() => {
                                reduceFromQuote(product.product.id);
                              }}
                            >
                              -
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="p-4 justify-center">
                {!isPathnameCheckout && (
                  <Button asChild onClick={() => setShowCart(false)}>
                    <Link href={`/${locale}/checkout/cart`}>{t("quote")}</Link>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ) : (
            <Button
              className="fixed bottom-4 right-4 p-6 pr-2 space-x-2 animate-slideInFromLeft duration-100"
              onClick={() => setShowCart(true)}
            >
              {t("title")}
              <div className="relative">
                <ShoppingCart />
                <span className="absolute top-0 left-1.5 bg-foreground/50 rounded-full w-4 h-4 flex justify-center items-center text-background">
                  {totalQuantity}
                </span>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 18.75 7.5-7.5 7.5 7.5"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 12.75 7.5-7.5 7.5 7.5"
                />
              </svg>
            </Button>
          ))}
      </>
    );
  } else {
    return null;
  }
};

export default Cart;
