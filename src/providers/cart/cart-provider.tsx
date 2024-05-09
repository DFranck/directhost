"use client";
import { createContext, useContext, useState } from "react";

export type Product = {
  id: string;
  [key: string]: any;
};

type QuoteList = {
  product: Product;
  quantity: number;
};

type Client = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber?: string;
  companyName: string;
  address: string;
  zipeCode: string;
  billingAddress?: string;
  billingZipeCode?: string;
  [key: string]: string | undefined;
};

type QuoteContextValue = {
  quoteList: QuoteList[];
  addToQuote: (product: Product, quantity?: number) => void;
  reduceFromQuote: (productId: string, quantity?: number) => void;
  removeFromQuote: (productId: string) => void;
  totalQuantity: number;
  client: Client | null;
  addClient: (client: Client) => void;
  clearQuoteList: () => void;
};

const QuoteContext = createContext<QuoteContextValue | null>(null);

export function useQuote() {
  const context = useContext(QuoteContext);
  if (!context) {
    throw new Error("useQuote must be used within a QuoteProvider");
  }
  return context;
}

export function QuoteProvider({ children }: { children: React.ReactNode }) {
  const [quoteList, setQuoteList] = useState<QuoteList[]>([]);
  const [client, setClient] = useState<Client | null>(null);
  const totalQuantity = quoteList.reduce(
    (total, item) => total + item.quantity,
    0
  );
  const clearQuoteList = () => {
    setQuoteList([]);
  };
  const addClient = (newClient: Client) => {
    setClient(newClient);
  };
  const addToQuote = (
    product: Product,
    quantity: number | undefined = 1,
    totalQuantity = 0
  ) => {
    setQuoteList((prev) => {
      totalQuantity += quantity;
      const existingProductIndex = prev.findIndex(
        (quoteItem) => quoteItem.product.id === product.id
      );
      if (existingProductIndex > -1) {
        const newQuoteList = [...prev];
        newQuoteList[existingProductIndex] = {
          ...newQuoteList[existingProductIndex],
          quantity: newQuoteList[existingProductIndex].quantity + quantity,
        };
        return newQuoteList;
      } else {
        return [...prev, { product, quantity }];
      }
    });
  };
  const reduceFromQuote = (
    productId: string,
    quantity: number | undefined = 1
  ) => {
    console.log("reduceFormQuote productId: ", productId);
    setQuoteList((prev) => {
      const existingProductIndex = prev.findIndex(
        (quoteItem) => quoteItem.product.id === productId
      );
      if (existingProductIndex >= 0) {
        const newQuantity = prev[existingProductIndex].quantity - quantity;
        if (newQuantity > 0) {
          const newQuoteList = [...prev];
          newQuoteList[existingProductIndex] = {
            ...newQuoteList[existingProductIndex],
            quantity: newQuantity,
          };
          return newQuoteList;
        } else {
          return prev.filter(
            (quoteItem, index) => index !== existingProductIndex
          );
        }
      }
      return prev;
    });
  };

  const removeFromQuote = (productId: string) => {
    setQuoteList((prev) =>
      prev.filter((quoteItem) => quoteItem.product.id !== productId)
    );
  };

  return (
    <QuoteContext.Provider
      value={{
        client,
        addClient,
        quoteList,
        addToQuote,
        clearQuoteList,
        removeFromQuote,
        totalQuantity,
        reduceFromQuote,
      }}
    >
      {children}
    </QuoteContext.Provider>
  );
}
