import React, { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import DateReservedModal from "../Modal/DateReservedModal";

const BookingCalendar = ({ date, setDate }) => {
  const [showReservedModal, setShowReservedModal] = useState(false);

  const handleDateSelect = (selectedDate) => {
    setDate(selectedDate);
    // setShowReservedModal(true); // Show the modal when a date is selected
  };
  return (
    <div className="mx-auto bg-white BoxShadow  lg:h-auto p-4 xl:p-4 4xl:p-10 ">
      <Calendar mode="single" selected={date} onSelect={handleDateSelect} className="rounded-md border" />
      {/* <DateReservedModal show={showReservedModal} onClose={() => setShowReservedModal(false)} /> */}
    </div>
  );
};

export default BookingCalendar;
