"use client";
import useOnScroll from "@/hooks/useOnScroll"; // Assurez-vous d'avoir un hook de défilement
import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

// Définir les variantes de classe pour le composant d'en-tête
const headerVariants = cva(
  "transition-all p-6 border-b top-0 left-0 w-full z-10",
  {
    variants: {
      variant: {
        default: "block",
        fixed: "fixed",
      },
      // position: {
      //   fixed: "md:fixed",
      //   relative: "md:relative",
      // },
      scroll: {
        scrolled: "bg-opacity-100",
        top: "bg-opacity-50",
      },
      bg: {
        transparent: "bg-transparent",
        white: "bg-white",
        black: "bg-black",
        gradient: "bg-gradient-to-b from-background/100 to-background/50",
      },
    },
    defaultVariants: {
      variant: "default",
      // position: "fixed",
      scroll: "top",
      bg: "gradient",
    },
  }
);

// Interface des props pour le composant Header
export interface HeaderProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof headerVariants> {
  logo?: string;
  name?: string;
  asChild?: boolean;
}

// Définition du composant Header
const Header = React.forwardRef<HTMLDivElement, HeaderProps>(
  (
    {
      className,
      // position,
      children,
      scroll,
      variant,
      bg,
      logo,
      name = "Lorem ipsum",
      asChild = false,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "header";
    const scrollY = useOnScroll(); // Hook pour obtenir la position de défilement

    return (
      <Comp
        className={cn(
          headerVariants({
            // position,
            scroll: scrollY > 50 ? "scrolled" : "top",
            variant,
            className,
            bg,
          })
        )}
        ref={ref}
        {...props}
      >
        <div className="flex justify-between items-center max-w-screen-2xl mx-auto">
          {/* Logo et titre */}
          {/* <div className="flex items-center gap-5">
            {logo ? (
              <Image src={logo} alt="logo" className="w-10 h-10" />
            ) : (
              <span className="text-center h-16 w-16 rounded-full bg-primary flex justify-center items-center">
                Your Logo
              </span>
            )}
            {name && <h1>{name}</h1>}
          </div> */}
          {children}
        </div>
      </Comp>
    );
  }
);

Header.displayName = "Header";

export { Header, headerVariants };
