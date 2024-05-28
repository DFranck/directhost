import { Slot } from "@radix-ui/react-slot";
import { VariantProps, cva } from "class-variance-authority";
import { useLocale } from "next-intl";
import Link from "next/link";
import * as React from "react";
const navVariants = cva("", {
  variants: {
    variant: {
      default: "flex gap-5 items-center justify-center",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export interface NavProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof navVariants> {
  links: string[];
  asChild?: boolean;
}
const Nav = React.forwardRef<HTMLDivElement, NavProps>(
  ({ className, links, asChild = false, ...props }, ref) => {
    const locale = useLocale();
    const Comp = asChild ? Slot : "nav";
    return (
      <Comp ref={ref} {...props}>
        <ul className={navVariants({ className })}>
          {links.map((link) => (
            <li key={link}>
              <Link href={`/${locale}/${link}`}>{link}</Link>
            </li>
          ))}
        </ul>
      </Comp>
    );
  }
);

Nav.displayName = "Nav";

export { Nav, navVariants };
