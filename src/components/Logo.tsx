import Image from "next/image";
import * as React from "react";

interface LogoProps {
  src: string;
  alt: string;
}

const Logo: React.FC<LogoProps> = ({ src, alt }) => {
  return <Image src={src} alt={alt} width={40} height={40} />;
};

export { Logo };
