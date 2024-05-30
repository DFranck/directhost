import hero from "@/../public/mocks/hero/hero.json";
import EmbeddedMap from "@/components/EmbeddedMap";
import Hero from "@/components/Hero";
import PropertyDetails from "@/components/PropertyDetails";
import PropertyPresentation from "@/components/PropertyPresentation";
export default function Index() {
  return (
    <div className="w-full flex flex-col justify-center p-0 md:p-6 lg:p-10">
      <PropertyPresentation />
      <Hero images={hero.imgs} />
      <PropertyDetails />
      <div className="w-full border opacity-50 my-4 md:my-24"></div>
      <div className="md:px-10" id="localisation">
        <h2 className="w-full text-center mb-4 md:mb-10">Localissation</h2>
        <EmbeddedMap />
      </div>
      {/* <Host /> */}
    </div>
  );
}
