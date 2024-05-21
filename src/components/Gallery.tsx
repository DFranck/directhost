"use client";
import { cn } from "@/lib/utils";
import { useModal } from "@/providers/modal/modal-provider";
import { Cross } from "lucide-react";
import { HeroImagesSrc } from "./Hero";
import { Button } from "./ui/button";

const Gallery = ({ images }: { images?: HeroImagesSrc }) => {
  const { isModalOpen, closeModal, toggleModal } = useModal();
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
    </div>
  );
};

export default Gallery;
