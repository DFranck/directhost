import Cart from "@/components/Cart";
import HeroCarrousel from "@/components/HeroCarrousel";
import Footer from "@/components/layout/footer";
import Main from "@/components/layout/main";
import NoAuthHeader from "@/components/layout/noAuthHeader";
import { cn } from "@/lib/utils";
import Providers from "@/providers/providers";
import type { Metadata } from "next";
import { useMessages } from "next-intl";
import { Inter } from "next/font/google";
import "../globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = useMessages();

  return (
    <html lang={locale}>
      <body
        className={cn(inter.className, "flex flex-col min-h-screen mx-auto")}
      >
        <Providers messages={messages}>
          <NoAuthHeader name="Lorem ipsum" />
          {/* <Header variant={"fixed"}>
            <Logo src="/icon-placeholder.png" alt="logo" />
            <Nav links={["Home", "About", "Contact"]} />
          </Header> */}
          <HeroCarrousel />
          <Main className="flex-1 max-w-6xl mx-auto">
            {children}
            <Cart />
          </Main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
