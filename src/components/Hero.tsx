"use client";
import { useModal } from "@/providers/modal/modal-provider";
import Image from "next/image";
import Section from "./layout/section";
import { Button } from "./ui/button";

export type ImageSrc = string | null;
export type HeroImagesSrc = ImageSrc[];
const Hero = ({ images }: { images?: HeroImagesSrc }) => {
  const { toggleModal, isModalOpen } = useModal();
  if (!images) return null;
  const mainImg: ImageSrc = images?.[0];
  const followingImg: HeroImagesSrc = images?.slice(1, 5);
  return (
    <Section className="hidden md:flex items-start flex-col-reverse md:flex-col p-0">
      <Button
        variant={"outline"}
        className="hidden md:flex absolute bottom-10 right-6  gap-4 rounded-xl border border-foreground z-10"
        onClick={() => toggleModal()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          aria-hidden="true"
          role="presentation"
          focusable="false"
          className="w-4 h-4"
          fill="black"
        >
          <path d="M3 11.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm-10-5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm-10-5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z"></path>
        </svg>
        Afficher toute les photos
      </Button>

      <div className="w-full flex justify-between">
        {/* <h2 className="p-4 md:p-0">Réveillez-vous au millieux des champs</h2>
        <Link
          href={""}
          className=" items-center gap-2 underline text-sm font-semibold hidden md:flex"
        >
          <Share width={16} height={16} />
          Partager
        </Link> */}
      </div>
      <div className="grid md:grid-cols-2 md:my-6 gap-2 md:rounded-xl overflow-hidden relative">
        {mainImg && (
          <Image
            src={mainImg}
            alt="Banner"
            width={2560}
            height={2560}
            className="object-cover md:aspect-square hover:brightness-90 cursor-pointer"
            onClick={toggleModal}
          />
        )}
        <div className="md:hidden absolute bottom-5 right-5  bg-foreground/50 px-2 rounded text-xs text-secondary">
          1/{images.length}
        </div>
        <div className="hidden md:grid grid-cols-2 gap-2 grid-rows-2">
          {followingImg &&
            followingImg?.map((image) => {
              if (!image) return null;
              return (
                <Image
                  src={image}
                  key={image}
                  alt="banner"
                  width={2560}
                  height={2560}
                  className="object-cover aspect-square hover:brightness-90 cursor-pointer"
                  onClick={toggleModal}
                />
              );
            })}
        </div>
      </div>
    </Section>
  );
};

export default Hero;
