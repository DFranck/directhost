"use client";
import { cn } from "@/lib/utils";
import { useState } from "react";
import Schedule from "./Schedule";
import { Button } from "./ui/button";
0;
const SearchForm = () => {
  const [travelers, setTravelers] = useState("");
  const [isScheduleOpen, setIsScheduleOpen] = useState(false);
  const [isDatesValidated, setIsDatesValidated] = useState(false);
  const [summary, setSummary] = useState("");
  const [selectedDates, setSelectedDates] = useState<{
    start: Date;
    end: Date;
  } | null>(null);
  const handleSearch = () => {
    if (!isDatesValidated || !selectedDates || !travelers) return;
    const pricePerNight = 30;
    const nbNights = Math.ceil(
      (selectedDates.end.getTime() - selectedDates.start.getTime()) /
        (1000 * 60 * 60 * 24)
    );
    const totalPrice = pricePerNight * nbNights * parseInt(travelers);
    console.log("totalPrice", totalPrice);

    setSummary(
      `
      Période : du ${formatDate(selectedDates.start)} au ${formatDate(
        selectedDates.end
      )}<br/>
      Nombre de voyageurs : ${travelers} <br/>
      Prix total pour ${nbNights} nuit(s) : ${totalPrice}€
      `
    );
  };
  const handleSchedule = () => {
    setIsScheduleOpen(!isScheduleOpen);
  };
  const formatDate = (date: Date) => {
    return date.toLocaleDateString("fr-FR", {
      weekday: "long",
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  };
  return (
    <div className="mt-20 flex flex-col justify-center items-center w-full md:p-5">
      <h2 className="mb-5">A quelle date souhaitez vous sejourner?</h2>
      <div className="md:border md:rounded md:shadow p-2 flex flex-col md:flex-row items-center gap-4 w-full relative">
        <div className="flex-grow w-full">
          <label htmlFor="période" className="sr-only">
            période
          </label>
          <div
            id="travelers"
            className={cn(
              !isDatesValidated
                ? "text-muted-foreground/60 "
                : "text-foreground ",
              "block w-full border-none focus:ring-0 bg-accent p-2 rounded cursor-pointer"
            )}
            onClick={handleSchedule}
          >
            <p>
              {!selectedDates
                ? "Choisissez votre période"
                : `${formatDate(selectedDates.start)} - ${formatDate(
                    selectedDates.end
                  )}`}
            </p>
          </div>
        </div>
        <div className="flex-grow w-full">
          <label
            htmlFor="travelers"
            className="block text-sm font-medium sr-only"
          >
            Voyageurs
          </label>
          <input
            id="travelers"
            type="text"
            className="block w-full border-none focus:ring-0 bg-accent p-2 rounded "
            placeholder="Ajouter des voyageurs"
            value={travelers}
            onChange={(e) => setTravelers(e.target.value)}
          />
        </div>
        <button
          className="flex-shrink-0 p-2 bg-primary text-primary-foreground rounded"
          onClick={handleSearch}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6a6 6 0 100 12 6 6 0 000-12zM21 21l-5.2-5.2"
            />
          </svg>
        </button>
        <div
          className={`${
            isScheduleOpen ? "opacity-100" : "opacity-0"
          } absolute top-0 left-0 z-10 md:w-1/2 mt-12`}
        >
          <Schedule
            setSelectedDates={setSelectedDates}
            selectedDates={selectedDates}
            setIsScheduleOpen={setIsScheduleOpen}
            setIsDatesValidated={setIsDatesValidated}
            isScheduleOpen={isScheduleOpen}
          />
        </div>
      </div>
      {isDatesValidated && selectedDates && (
        <div className="bg-card border shadow rounded w-full p-5 mt-5 flex flex-col ">
          <div dangerouslySetInnerHTML={{ __html: summary }} />
          <Button className="w-fit self-end">Valider</Button>
        </div>
      )}
    </div>
  );
};

export default SearchForm;
