"use client";
// src/components/Schedule.tsx
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import { isPast } from "date-fns";
import { useEffect, useState } from "react";
import PMFLoader from "./PMFLoader";
import Section from "./layout/section";
const Schedule = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedDates, setSelectedDates] = useState<{
    start: Date;
    end: Date;
  } | null>(null);

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
        setLoading(false);
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

  const handleDateSelect = (selectInfo: any) => {
    const { start, end } = selectInfo;
    setSelectedDates({ start, end });
    console.log("Dates selected", selectInfo);
  };

  const isDateReserved = (date: Date) => {
    return events.some((event) => {
      date >= new Date(event.start) && date < new Date(event.end);
    });
  };
  const handleSelectAllow = (selectInfo: any) => {
    const { start, end } = selectInfo;
    let date = new Date(start);
    while (date < end) {
      if (isDateReserved(date)) {
        return false;
      }
      date.setDate(date.getDate() + 1);
    }
    return true;
  };
  return (
    <Section className="schedule px-4">
      {loading ? (
        <>
          <PMFLoader />
          <h2 className="mt-10 text-center">
            Récupération des calendrier en cours.
          </h2>
        </>
      ) : (
        <>
          <FullCalendar
            plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
            initialView="dayGridMonth"
            events={events}
            contentHeight={"auto"}
            selectable={true}
            select={handleDateSelect}
            selectAllow={handleSelectAllow}
            eventClassNames={getEventClassNames}
            dayCellClassNames={({ date }) => getDateClassNames(date)}
            eventTimeFormat={{
              hour: "2-digit",
              minute: "2-digit",
              meridiem: false,
            }}
            headerToolbar={{
              left: "prev,next",
              center: "",
              right: "title",
              // right: "dayGridMonth,timeGridWeek,timeGridDay",
            }}
            buttonText={{
              today: "Aujourd'hui",
              month: "Mois",
              week: "Semaine",
              day: "Jour",
            }}
          />
        </>
      )}
    </Section>
  );
};

export default Schedule;
