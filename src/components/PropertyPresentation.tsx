import { CalendarCheck, Images, MapPin } from "lucide-react";
import Section from "./layout/section";
import { Button } from "./ui/button";

const PropertyPresentation = () => {
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
      <Section className="flex md:flex-row gap-4 w-full mx-auto py-4">
        <Button variant={"outline"} className="gap-2 w-full md:w-fit">
          <Images />
          Gallery
        </Button>
        <Button variant={"outline"} className="gap-2 w-full md:w-fit">
          <CalendarCheck />
          Calendrier
        </Button>
        <Button variant={"outline"} className="gap-2 w-full md:w-fit">
          <MapPin />
          Localisation
        </Button>
      </Section>
    </Section>
  );
};

export default PropertyPresentation;
