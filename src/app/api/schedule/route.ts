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

    const reservations = [...airbnbReservation, ...bookingReservation];
    return Response.json(reservations);
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
      title: event.summary,
      source: "booking",
      start: event.start.toISOString(),
      end: event.end.toISOString(),
    }));

  return reservations;
};

const fetchAirbnbReservations = async () => {
  const response = await fetch(AIRBNB_ICAL_URL);
  const icalData = await response.text();
  const events = ical.parseICS(icalData);

  const reservations = Object.values(events)
    .filter((event: any) => event.start && event.end)
    .map((event: any) => ({
      title: event.summary,
      source: "airbnb",
      start: event.start.toISOString(),
      end: event.end.toISOString(),
    }));

  return reservations;
};
