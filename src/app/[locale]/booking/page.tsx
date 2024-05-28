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
    <Section>
      <SearchForm />
      {/* <Schedule onDateSelect={handleDateSelect} /> */}
      {selectedDates && (
        <div>
          Dates sélectionnées : du {selectedDates.start.toDateString()} au{" "}
          {selectedDates.end.toDateString()}
        </div>
      )}
      <Hero images={hero.imgs} className="md:pt-0" />
    </Section>
  );
};

export default Page;
