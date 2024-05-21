import hero from "@/../public/mocks/hero/hero.json";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Location from "@/components/Location";
import PropertyDetails from "@/components/PropertyDetails";
import PropertyPresentation from "@/components/PropertyPresentation";
import Schedule from "@/components/Schedule";
export default function Index() {
  return (
    <div className="w-full flex flex-col justify-center p-0 md:p-6 lg:p-10">
      <PropertyPresentation />
      <Hero images={hero.imgs} />
      <PropertyDetails />
      <Schedule />
      <Location />
      {/* <Host /> */}
      <Gallery images={hero.imgs} />
    </div>
  );
}
