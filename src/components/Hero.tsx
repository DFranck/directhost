import { Share } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Section from "./layout/section";

type ImageSrc = string | null;
type HeroImagesSrc = ImageSrc[];
const Hero = ({ images }: { images?: HeroImagesSrc }) => {
  if (!images) return null;
  const mainImg: ImageSrc = images?.[0];
  const followingImg: HeroImagesSrc = images?.slice(1);
  return (
    <Section className="flex items-start flex-col-reverse md:flex-col p-0 md:p-6 lg:p-10">
      <div className="w-full flex justify-between">
        <h2>Réveillez-vous au millieux des champs</h2>
        <Link
          href={""}
          className="flex items-center gap-2 underline text-sm font-semibold"
        >
          <Share width={16} height={16} />
          Partager
        </Link>
      </div>
      <div className="grid md:grid-cols-2 md:py-6 gap-2">
        {mainImg && (
          <Image src={mainImg} alt="Banner" width={2560} height={2560} />
        )}
        <div className="hidden md:grid grid-cols-2 gap-2">
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
                />
              );
            })}
        </div>
      </div>
    </Section>
  );
};

export default Hero;
