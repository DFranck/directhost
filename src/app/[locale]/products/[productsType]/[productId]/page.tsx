"use client";
import { ImageGallery } from "@/components/ProductSlider";
import Section from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { products } from "@/mocks/products";
import { useQuote } from "@/providers/cart/cart-provider";
import { Accessory } from "@/types/accessories";
import { Spade } from "@/types/spade";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@radix-ui/react-collapsible";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
const ProductPage = ({
  params,
}: {
  params: { productId: string; productsType: string };
}) => {
  const { addToQuote } = useQuote();
  const productType = params.productsType;
  const productId = params.productId;
  const [product, setProduct] = useState<Spade | Accessory | undefined>(
    undefined
  );
  useEffect(() => {
    let selectedProduct;
    switch (productType) {
      case "spades":
        selectedProduct = products.find(
          (product) => product.name === "spade" && product.id === productId
        );
        break;
      case "accessories":
        selectedProduct = products.find(
          (product) => product.name === "accessory" && product.id === productId
        );
        break;
    }
    if (selectedProduct) {
      setProduct(selectedProduct);
      console.log(selectedProduct);
    } else {
      console.log("Produit non trouvé");
    }
  }, [productType, productId]);
  const productEntries = Object.entries(product || {}).filter(
    ([key]) =>
      ![
        "id",
        "thumbnail",
        "video",
        "model",
        "price",
        "name",
        "manufacturer",
        "top",
        "size",
        "certification",
      ].includes(key)
  );
  const t = useTranslations("Layout.Pages.Products.Product");
  const [quantity, setQuantity] = useState(1);
  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value);
    if (!isNaN(value)) {
      setQuantity(value);
    }
  };
  if (!product) {
    return <div>{t("notFound")}</div>;
  } else {
    const getTitle = () => {
      switch (productType) {
        case "spades":
          const spadeProduct = product as Spade;
          return t("Spades.title", {
            numberOfSpade: spadeProduct?.numberOfSpade,
            upperTreeBallDiameter: spadeProduct?.upperTreeBallDiameter,
          });
          break;
        case "accessories":
          return <h2>accessoire</h2>;
          break;
        default:
          return null;
      }
    };
    const getDescription = () => {
      switch (productType) {
        case "spades":
          const spadeProduct = product as Spade;
          return t("Spades.reference", {
            reference: spadeProduct?.reference,
          });
          break;
        case "accessories":
          return "en attente";
          break;
        default:
          return null;
      }
    };
    const getContent = () => {
      switch (productType) {
        case "spades":
          const spadeProduct = product as Spade;
          return t("Spades.description", {
            diameterBreastHeight: `${spadeProduct?.diameterBreastHeight[0]}/${spadeProduct?.diameterBreastHeight[1]}`,
          });
          break;
        case "accessories":
          const accessoryProduct = product as Accessory;
          return "en attente";
          break;
        default:
          return null;
      }
    };
    const getFooter = () => {
      switch (productType) {
        case "spades":
          const spadeProduct = product as Spade;
          return t("Spades.footer", {
            diameterBreastHeight: `${spadeProduct?.diameterBreastHeight[0]}/${spadeProduct?.diameterBreastHeight[1]}`,
          });
          break;
        case "accessories":
          const accessoryProduct = product as Accessory;
          return "en attente";
          break;
        default:
          return null;
      }
    };
    const getDetails = (key: string) => {
      switch (productType) {
        case "spades":
          const spadeProduct = product as Spade;
          return t(`Spades.Details.${key}`);
          break;
        case "accessories":
          const accessoryProduct = product as Accessory;
          return "en attente";
          break;
        default:
          return null;
      }
    };
    return (
      <div className="w-full px-10">
        <Card
          className={cn(
            " border-none shadow-none flex flex-col max-w-7xl mx-auto md:flex-row "
          )}
        >
          <ImageGallery images={product?.thumbnail} />
          <div className="flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="text-3xl  xl:text-4xl 2xl:text-5xl font-bold">
                {getTitle()}
              </CardTitle>
              <CardDescription>{getDescription()}</CardDescription>
            </CardHeader>
            <CardContent className="text-justify">{getContent()}</CardContent>
            <CardFooter className="flex flex-col text-justify items-end gap-4 italic text-sm text-muted-foreground">
              {getFooter()}
              <div className="flex gap-2 w-full">
                <div className="flex gap-0.5">
                  <Input
                    className="w-12 text-center h-full appearance-none"
                    min="1"
                    max="99"
                    step="1"
                    name="quantity"
                    defaultValue={quantity}
                    value={quantity}
                    onChange={(e) => handleQuantityChange(e)}
                  />
                  <div className="flex flex-col gap-0.5">
                    <button
                      className="px-2 text-foreground border rounded hover:bg-primary/40"
                      onClick={() => {
                        setQuantity(quantity < 99 ? quantity + 1 : quantity);
                      }}
                    >
                      +
                    </button>
                    <button
                      className="px-2 text-foreground border rounded hover:bg-destructive/40"
                      onClick={() => {
                        setQuantity(quantity > 1 ? quantity - 1 : quantity);
                      }}
                    >
                      -
                    </button>
                  </div>
                </div>
                <div className="flex items-center">
                  {product && (
                    <Button
                      onClick={() => {
                        addToQuote(product, quantity);
                        setQuantity(1);
                      }}
                      className="h-full"
                    >
                      {t("addToCart")}
                    </Button>
                  )}
                  {/* <span className="ml-1">En stock</span> */}
                </div>
              </div>
            </CardFooter>
          </div>
        </Card>
        <Section className="flex-col max-w-7xl mx-auto mt-4 mb-20 gap-2 lg:flex-row lg:items-start">
          {product?.video && (
            <Collapsible
              className="cursor-pointer w-full space-y-2"
              defaultOpen={true}
            >
              <CollapsibleTrigger
                className={cn("bg-card w-full p-4 border shadow")}
              >
                {t("video")}
              </CollapsibleTrigger>
              <CollapsibleContent className=" w-full">
                <video src={product?.video[0]} controls className="w-full" />
              </CollapsibleContent>
            </Collapsible>
          )}
          <Collapsible
            className="cursor-pointer w-full space-y-2"
            defaultOpen={true}
          >
            <CollapsibleTrigger
              className={cn("bg-card w-full p-4 border shadow")}
            >
              {t("details")}
            </CollapsibleTrigger>
            <CollapsibleContent>
              <table className=" w-full max-w-5xl border border-border rounded-lg shadow">
                <tbody>
                  {productEntries.map(([key, value], index) => (
                    <tr key={key} className="border flex flex-col md:flex-row">
                      <td
                        className={`w-full md:w-[30%] text-ellipsis overflow-hidden font-bold bg-accent dark:bg-card p-4 `}
                      >
                        {getDetails(key)}
                      </td>
                      <td className={`flex-1 p-4 bg-accent/50 dark:bg-card/50`}>
                        {value === "0" || "" ? "-" : value}
                        {key === "minimalExcavatorWeight" && (
                          <span className="ml-1">{t("details.tons")}</span>
                        )}
                        {key === "minimalSkidSteerLoaderPower" && (
                          <span className="ml-1">kw</span>
                        )}
                        {(key === "length" ||
                          key === "width" ||
                          key === "height") && <span className="ml-1">mm</span>}
                        {key === "weight" && <span className="ml-1">kg</span>}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </CollapsibleContent>
          </Collapsible>
        </Section>
        <Section className="mb-20">
          <div className="flex gap-2">
            <div className="flex gap-0.5">
              <Input
                className="w-12 text-center h-full appearance-none"
                min="1"
                max="99"
                step="1"
                name="quantity"
                defaultValue={quantity}
                value={quantity}
                onChange={(e) => handleQuantityChange(e)}
              />
              <div className="flex flex-col gap-0.5">
                <button
                  className="px-2 text-foreground border rounded hover:bg-primary/40"
                  onClick={() => {
                    setQuantity(quantity < 99 ? quantity + 1 : quantity);
                  }}
                >
                  +
                </button>
                <button
                  className="px-2 text-foreground border rounded hover:bg-destructive/40"
                  onClick={() => {
                    setQuantity(quantity > 1 ? quantity - 1 : quantity);
                  }}
                >
                  -
                </button>
              </div>
            </div>
            <div className="flex items-center">
              {product && (
                <Button
                  onClick={() => {
                    addToQuote(product, quantity);
                    setQuantity(1);
                  }}
                  className="h-full"
                >
                  {t("addToCart")}
                </Button>
              )}
              {/* <span className="ml-1">En stock</span> */}
            </div>
          </div>
        </Section>
      </div>
    );
  }
};
export default ProductPage;
