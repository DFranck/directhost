import ical from "ical";
const AIRBNB_ICAL_URL =
  "https://www.airbnb.fr/calendar/ical/1161320708540338981.ics?s=348f60dc2a5df5c6137c4a43ff5d0017";

export const GET = () => {
  return Response.json({ message: "Hello, this route is for airbnb" });
};

export const POST = async () => {
  try {
    const airbnbReservation = await fetchAirbnbReservations();
    return Response.json(airbnbReservation);
  } catch {
    return Response.json({ message: "Hello, this route is for airbnb" });
  }
};

const fetchAirbnbReservations = async () => {
  const response = await fetch(AIRBNB_ICAL_URL);
  const icalData = await response.text();
  const events = ical.parseICS(icalData);

  const reservations = Object.values(events)
    .filter((event: any) => event.start && event.end)
    .map((event: any) => ({
      title: event.summary,
      start: event.start.toISOString(),
      end: event.end.toISOString(),
    }));

  return reservations;
};
