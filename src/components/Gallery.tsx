"use client";
import { cn } from "@/lib/utils";
import { useModal } from "@/providers/modal/modal-provider";
import { Cross } from "lucide-react";
import Image from "next/image";
import { HeroImagesSrc } from "./Hero";
import { Button } from "./ui/button";

const Gallery = ({ images }: { images?: HeroImagesSrc }) => {
  const { isModalOpen, closeModal, toggleModal } = useModal();
  console.log("images", images);

  return (
    <div
      className={cn(
        {
          hidden: !isModalOpen,
        },
        "fixed inset-0 w-full h-screen bg-background z-20"
      )}
    >
      <Button
        variant={"outline"}
        className={cn(" fixed top-5 left-5 z-20", {
          hidden: !isModalOpen,
        })}
        onClick={toggleModal}
      >
        <Cross className="rotate-45" />
      </Button>
      <div className="w-screen h-screen overflow-auto m-auto ">
        <div className="w-1/2 mx-auto my-40 flex flex-col  gap-5 border rounded shadow p-5">
          {images?.map((image, index) => (
            <Image
              key={index}
              src={image || ""}
              width={1000}
              height={1000}
              alt="gallery"
              className="w-full h-full object-cover"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
