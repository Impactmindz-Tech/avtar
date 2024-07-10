import { useState, useEffect, useRef } from "react";
import EditDateCalendar from "../Calendar/EditDateCalendar";
import Images from "@/constant/Images";

const DateReservedModal = ({ show, onClose }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const modalRef = useRef();

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      onClose();
    }
  };

  useEffect(() => {
    if (show) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [show]);

  if (!show) return null;

  return (
    <div className="fixed  flex items-end justify-center inset-0 bg-black bg-opacity-50 z-50">
      <div ref={modalRef} className="bg-white rounded-t-2xl px-7 shadow-lg w-full max-w-lg lg:max-w-full p-3">
        {/*  */}
        <div className="flex justify-center mt-7">
          <div className="rounded-full p-5 bg-borderFill-900">
            <img src={Images.calendarTick} alt="calendarTick" />
          </div>
        </div>
        <div className="flex justify-center py-5">
        <p className="w-[90%] text-grey-800">
        The Avatar is already booked for this specific date and time slot. Please try the next time slot available on this date

        </p>
        </div>

        <div className="my-2">
          <div className="mb-2">
            <h3 className="text-lg font-semibold mb-2">Next availability :</h3>
            <div className="flex space-x-2">
              <button className="p-3 bg-black text-white rounded-md">11:00 Am</button>
              <button className="p-3 bg-gray-200  rounded-md">11:30 Am</button>
              <button className="p-3 bg-gray-200 rounded-md">12:00 Am</button>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Duration</h3>
            <div className="flex space-x-2">
              <button className="p-3 bg-gray-200 rounded-md">15 Min</button>
              <button className="p-3 bg-gray-200 rounded-md">30 Min</button>
              <button className="p-3 bg-gray-200 rounded-md">45 Min</button>
              <button className="p-3 bg-gray-200 rounded-md">1 Hour</button>
            </div>
          </div>
        </div>

        <div className="flex mt-4">
          <button onClick={onClose} className="bg-black text-white py-3 rounded  w-full">
            Done
          </button>
        </div>
      </div>
    </div>
  );
};

export default DateReservedModal;