"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { GlobeIcon } from "@radix-ui/react-icons";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { useTransition } from "react";

const LocaleSwitcher = () => {
  const t = useTranslations("Layout.Header.Switchers.Locale.Language");
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const pathname = usePathname();
  const localeActive = useLocale();
  const onValueChange = (nextLocale: string) => {
    const newPath = pathname.replace(localeActive, nextLocale);
    startTransition(() => {
      router.push(newPath);
    });
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="hover:bg-accent rounded w-10 h-10 border flex justify-center items-center">
        <GlobeIcon className="w-6 h-6" />
        <p className="sr-only">switch language</p>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onClick={() => onValueChange("en")}>
          {t("en")}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => onValueChange("fr")}>
          {t("fr")}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LocaleSwitcher;
