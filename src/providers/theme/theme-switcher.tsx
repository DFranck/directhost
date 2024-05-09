"use client";

import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTranslations } from "next-intl";

export function ThemeSwitcher() {
  const { setTheme } = useTheme();
  const t = useTranslations("Layout.Header.Switchers.Theme");
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="hover:bg-accent rounded w-10 h-10 border relative flex justify-center items-center">
        {/* <Button variant="outline" size="icon"> */}
        <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" />
        <p className="sr-only">Toggle theme</p>
        {/* </Button> */}
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          {t("light")}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          {t("dark")}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          {t("system")}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
