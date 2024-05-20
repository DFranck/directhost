import { ModalProvider } from "@/providers/modal/modal-provider";
import { AbstractIntlMessages } from "next-intl";
import React from "react";
import { QuoteProvider } from "./cart/cart-provider";
import LanguageProvider from "./language/language-provider";
import { ThemeProvider } from "./theme/theme-provider";
const Providers = ({
  children,
  messages,
}: {
  children: React.ReactNode;
  messages: AbstractIntlMessages;
}) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <LanguageProvider messages={messages}>
        <ModalProvider>
          <QuoteProvider>{children}</QuoteProvider>
        </ModalProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default Providers;
