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
import { Button } from "./ui/button";

export type CalendarEvent = {
  title: string;
  start: Date;
  end: Date;
  extendedProps: {
    source: string;
  };
};

const Schedule = ({
  setSelectedDates,
  selectedDates,
}: {
  selectedDates: { start: Date; end: Date } | null;
  setSelectedDates: (dates: { start: Date; end: Date }) => void;
}) => {
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const [loading, setLoading] = useState(true);

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
        console.log(res);
      } catch {
        console.log("error");
      }
    };
    fetchReservation();
  }, []);
  const getEventClassNames = (eventInfo: any) => {
    return ["event-other"];
    // switch (eventInfo.event.extendedProps.source) {
    //   case "airbnb":
    //     return ["event-airbnb"];
    //   case "booking":
    //     return ["event-booking"];
    //   default:
    //     return ["event-other"];
    // }
  };
  const getDateClassNames = (date: Date) => {
    return isPast(date) ? "past-date" : "";
  };

  const handleDateSelect = (selectInfo: any) => {
    const { start, end } = selectInfo;
    setSelectedDates({ start, end });
    const formatDate = (date: Date) => {
      return date.toLocaleDateString("fr-FR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      });
    };
    console.log("selectInfo", start, end);
  };

  const isDateReserved = (date: Date) => {
    const reserved = events.some((event) => {
      return date >= new Date(event.start) && date < new Date(event.end);
    });
    // console.log(`Date ${date.toISOString()} is reserved: ${reserved}`);
    return reserved;
  };
  const handleSelectAllow = (selectInfo: any) => {
    const { start, end } = selectInfo;
    let date = new Date(start);

    while (date < end) {
      if (isDateReserved(date) || isPast(date)) {
        // console.log(
        //   `Date range from ${start} to ${end} includes a reserved or past date.`
        // );
        return false;
      }
      date.setDate(date.getDate() + 1);
    }
    return true;
  };
  return (
    <>
      {loading ? (
        <PMFLoader />
      ) : (
        <Section className="schedule px-4 md:py-4 ">
          <>
            <div className="bg-background/95 rounded p-5 border shadow">
              {/* <h2 className="w-full text-center">Calendrier Synchronisé</h2> */}
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
            </div>
            {Object.keys(selectedDates || {}).length > 0 && (
              <div className="w-full flex justify-center my-5">
                <Button className="p-5">
                  Faire une demande de réservation pour ses dates
                </Button>
              </div>
            )}
          </>
        </Section>
      )}
    </>
  );
};

export default Schedule;
