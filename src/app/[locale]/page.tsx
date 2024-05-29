import EmbeddedMap from "@/components/EmbeddedMap";
import PropertyDetails from "@/components/PropertyDetails";
import PropertyPresentation from "@/components/PropertyPresentation";
export default function Index() {
  return (
    <div className="w-full flex flex-col justify-center p-0 md:p-6 lg:p-10">
      <PropertyPresentation />
      {/* <Hero images={hero.imgs} /> */}
      <PropertyDetails />
      {/* <div className="w-full border opacity-50 mt-4 md:mt-24"></div> */}
      {/* <div id="schedule">
        <Schedule />
      </div> */}
      <div className="w-full border opacity-50 my-4 md:my-24"></div>
      <div className="md:px-10" id="localisation">
        <h2 className="w-full text-center mb-4 md:mb-10">Localisation</h2>
        <EmbeddedMap />
      </div>
      {/* <Host /> */}
    </div>
  );
}
