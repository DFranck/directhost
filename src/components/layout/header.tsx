"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import LocaleSwitcher from "@/providers/language/locale-switcher";
import { ThemeSwitcher } from "@/providers/theme/theme-switcher";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import NavBurger from "../NavBurger";
import QuoteSvg from "../svg/QuoteSvg";
import { Button } from "../ui/button";
const Header = ({ logo, name }: { logo?: string; name?: string }) => {
  const t = useTranslations("Layout.Header");
  const locale = useLocale();
  const liStyle = "hover:bg-accent px-2 py-1.5 rounded";
  const dropDownItemClass = "transition-colors w-full";
  const triggerInDropdown =
    "hover:bg-accent  rounded px-2 py-1.5 w-full text-start";
  return (
    <header className=" p-6 ">
      <div className="flex justify-between items-center max-w-screen-2xl mx-auto">
        <Link className="rounded-full hover:opacity-80" href="/">
          <h1>Résidence les Coclicot</h1>
          {/* <LogoSvg className="w-16 h-16" fill="foreground" /> */}
          <span className="sr-only">Logo</span>
          {logo ? (
            <Image src={logo} alt="logo" width={256} height={256} />
          ) : (
            <h1>{name}</h1>
          )}
        </Link>

        <div className=" md:flex">
          <nav className="justify-center items-center gap-5 hidden md:flex">
            <ul className="flex justify-center items-center gap-5">
              <li>
                <DropdownMenu>
                  <DropdownMenuTrigger className="hover:bg-accent rounded px-2 py-1.5">
                    <p>
                      {t("Nav.products")} <span>▾</span>
                    </p>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="flex flex-col text-sm items-start">
                    <DropdownMenuItem className={cn(dropDownItemClass)}>
                      <Link className="w-full" href={`/${locale}/products`}>
                        {t("Nav.all")}
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem className={dropDownItemClass}>
                      <Link
                        className="w-full pl-2"
                        href={`/${locale}/products/spades`}
                      >
                        - {t("Nav.spades")}
                      </Link>
                    </DropdownMenuItem>
                    {/* <DropdownMenuItem className={dropDownItemClass}>
                      <Link
                        className="w-full pl-2"
                        href={`/${locale}/products/accessories`}
                      >
                        - {t("Nav.accessories")}
                      </Link>
                    </DropdownMenuItem> */}
                  </DropdownMenuContent>
                </DropdownMenu>
              </li>
            </ul>
          </nav>
          <Button asChild className="mx-2">
            <Link href={`/${locale}/checkout/cart`}>
              <span className="hidden md:flex">{t("Buttons.quote")}</span>
              <QuoteSvg
                className="w-5 h-5 ml-1 md:hidden xl:block"
                fill="primary-foreground"
              />
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
export default Header;
