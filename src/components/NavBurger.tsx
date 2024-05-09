// components/NavBurger.tsx
// Utilisation de React et Tailwind CSS pour créer un composant NavBurger fonctionnel

import LocaleSwitcher from "@/providers/language/locale-switcher";
import { ThemeSwitcher } from "@/providers/theme/theme-switcher";
import { Dialog } from "@headlessui/react";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { useState } from "react";

const NavBurger = () => {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations("Layout.Header");
  const locale = useLocale();
  const dropDownItemClass = "transition-colors w-full";
  const liStyle = "hover:bg-accent w-full block p-5";
  return (
    <>
      <button className="md:hidden rounded p-2" onClick={() => setIsOpen(true)}>
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
            d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5"
          />
        </svg>
      </button>

      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/50" aria-hidden="true" />

        <div className="fixed top-0 right-0 p-8 w-screen max-w-xs">
          <Dialog.Panel className=" max-w-xs rounded bg-background shadow-lg">
            <div>
              <Dialog.Title className={"sr-only"}>Menu</Dialog.Title>
              <button
                className="rounded w-full p-5 flex justify-end"
                onClick={() => setIsOpen(false)}
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
                    d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </button>
            </div>

            <nav>
              <ul className="flex flex-col">
                <li>
                  <Link className={liStyle} href={`/${locale}/products`}>
                    {t("Nav.all")}
                  </Link>
                </li>
                <li>
                  <Link className={liStyle} href={`/${locale}/products/spades`}>
                    {t("Nav.spades")}
                  </Link>
                </li>
                <li>
                  <Link
                    className={liStyle}
                    href={`/${locale}/products/accessories`}
                  >
                    {t("Nav.accessories")}
                  </Link>
                </li>

                {/* <li>
                  <Link className={liStyle} href={`/${locale}/terms`}>
                    {t("terms")}
                  </Link>
                </li> */}
                {/* <li className={liStyle}>
              <Link href={`/${locale}/contact`}>{t("contact")}</Link>
            </li> */}
              </ul>
            </nav>

            <div className="flex justify-end items-center gap-2 p-5">
              <LocaleSwitcher />
              <ThemeSwitcher />
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
};

export default NavBurger;
