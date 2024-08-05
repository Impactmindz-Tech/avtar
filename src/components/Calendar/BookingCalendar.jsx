import React from "react";
import { Calendar } from "@/components/ui/calendar";
import DateReservedModal from "../Modal/DateReservedModal";

const BookingCalendar = ({ date, setDate }) => {
  return (
    <div className="mx-auto bg-white BoxShadow  lg:h-auto p-4 xl:p-4 4xl:p-10 ">
      <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md border" />

      {/* <DateReservedModal show={showReservedModal} onClose={() => setShowReservedModal(false)} /> */}
    </div>
  );
};

export default BookingCalendar;
