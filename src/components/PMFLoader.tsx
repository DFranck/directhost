import Image from "next/image";

const PMFLoader = () => {
  return (
    <div
      className="w-full relative flex justify-center items-center"
      style={{ height: "calc(full - 108px)" }}
    >
      <Image
        src={"/assets/svg/dynamic-logo.svg"}
        alt="logo-static"
        width={50}
        height={50}
        className="w-1/2 h-1/2 animate-loading"
      />
      <Image
        src={"/assets/svg/static-logo.svg"}
        alt="logo-static"
        width={50}
        height={50}
        className="w-1/2 h-1/2 absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]"
      />
    </div>
  );
};

export default PMFLoader;
