import BlackBottomButton from "@/components/Button/BlackBottomButton";
import BookingCalendar from "@/components/Calendar/BookingCalendar";
import HeaderBack from "@/components/HeaderBack";
import DateReservedModal from "@/components/Modal/DateReservedModal";
import Images from "@/constant/Images";
import { useState } from "react";

function Booking() {
  return (
    <div className="container">
      <HeaderBack link="/user/book-experience" text={"Set Date"} />

      <div className="max-w-2xl m-auto ">
        <BookingCalendar />
        {/* eastern  */}
        <div className=" bg-white  rounded-lg my-5">
          <h2 className="text-xl font-semibold mb-4">Eastern Standard Time</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Selected Date</label>
              <div className="relative">
                <input type="text" className="w-full p-2 border border-gray-300 rounded-md" value="21/03/2024" readOnly />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Selected Time</label>
              <div className="relative flex items-center">
                <div className="absolute top-2 right-2">
                  <img src={Images.clock} alt="clock" />
                </div>
                <input type="text" className="w-full p-2 border border-gray-300 rounded-md" value="10:00:15 AM" readOnly />
                <i className="fas fa-clock absolute right-3 text-gray-400"></i>
              </div>
            </div>
          </div>
        </div>
        <button className="border hover:bg-[#FF7070] hover:text-white font-bold border-borderFill-400 text-borderFill-400 w-full p-3 text-lg rounded-lg">Instant Live</button>

        {/* duration */}
        <div className="my-2">
          <div className="mb-2">
            <h3 className="text-lg font-semibold mb-2">Duration</h3>
            <div className="flex space-x-2">
              <button className="p-3 bg-gray-200 rounded-md">15 min</button>
              <button className="p-3 bg-black text-white rounded-md">30 min</button>
              <button className="p-3 bg-gray-200 rounded-md">45 min</button>
              <button className="p-3 bg-gray-200 rounded-md">1 hour</button>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Tour Type</h3>
            <div className="flex space-x-2">
              <button className="p-3 bg-gray-200 rounded-md">Public</button>
              <button className="p-3 bg-gray-200 rounded-md">Private</button>
            </div>
          </div>
        </div>

        <BlackBottomButton link="/user/confirm-and-pay" text="Proceed"/>
      </div>

      {/* <DateReservedModal /> */}
    </div>
  );
}

export default Booking;
