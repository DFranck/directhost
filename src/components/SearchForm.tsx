"use client";
import { useState } from "react";
import Schedule from "./Schedule";
0;
const SearchForm = () => {
  const [travelers, setTravelers] = useState("");
  const [isScheduleOpen, setIsScheduleOpen] = useState(false);
  const [selectedDates, setSelectedDates] = useState<{
    start: Date;
    end: Date;
  } | null>(null);
  const handleSearch = () => {
    // Logique de recherche ici
  };
  const handleSchedule = () => {
    setIsScheduleOpen(!isScheduleOpen);
  };
  const formatDate = (date: Date) => {
    return date.toLocaleDateString("fr-FR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };
  return (
    <div className="mt-20 flex flex-col justify-center items-center w-full p-8">
      <h2 className="mb-5">A quelle date souhaitez vous sejourner?</h2>
      <div className="border rounded shadow p-2 flex items-center gap-4 w-full relative">
        <div className="flex-grow">
          <label
            htmlFor="période"
            className="block text-sm font-medium text-gray-700 sr-only"
          >
            période
          </label>
          <div
            id="travelers"
            className="block w-full border-none focus:ring-0 bg-accent p-2 rounded "
            onClick={handleSchedule}
          >
            <p className="text-muted-foreground/60 cursor-pointer">
              {!selectedDates
                ? "Choisissez votre période"
                : `${formatDate(selectedDates.start)} - ${formatDate(
                    selectedDates.end
                  )}`}
            </p>
          </div>
        </div>
        <div className="flex-grow">
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
          } absolute top-0 left-0 z-10 w-1/2 mt-12`}
        >
          <Schedule
            setSelectedDates={setSelectedDates}
            selectedDates={selectedDates}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
