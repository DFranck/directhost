"use client";
import { useState } from "react";
import Section from "./layout/section";

const ReservationDetails = () => {
  const [selectedDates, setSelectedDates] = useState<{} | null>(null);

  return (
    <Section>
      <p>Dysplay date + infoo de contact?</p>
      {/* {selectedDate.map((date) => (
        <p key={date}>{date.toString()}</p>
      ))} */}
    </Section>
  );
};

export default ReservationDetails;
