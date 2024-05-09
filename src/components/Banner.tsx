import Image from "next/image";
const Banner2 = ({ product }: { product: { name: string; img: string } }) => {
  const { name, img } = product;
  return (
    <div className="relative overflow-hidden bg-black">
      <Image
        src={"/treeder/product-banner.png"}
        alt="banner"
        width={2560}
        height={2560}
        className="opacity-60"
      />
      <h2 className="absolute top-[50%] left-0 translate-y-[-50%] ml-2 sm:ml-10 text-2xl lg:text-4xl xl:text-5xl 2xl:text-7xl font-bold text-white  z-10">
        {name}
      </h2>
      {product && (
        <Image
          src={img}
          alt={name}
          width={256}
          height={256}
          className="absolute top-0 right-0 w-1/3 mr-5"
        />
      )}
    </div>
  );
};

export default Banner2;
