"use client";
import { useModal } from "@/providers/modal/modal-provider";
import { CalendarCheck, Images, MapPin } from "lucide-react";
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
      <Section className="flex md:grid grid-cols-3 gap-2 w-full mx-auto px-0 py-4">
        <Button
          variant={"outline"}
          className="gap-2 w-full"
          onClick={() => toggleModal()}
        >
          <Images />
          Gallery
        </Button>
        <div className="grid grid-cols-2 md:col-span-2 gap-2 w-full">
          <Button asChild variant={"outline"} className="gap-2 w-full">
            <Link href={`/${locale}/booking`}>
              <CalendarCheck />
              Reserver
            </Link>
          </Button>
          <Button asChild variant={"outline"} className="gap-2 w-full">
            <Link href={`/${locale}/#localisation`}>
              <MapPin />
              Localisation
            </Link>
          </Button>
        </div>
      </Section>
    </Section>
  );
};

export default PropertyPresentation;
