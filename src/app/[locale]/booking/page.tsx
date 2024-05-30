import hero from "@/../public/mocks/hero/hero.json";
import Hero from "@/components/Hero";
import SearchForm from "@/components/SearchForm";
import Section from "@/components/layout/section";
const Page = () => {
  return (
    <Section className="px-0 pb-0">
      <SearchForm />
      <Hero images={hero.imgs} />
    </Section>
  );
};

export default Page;
