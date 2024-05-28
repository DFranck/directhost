"use client";
import { useState } from "react";
0;
const SearchForm = () => {
  const [arrivalDate, setArrivalDate] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [travelers, setTravelers] = useState("");

  const handleSearch = () => {
    // Logique de recherche ici
  };

  return (
    <div className="mt-20 flex flex-col justify-center items-center w-full p-8">
      <h2 className="mb-5">A quelle date souhaitez vous sejourner?</h2>
      <div className="border rounded shadow p-2 flex items-center gap-4 w-full">
        <div className="flex-grow">
          <label
            htmlFor="arrivalDate"
            className="block text-sm font-medium sr-only"
          >
            Arrivée
          </label>
          <input
            id="arrivalDate"
            type="date"
            className="block w-full border-none focus:ring-0 bg-accent p-2 rounded"
            placeholder="Quand ?"
            value={arrivalDate}
            onChange={(e) => setArrivalDate(e.target.value)}
          />
        </div>
        <div className="flex-grow">
          <label
            htmlFor="departureDate"
            className="block text-sm font-medium text-gray-700 sr-only"
          >
            Départ
          </label>
          <input
            id="departureDate"
            type="date"
            className="block w-full border-none focus:ring-0 bg-accent p-2 rounded "
            placeholder="Quand ?"
            value={departureDate}
            onChange={(e) => setDepartureDate(e.target.value)}
          />
        </div>
        <div className="flex-grow">
          <label
            htmlFor="travelers"
            className="block text-sm font-medium text-gray-700 sr-only"
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
      </div>
    </div>
  );
};

export default SearchForm;
