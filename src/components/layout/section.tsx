import { cn } from "@/lib/utils";
import React from "react";

const Section = ({
  children,
  className,
  bgImg,
  style,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  bgImg?: string;
  style?: React.CSSProperties;
  id?: string;
}) => {
  const backgroundStyle = {
    backgroundImage: bgImg ? `url(${bgImg})` : "none",
    backgroundRepeat: "no-repeat",
  };

  return (
    <section
      id={id}
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
