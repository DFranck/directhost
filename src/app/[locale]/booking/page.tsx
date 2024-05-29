"use client";
import hero from "@/../public/mocks/hero/hero.json";
import Hero from "@/components/Hero";
import SearchForm from "@/components/SearchForm"; // Assurez-vous que le chemin est correct
import Section from "@/components/layout/section";
import { useState } from "react";
const Page = () => {
  const [selectedDates, setSelectedDates] = useState<{
    start: Date;
    end: Date;
  } | null>(null);

  // const handleDateSelect = (dates: { start: Date; end: Date }) => {
  //   setSelectedDates(dates);
  // };

  return (
    <Section className="px-0 pb-0">
      <SearchForm />
      {/* <Schedule onDateSelect={handleDateSelect} /> */}

      <Hero images={hero.imgs} className="md:pt-0" />
    </Section>
  );
};

export default Page;
