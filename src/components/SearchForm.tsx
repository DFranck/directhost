"use client";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import Schedule from "./Schedule";
import { Button } from "./ui/button";
0;
const SearchForm = () => {
  const [travelers, setTravelers] = useState("");
  const [isScheduleOpen, setIsScheduleOpen] = useState(false);
  const [isDatesValidated, setIsDatesValidated] = useState(false);
  const [summary, setSummary] = useState("");
  const [blockDates, setBlockDates] = useState(false);
  const [blockTravelers, setBlockTravelers] = useState(false);
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

  const handleTravelers = (travelers: string) => {
    if (parseInt(travelers) > 0 && parseInt(travelers) <= 4 && blockDates) {
      setBlockTravelers(true);
      if (selectedDates) {
        const pricePerNight = 30;
        const nbNights = Math.ceil(
          (selectedDates.end.getTime() - selectedDates.start.getTime()) /
            (1000 * 60 * 60 * 24)
        );
        const totalPrice = pricePerNight * nbNights * parseInt(travelers);
        alert(
          `Votre demande de reservation pour la periode du ${formatDate(
            selectedDates.start
          )} au ${formatDate(
            selectedDates.end
          )} pour ${travelers} voyageurs a bien ete prise en compte. pour information cela represente ${totalPrice} €. Vous economisez ${
            nbNights * (30 + 20)
          } € sans l'utilisation de plateforme tiers.`
        );
      }
    }
  };
  const handleDates = (selectedDates: { start: Date; end: Date }) => {
    setBlockDates(true);
    setIsScheduleOpen(false);
  };
  useEffect(() => {
    if (blockDates && blockTravelers) {
      console.log(travelers);

      console.log("periode et travelers ok");
    }
  }, [blockDates, blockTravelers, summary, travelers]);
  return (
    <div className="mt-20 flex flex-col justify-center items-center w-full md:p-5">
      <h2 className="mb-5">A quelle date souhaitez vous sejourner?</h2>
      <div className="p-2 md:p-0 flex flex-col md:flex-row items-center gap-2 w-full relative">
        <div className="flex w-full">
          <label htmlFor="période" className="sr-only">
            période
          </label>
          <div
            id="travelers"
            className={cn(
              {
                "text-muted-foreground/60 rounded bg-accent": !blockDates,
                "text-foreground rounded bg-green-100": blockDates,
              },
              " w-full border-none focus:ring-0  rounded cursor-pointer flex items-center p-2 text-sm"
            )}
            onClick={handleSchedule}
          >
            <p className="">
              {!selectedDates
                ? "Choisissez votre période"
                : `${formatDate(selectedDates.start)} - ${formatDate(
                    selectedDates.end
                  )}`}
            </p>
          </div>
          {selectedDates && (
            <Button
              className={cn(
                {
                  hidden: !isScheduleOpen,
                },
                "rounded-none rounded-r"
              )}
              onClick={() => handleDates(selectedDates)}
            >
              Vérifier
            </Button>
          )}
        </div>
        <div className="flex w-full">
          <label
            htmlFor="travelers"
            className="block text-sm font-medium sr-only"
          >
            Voyageurs
          </label>
          <input
            id="travelers"
            onFocus={() => setBlockTravelers(false)}
            type="number"
            className={cn(
              {
                "bg-green-100": blockTravelers,
                "bg-accent": !blockTravelers,
              },
              "block w-full border-none focus:ring-0 p-2 rounded-l text-sm outline-none focus:bg-accent"
            )}
            placeholder="Ajouter des voyageurs"
            value={travelers}
            onChange={(e) => setTravelers(e.target.value)}
          />
          <Button
            className={cn(
              {
                hidden: blockTravelers,
              },
              "rounded-none rounded-r"
            )}
            onClick={() => handleTravelers(travelers)}
            variant={!travelers ? "outline" : "default"}
          >
            Valider
          </Button>
        </div>
        <div
          className={`${
            isScheduleOpen ? "opacity-100" : "opacity-0"
          } absolute top-0 left-0 z-10 mt-10 md:mt-12 xl:w-1/2 w-full`}
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
    </div>
  );
};

export default SearchForm;
