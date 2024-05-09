import { cn } from "@/lib/utils";
import Image from "next/image";
import { Button } from "./ui/button";

const Modal = ({
  isHidden,
  close,
  img,
  mainImg,
  handleThumbnailClick,
}: {
  isHidden: boolean;
  close: () => void;
  img: string[];
  mainImg: string;
  handleThumbnailClick: (image: string) => void;
}) => {
  return (
    <div
      className={`p-5 pr-10 bg-accent/95 fixed w-screen h-screen top-0 left-0 z-10 flex justify-center items-center ${
        isHidden ? "hidden" : ""
      }`}
    >
      <Button
        variant={"outline"}
        className=" absolute top-5 right-10"
        onClick={close}
      >
        x
      </Button>
      <div className="max-w-[600px] ">
        <div className="mb-5 bg-card border shadow rounded">
          <Image
            src={mainImg}
            alt="Main image"
            width={300}
            height={300}
            objectFit="cover"
            className="max-h-[80%] w-full rounded"
          />
        </div>
        <div className="flex overflow-y-auto scrollbar-thumb-primary scrollbar-track-accent scrollbar-thin scrollbar-thumb-rounded-full ">
          {img.map((img, index) => (
            <Image
              src={img}
              alt={`Thumbnail ${index}`}
              width={100}
              height={100}
              key={index}
              objectFit="cover"
              className={cn("w-20 h-20 cursor-pointer")}
              onClick={() => handleThumbnailClick(img)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Modal;
