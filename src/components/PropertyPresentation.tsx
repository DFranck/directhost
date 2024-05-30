"use client";
import { useModal } from "@/providers/modal/modal-provider";
import { CalendarCheck } from "lucide-react";
import { useLocale } from "next-intl";
import Link from "next/link";
import Section from "./layout/section";
import { Button } from "./ui/button";

const PropertyPresentation = () => {
  const { toggleModal, isModalOpen } = useModal();
  const locale = useLocale();
  return (
    <Section className="gap-4 px-4 py-10 md:py-20 text-justify">
      <h1>Lorem, ipsum.</h1>
      <h5 className="italic">Lorem ipsum dolor sit.</h5>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta placeat
        consequuntur maiores saepe minus possimus, magnam ab ad corporis ipsam
        aperiam velit cum magni, consectetur beatae et. Magnam, cumque
        voluptate.
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. At,
        laudantium?
      </p>
      <div className=" gap-2 ">
        <Button
          asChild
          variant={"outline"}
          className="gap-2 bg-primary text-primary-foreground w-full"
        >
          <Link href={`/${locale}/booking`}>
            <CalendarCheck />
            Reserver
          </Link>
        </Button>
      </div>
    </Section>
  );
};

export default PropertyPresentation;
