"use client";

import LocaleSwitcher from "@/providers/language/locale-switcher";
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
    <header className=" p-6 border-b md:absolute top-0 left-0 w-full z-10 bg-gradient-to-b from-background/100 to-background/50">
      <div className="flex justify-between items-center max-w-screen-2xl mx-auto">
        <Link
          className="rounded-full hover:opacity-80 flex gap-5 items-center"
          href="/"
        >
          <svg
            width="60"
            height="60"
            viewBox="0 0 676 687"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 298.241C32.4494 141.176 170.201 18 338 18C505.799 18 643.551 141.176 658 298.241"
              stroke="#FF385C"
              strokeWidth="35"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M658 388.465C643.551 545.53 505.799 668.706 338 668.706C170.201 668.706 32.4494 545.53 18 388.465"
              stroke="#7C3AED"
              strokeWidth="35"
              strokeLinecap="round"
            />
            <circle
              cx="338"
              cy="343.011"
              r="262"
              fill="url(#paint0_linear_39_32)"
            />
            <circle
              cx="338"
              cy="343.011"
              r="262"
              fill="url(#paint1_linear_39_32)"
            />
            <path
              d="M339 250.011C391.002 250.011 430 292.763 430 340.011C430 390.603 373.159 476.148 335.5 520.217C296.798 453.452 245.5 396.103 245.5 340.011C245.5 296.004 282 250.011 339 250.011Z"
              fill="white"
            />
            <path
              d="M453.76 225.62C501.917 261.744 537 299.161 537 341.919C537 419.909 492.206 487.443 426.931 520.217M453.76 225.62C419.052 199.584 377.552 174.22 337.5 148.011C237.062 216.773 138 280.033 138 341.919C138 441.045 210.362 523.279 305.167 538.721C318.926 540.963 321.795 536.255 335.5 520.217M453.76 225.62V162.451M335.5 520.217C373.159 476.148 430 390.603 430 340.011C430 292.763 391.002 250.011 339 250.011C282 250.011 245.5 296.004 245.5 340.011C245.5 396.103 296.798 453.452 335.5 520.217Z"
              stroke="white"
              strokeWidth="35"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M413 343.011C413 384.432 338 490.011 338 490.011C338 490.011 263 384.432 263 343.011C263 301.59 296.579 268.011 338 268.011C379.421 268.011 413 301.59 413 343.011Z"
              fill="url(#paint2_linear_39_32)"
            />
            <circle cx="338" cy="342.011" r="27" fill="white" />
            <defs>
              <linearGradient
                id="paint0_linear_39_32"
                x1="338"
                y1="81.011"
                x2="338"
                y2="605.011"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FF385C" />
                <stop offset="1" stopColor="#7C3AED" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_39_32"
                x1="338"
                y1="81.011"
                x2="338"
                y2="605.011"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FF385C" />
                <stop offset="1" stopColor="#7C3AED" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_39_32"
                x1="338"
                y1="268.011"
                x2="338"
                y2="490.011"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FF385C" />
                <stop offset="1" stopColor="#7C3AED" />
              </linearGradient>
            </defs>
          </svg>

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
            {/* <ThemeSwitcher /> */}
          </div>
          <NavBurger />
        </div>
      </div>
    </header>
  );
};
export default NoAuthHeader;
