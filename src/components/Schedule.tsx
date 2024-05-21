"use client";
// src/components/Schedule.tsx
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import { isPast } from "date-fns";
import { useEffect, useState } from "react";
import Section from "./layout/section";
const Schedule = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchReservation = async () => {
      try {
        const res = await fetch("/api/schedule", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }).then((res) => res.json());
        setEvents(res);
      } catch {
        console.log("error");
      }
    };
    fetchReservation();
  }, []);
  const getEventClassNames = (eventInfo: any) => {
    switch (eventInfo.event.extendedProps.source) {
      case "airbnb":
        return ["event-airbnb"];
      case "booking":
        return ["event-booking"];
      default:
        return ["event-other"];
    }
  };
  const getDateClassNames = (date: Date) => {
    return isPast(date) ? "past-date" : "";
  };
  return (
    <Section className="schedule">
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
        initialView="dayGridMonth"
        events={events}
        contentHeight={"auto"}
        eventClassNames={getEventClassNames}
        dayCellClassNames={({ date }) => getDateClassNames(date)}
        eventTimeFormat={{
          hour: "2-digit",
          minute: "2-digit",
          meridiem: false,
        }}
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        buttonText={{
          today: "Aujourd'hui",
          month: "Mois",
          week: "Semaine",
          day: "Jour",
        }}
      />
    </Section>
  );
};

export default Schedule;
