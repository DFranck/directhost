import ReservationDetails from "@/components/ReservationDetails";
import Schedule from "@/components/Schedule";

const page = () => {
  return (
    <div>
      <Schedule onDateSelect={() => {}} />
      <ReservationDetails />
    </div>
  );
};

export default page;
