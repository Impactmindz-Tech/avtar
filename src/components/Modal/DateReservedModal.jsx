import { useEffect, useRef, useState } from "react";

import Images from "@/constant/Images";

const DateReservedModal = ({ show, onClose }) => {
  const [selectedTime, setSelectedTime] = useState(null);
  const [duration, setDuration] = useState(null);
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
      <div ref={modalRef} className="bg-white rounded-t-2xl px-7 shadow-lg w-full max-w-4xl xl:max-w-2xl lg:max-w-full p-3">
        {/*  */}
        <div className="flex justify-center mt-7">
          <div className="rounded-full p-5 bg-borderFill-900 md:p-4">
            <img src={Images.calendarTick} alt="calendarTick" className="md:w-10 md:h-10" />
          </div>
        </div>
        <div className="flex justify-center py-5">
          <p className="w-[90%] text-grey-800 md:text-sm">The Avatar is already booked for this specific date and time slot. Please try the next time slot available on this date</p>
        </div>

        <div className="my-2">
          <div className="mb-2">
            <h3 className="text-lg font-semibold mb-2">Next availability :</h3>
            <div className="flex space-x-2">
              <button className={`p-3 ${selectedTime === "11:00" ? "bg-black text-white" : "bg-gray-200"} rounded-md md:p-2 md:px-2 md:text-sm`} onClick={() => setSelectedTime("11:00")}>
                11:00 Am
              </button>
              <button className={`p-3 ${selectedTime === "11:30" ? "bg-black text-white" : "bg-gray-200"} rounded-md md:p-2 md:px-2 md:text-sm`} onClick={() => setSelectedTime("11:30")}>
                11:30 Am
              </button>
              <button className={`p-3 ${selectedTime === "12:00" ? "bg-black text-white" : "bg-gray-200"} rounded-md md:p-2 md:px-2 md:text-sm`} onClick={() => setSelectedTime("12:00")}>
                12:00 Am
              </button>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Duration</h3>
            <div className="flex space-x-2">
            <button className={`p-3 ${duration === "15 min" ? "bg-black text-white" : "bg-gray-200"} rounded-md md:p-2 md:px-2 md:text-sm`} onClick={() => setDuration("15 min")}>
                15 min
              </button>
              <button className={`p-3 ${duration === "30 min" ? "bg-black text-white" : "bg-gray-200"} rounded-md md:p-2 md:px-2 md:text-sm`} onClick={() => setDuration("30 min")}>
                30 min
              </button>
              <button className={`p-3 ${duration === "45 min" ? "bg-black text-white" : "bg-gray-200"} rounded-md md:p-2 md:px-2 md:text-sm`} onClick={() => setDuration("45 min")}>
                45 min
              </button>
              <button className={`p-3 ${duration === "1 hour" ? "bg-black text-white" : "bg-gray-200"} rounded-md md:p-2 md:px-2 md:text-sm`} onClick={() => setDuration("1 hour")}>
                1 hour
              </button>
            </div>
          </div>
        </div>

        <div className="flex mt-4">
          <button onClick={onClose} className="bg-black text-white py-3 rounded md:text-sm w-full">
            Done
          </button>
        </div>
      </div>
    </div>
  );
};

export default DateReservedModal;
