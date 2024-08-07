import BookingCalendar from "@/components/Calendar/BookingCalendar";
import HeaderBack from "@/components/HeaderBack";
import Images from "@/constant/Images";
import { bookingExperinceApi } from "@/utills/service/userSideService/userService/UserHomeService";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Booking() {
  const navigate = useNavigate()
  const params = useParams();
  const [date, setDate] = useState(new Date() | undefined);
  const [selectedTime, setSelectedTime] = useState(null);
  const [duration, setDuration] = useState(null);
  const [type, setType] = useState(null);

  const formatDate = (date) => {
    return date.toISOString().split("T")[0];
  };
  const onSubmit = async () => {
    let body = {
      bookingDate: formatDate(date),
      bookingTime: selectedTime,
      Duration: duration,
      tourType: type,
      path:"tt"
    };
    try {
      const response = await bookingExperinceApi(params?.id, body);
      if(response?.isSuccess){
        console.log(response)
        navigate("/user/confirm-and-pay/" + response?.data?._id)
      }
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <HeaderBack link="/user/book-experience" text={"Set Date"} />

      <div className="my-4">
        <BookingCalendar setDate={setDate} date={date} />
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
        <button className="border hover:bg-[#FF7070] hover:text-white font-bold border-borderFill-400 text-borderFill-400 w-full p-2 text-lg rounded-lg">Instant Live</button>

        <div className="my-2">
          <div className="mb-2">
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
            <h3 className="text-lg font-semibold mb-2">Duration</h3>
            <div className="flex space-x-2">
              <button className={`p-3 ${duration === 15 ? "bg-black text-white" : "bg-gray-200"} rounded-md md:p-2 md:px-2 md:text-sm`} onClick={() => setDuration(15)}>
                15 min
              </button>
              <button className={`p-3 ${duration === 30 ? "bg-black text-white" : "bg-gray-200"} rounded-md md:p-2 md:px-2 md:text-sm`} onClick={() => setDuration(30)}>
                30 min
              </button>
              <button className={`p-3 ${duration === 45 ? "bg-black text-white" : "bg-gray-200"} rounded-md md:p-2 md:px-2 md:text-sm`} onClick={() => setDuration(45)}>
                45 min
              </button>
              <button className={`p-3 ${duration === 1 ? "bg-black text-white" : "bg-gray-200"} rounded-md md:p-2 md:px-2 md:text-sm`} onClick={() => setDuration(1)}>
                1 hour
              </button>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Tour Type</h3>
            <div className="flex space-x-2">
              <button className={`p-3 ${type === "Public" ? "bg-black text-white" : "bg-gray-200"} rounded-md md:p-2 md:px-2 md:text-sm`} onClick={() => setType("Public")}>
                Public
              </button>
              <button className={`p-3 ${type === "Private" ? "bg-black text-white" : "bg-gray-200"} rounded-md md:p-2 md:px-2 md:text-sm`} onClick={() => setType("Private")}>
                Private
              </button>
            </div>
          </div>
        </div>

        <div onClick={onSubmit} className="w-full my-6 rounded-md bottom-1 m-auto left-0 right-0 p-2 cursor-pointer bg-backgroundFill-900 text-white text-center">
          <button className="py-1 font-bold ">{"Book"}</button>
        </div>
        {/* <BlackBottomButton link="/user/confirm-and-pay" text="Proceed" /> */}
      </div>
    </div>
  );
}

export default Booking;
