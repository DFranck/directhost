// src/components/Schedule.tsx

import { format, getDay, isBefore, parse, startOfWeek } from "date-fns";
import { fr } from "date-fns/locale";
import { useEffect, useState } from "react";
import { Calendar, SlotInfo, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import PMFLoader from "./PMFLoader";
import Section from "./layout/section";

const locales = {
  fr: fr,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

export type CalendarEvent = {
  title: string;
  start: Date;
  end: Date;
  source: string;
};

const Schedule = ({
  setSelectedDates,
  selectedDates,
  setIsScheduleOpen,
  setIsDatesValidated,
  isScheduleOpen,
}: {
  isScheduleOpen: boolean;
  setIsDatesValidated: (validated: boolean) => void;
  setIsScheduleOpen: (open: boolean) => void;
  selectedDates: { start: Date; end: Date } | null;
  setSelectedDates: (dates: { start: Date; end: Date }) => void;
}) => {
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [date, setDate] = useState(new Date());
  const [startClickDate, setStartClickDate] = useState<Date | null>(null);

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const res = await fetch("/api/schedule", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }).then((res) => res.json());

        // Convert all dates to Date objects
        const convertedEvents = res.map((event: any) => ({
          ...event,
          start: new Date(event.start),
          end: new Date(event.end),
        }));

        setEvents(convertedEvents);
        setLoading(false);
        console.log(convertedEvents);
      } catch {
        console.log("error");
      }
    };
    fetchReservations();
  }, []);

  const handleSelectSlot = ({ start, end }: SlotInfo) => {
    if (isBefore(start, new Date()) || isDateReserved(start, end)) {
      return; // Prevent selecting past or reserved dates
    }
    setSelectedDates({ start, end });
    console.log("selectInfo", start, end);
  };

  const handleSelectEvent = (event: CalendarEvent) => {
    // Handle event selection if needed
  };

  const handleDayClick = (date: Date) => {
    if (startClickDate) {
      if (
        isBefore(date, startClickDate) ||
        isDateReserved(startClickDate, date)
      ) {
        return; // Prevent invalid date ranges
      }
      setSelectedDates({ start: startClickDate, end: date });
      setStartClickDate(null);
      console.log("End date selected", startClickDate, date);
    } else {
      setStartClickDate(date);
      console.log("Start date selected", date);
    }
  };

  const isDateReserved = (start: Date, end: Date) => {
    return events.some((event) => {
      return (
        (start >= event.start && start < event.end) ||
        (end > event.start && end <= event.end)
      );
    });
  };

  const dayPropGetter = (date: Date) => {
    if (isBefore(date, new Date()) || isDateReserved(date, date)) {
      return {
        className: "bg-gray-200 text-gray-400 cursor-not-allowed",
        style: {
          backgroundColor: "#f0f0f0",
          color: "#a0a0a0",
        },
      };
    }
    return {};
  };

  const onNavigate = (newDate: Date, view: string) => {
    setDate(newDate);
    console.log("Navigated to date:", newDate);
  };

  return (
    <Section
      className={`schedule px-2 md:px-0 md:py-4 ${
        isScheduleOpen ? "" : "hidden"
      }`}
    >
      <>
        <div className="bg-background/95 rounded p-5 border shadow w-full">
          {loading ? (
            <PMFLoader />
          ) : (
            <Calendar
              localizer={localizer}
              events={events}
              startAccessor="start"
              endAccessor="end"
              style={{ height: 350 }}
              selectable
              onSelectSlot={handleSelectSlot}
              onSelectEvent={handleSelectEvent}
              dayPropGetter={dayPropGetter}
              onDrillDown={handleDayClick} // Handle day click for two-click selection
              views={["month"]}
              toolbar={true}
              step={60}
              showMultiDayTimes
              date={date}
              onNavigate={onNavigate}
            />
          )}
        </div>
      </>
    </Section>
  );
};

export default Schedule;
