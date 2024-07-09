import { useState } from "react";
import dayjs from "dayjs";
import Images from "@/constant/Images";

const BookingCalendar = () => {
  const [currentDate, setCurrentDate] = useState(dayjs());

  const startOfMonth = currentDate.startOf("month").day();
  const daysInMonth = currentDate.daysInMonth();

  const days = [];
  for (let i = 0; i < startOfMonth; i++) {
    days.push(null);
  }
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }

  const previousMonth = () => {
    setCurrentDate(currentDate.subtract(1, "month"));
  };

  const nextMonth = () => {
    setCurrentDate(currentDate.add(1, "month"));
  };
  return (
    <>
      <div className=" mx-auto bg-white BoxShadow p-4">
        <div className="flex justify-between items-center mb-4">
          <button onClick={previousMonth} className="px-3 py-2 border rounded-full">
            <img src={Images.arrowLeftSm} alt="arrowLeftSm" />
          </button>
          <div className="text-center">
            <h2 className="text-lg font-semibold">{currentDate.format("MMMM")}</h2>
            <p className="text-sm">{currentDate.format("YYYY")}</p>
          </div>
          <button onClick={nextMonth} className="p-2 border rounded-full">
            <img src={Images.arrowRight} alt="arrow right" />
          </button>
        </div>
        <div className="grid grid-cols-7 gap-2 text-center ">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
            <div key={day} className="text-sm font-medium text-grey-800">
              {day}
            </div>
          ))}
          {days.map((day, index) => (
            <div key={index} className={`p-2 rounded-full ${day ? (currentDate.date() === day ? "bg-black text-white rounded-full" : " text-black") : "bg-transparent"}`}>
              {day}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BookingCalendar;
