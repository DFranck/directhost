"use client";

import LocaleSwitcher from "@/providers/language/locale-switcher";
import { ThemeSwitcher } from "@/providers/theme/theme-switcher";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import NavBurger from "../NavBurger";
import { Button } from "../ui/button";
const NoAuthHeader = ({ logo, name }: { logo?: string; name?: string }) => {
  const t = useTranslations("Layout.Header");
  const locale = useLocale();
  const liStyle = "hover:bg-accent px-2 py-1.5 rounded";
  const dropDownItemClass = "transition-colors w-full";
  const triggerInDropdown =
    "hover:bg-accent  rounded px-2 py-1.5 w-full text-start";
  return (
    <header className=" p-6 border-b">
      <div className="flex justify-between items-center max-w-screen-2xl mx-auto">
        <Link className="rounded-full hover:opacity-80" href="/">
          <span className="sr-only">Logo</span>
          {logo ? (
            <Image src={logo} alt="logo" width={256} height={256} />
          ) : (
            <h1>{name}</h1>
          )}
        </Link>

        <div className=" md:flex">
          <Button asChild className="mx-2">
            <Link href={`/${locale}/checkout/cart`}>
              <span className="hidden md:flex">Reserver</span>
            </Link>
          </Button>
          <div className="hidden md:flex justify-center gap-2">
            <LocaleSwitcher />
            <ThemeSwitcher />
          </div>
          <NavBurger />
        </div>
      </div>
    </header>
  );
};
export default NoAuthHeader;
