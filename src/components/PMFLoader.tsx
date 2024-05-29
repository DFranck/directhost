import Image from "next/image";
import Section from "./layout/section";

const PMFLoader = () => {
  return (
    <Section className="relative flex justify-center items-center">
      <div>
        <Image
          src={"/assets/svg/dynamic-logo.svg"}
          alt="logo-static"
          width={50}
          height={50}
          className="w-40 h-40 animate-loading"
        />
        <Image
          src={"/assets/svg/static-logo.svg"}
          alt="logo-static"
          width={50}
          height={50}
          className="w-24 h-24 absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]"
        />
      </div>
      {/* <h2 className="absolute bottom-10 left-1/2 translate-x-[-50%] text-center w-full">
        Récupération des calendrier en cours.
      </h2> */}
    </Section>
  );
};

export default PMFLoader;
