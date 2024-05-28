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
    <div className="border rounded shadow p-6 flex items-center">
      <div className="flex-grow">
        <label className="block text-sm font-medium text-gray-700">
          Arrivée
        </label>
        <input
          type="date"
          className="mt-1 block w-full border-none focus:ring-0"
          placeholder="Quand ?"
          value={arrivalDate}
          onChange={(e) => setArrivalDate(e.target.value)}
        />
      </div>
      <div className="flex-grow">
        <label className="block text-sm font-medium text-gray-700">
          Départ
        </label>
        <input
          type="date"
          className="mt-1 block w-full border-none focus:ring-0"
          placeholder="Quand ?"
          value={departureDate}
          onChange={(e) => setDepartureDate(e.target.value)}
        />
      </div>
      <div className="flex-grow">
        <label className="block text-sm font-medium text-gray-700">
          Voyageurs
        </label>
        <input
          type="text"
          className="mt-1 block w-full border-none focus:ring-0"
          placeholder="Ajouter des voyageurs"
          value={travelers}
          onChange={(e) => setTravelers(e.target.value)}
        />
      </div>
      <button
        className="ml-4 p-2 bg-red-500 text-white rounded-full"
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
  );
};

export default SearchForm;
