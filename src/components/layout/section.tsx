import { cn } from "@/lib/utils";
import React from "react";

const Section = ({
  children,
  className,
  bgImg,
  style,
}: {
  children: React.ReactNode;
  className?: string;
  bgImg?: string;
  style?: React.CSSProperties;
}) => {
  const backgroundStyle = {
    backgroundImage: bgImg ? `url(${bgImg})` : "none",
    backgroundRepeat: "no-repeat",
  };

  return (
    <section
      className={cn(
        "flex items-center justify-center px-5 flex-col w-full relative py-4 md:py-20 bg-cover bg-center",
        className
      )}
      style={style ? { ...backgroundStyle, ...style } : backgroundStyle}
    >
      {children}
    </section>
  );
};

export default Section;
