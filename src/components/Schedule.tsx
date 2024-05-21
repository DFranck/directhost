"use client";
// src/components/Schedule.tsx
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import { useState } from "react";
import Section from "./layout/section";

const Schedule = () => {
  const [events, setEvents] = useState([]);

  return (
    <Section className="schedule">
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
        initialView="dayGridMonth"
        events={events}
        contentHeight={"auto"}
      />
    </Section>
  );
};

export default Schedule;
