"use client";
import Schedule from "@/components/Schedule"; // Assurez-vous que le chemin est correct
import SearchForm from "@/components/SearchForm"; // Assurez-vous que le chemin est correct
import Section from "@/components/layout/section";
import { useState } from "react";

const Page = () => {
  const [selectedDates, setSelectedDates] = useState<{
    start: Date;
    end: Date;
  } | null>(null);

  const handleDateSelect = (dates: { start: Date; end: Date }) => {
    setSelectedDates(dates);
  };

  return (
    <Section>
      <SearchForm />
      <Schedule onDateSelect={handleDateSelect} />
      {selectedDates && (
        <div>
          Dates sélectionnées : du {selectedDates.start.toDateString()} au{" "}
          {selectedDates.end.toDateString()}
        </div>
      )}
    </Section>
  );
};

export default Page;
