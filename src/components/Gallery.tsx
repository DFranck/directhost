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
      <div className="w-screen h-screen overflow-auto m-auto px-5">
        <div className="max-w-3xl mx-auto my-40 grid grid-cols-2  gap-2 md:gap-4 border rounded shadow p-2 md:p-4">
          {images?.map((image, index) => {
            const className = (() => {
              if (index % 6 === 0) return "col-span-2 row-span-2";
              if (index % 6 === 1 || index % 6 === 2) return "col-span-1";
              if (index % 6 === 3) return "col-span-1 row-span-2";
              return "col-span-1";
            })();
            return (
              <div
                key={index}
                className={`relative w-full h-full grid ${className}`}
              >
                <Image
                  src={image || ""}
                  objectFit="cover"
                  alt="gallery"
                  width={1000}
                  height={1000}
                  className="rounded w-full h-full"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
