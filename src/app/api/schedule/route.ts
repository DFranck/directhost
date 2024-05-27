import ical from "ical";
const AIRBNB_ICAL_URL =
  "https://www.airbnb.fr/calendar/ical/1161320708540338981.ics?s=348f60dc2a5df5c6137c4a43ff5d0017";
const BOOKING_ICAL_URL =
  "https://ical.booking.com/v1/export?t=1eb6c021-1915-4f35-a9f1-ff6d5e317d3c";
export const GET = () => {
  return Response.json({ message: "Hello, this route is for airbnb" });
};

export const POST = async () => {
  try {
    const airbnbReservation = await fetchAirbnbReservations();
    const bookingReservation = await fetchBookingReservations();

    const allReservations = mergeOverlappingEvents([
      ...airbnbReservation,
      ...bookingReservation,
    ]);
    return Response.json(allReservations);
  } catch {
    return Response.json({ message: "Hello, this route is for airbnb" });
  }
};

const fetchBookingReservations = async () => {
  const response = await fetch(BOOKING_ICAL_URL);
  const icalData = await response.text();
  const events = ical.parseICS(icalData);
  console.log(events);

  const reservations = Object.values(events)
    .filter((event: any) => event.start && event.end)
    .map((event: any) => ({
      title: "Dates indisponsibles",
      source: "booking",
      start: event.start.toISOString(),
      end: event.end.toISOString(),
    }));

  return reservations;
};
const mergeOverlappingEvents = (events: any[]) => {
  if (!events.length) return events;

  // Trier les événements par date de début
  events.sort(
    (a, b) => new Date(a.start).getTime() - new Date(b.start).getTime()
  );

  const mergedEvents = [];
  let currentEvent = events[0];

  for (let i = 1; i < events.length; i++) {
    const event = events[i];
    if (new Date(event.start) <= new Date(currentEvent.end)) {
      // Si l'événement chevauche le currentEvent, fusionner les deux
      currentEvent.end = new Date(
        Math.max(
          new Date(event.end).getTime(),
          new Date(currentEvent.end).getTime()
        )
      ).toISOString();
    } else {
      // Sinon, ajouter currentEvent à la liste fusionnée et mettre à jour currentEvent
      mergedEvents.push(currentEvent);
      currentEvent = event;
    }
  }
  mergedEvents.push(currentEvent); // Ajouter le dernier événement

  return mergedEvents;
};

const fetchAirbnbReservations = async () => {
  const response = await fetch(AIRBNB_ICAL_URL);
  const icalData = await response.text();
  const events = ical.parseICS(icalData);

  const reservations = Object.values(events)
    .filter((event: any) => event.start && event.end)
    .map((event: any) => ({
      title: "Dates indisponsibles",
      source: "airbnb",
      start: event.start.toISOString(),
      end: event.end.toISOString(),
    }));

  return reservations;
};
