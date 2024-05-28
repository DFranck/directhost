import { cn } from "@/lib/utils";
import React from "react";

const Section = ({
  children,
  className,
  bgImg,
  bgVideo,
  onVideoEnded,
  style,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  bgImg?: string;
  bgVideo?: string;
  onVideoEnded?: () => void;
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
      {bgVideo && (
        <video
          autoPlay
          muted
          onEnded={onVideoEnded}
          src={bgVideo}
          onPlaying={() => console.log("playing")}
          className="absolute top-0 left-0 w-full h-full object-cover -z-10 transition-all"
        />
      )}
      {children}
    </section>
  );
};

export default Section;
