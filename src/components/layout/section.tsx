"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

const Section = ({
  children,
  className,
  bgImg,
  bgVideo,
  style,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  bgImg?: string;
  bgVideo?: string;
  style?: React.CSSProperties;
  id?: string;
}) => {
  const [currentVideo, setCurrentVideo] = useState(bgVideo);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    if (bgVideo !== currentVideo) {
      setFadeOut(true);
      setTimeout(() => {
        setCurrentVideo(bgVideo);
        setFadeOut(false);
      }, 500); // Duration of the fade-out transition
    }
  }, [bgVideo, currentVideo]);

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
      {currentVideo && (
        <video
          autoPlay
          muted
          onEnded={() => setFadeOut(true)}
          src={currentVideo}
          onPlaying={() => console.log("playing")}
          className={`absolute top-0 left-0 w-full h-full object-cover -z-10 transition-opacity duration-1000 ${
            fadeOut ? "opacity-0" : "opacity-100"
          }`}
        />
      )}
      {children}
    </section>
  );
};

export default Section;
