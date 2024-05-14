import hero from "@/../public/mocks/hero/hero.json";
import Hero from "@/components/Hero";
export default function Index() {
  return (
    <div className="w-full flex flex-col justify-center">
      <Hero images={hero.imgs} />
    </div>
  );
}
