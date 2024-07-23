import { useState, useEffect, useRef } from "react";
import EditDateCalendar from "../Calendar/EditDateCalendar";
import UserSearch from "../UserTopSearch/UserSearch";
import Images from "@/constant/Images";

const ReportProfile = ({ multipleAddressModalState, setMultipleAddressModalState }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const modalRef = useRef();

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setMultipleAddressModalState();
    }
  };

  useEffect(() => {
    if (multipleAddressModalState) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [multipleAddressModalState]);

  if (!multipleAddressModalState) return null;

  return (
    <div className="fixed  flex items-end justify-center inset-0 bg-black bg-opacity-50 z-50">
      <div ref={modalRef} className="bg-white rounded-t-2xl px-7 shadow-lg w-full max-w-4xl xl:max-w-2xl lg:max-w-full p-3">
        <div className="flex justify-between items-center mb-4">
          <button className="focus:outline-none">
            <i className="fas fa-chevron-left"></i>
          </button>
          <span className="text-xl font-bold py-4">What’s happening?</span>
          <button className="focus:outline-none">
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>

        <div className="p-4">
          <div className="mb-4">
            <div className="flex items-start justify-between my-4 cardShadow p-3">
              <label htmlFor="spam sm:text-sm" className="sm:w-[80%]">I think they’re scamming or spamming me</label>
              <input type="radio" name="reason" id="spam" className="form-radio h-5 w-5 mr-4" />
            </div>
            <div className="flex items-start justify-between my-4 cardShadow p-3">
              <label htmlFor="offensive" className="sm:w-[80%]">They’re being offensive</label>
              <input type="radio" name="reason" id="offensive" className="form-radio h-5 w-5 mr-4" />
            </div>
            <div className="flex items-start justify-between my-4 cardShadow p-3">
              <label htmlFor="else" className="sm:w-[80%]">Something else</label>
              <input type="radio" name="reason" id="else" className="form-radio h-5 w-5 mr-4" />
            </div>
          </div>
        </div>

        <div className="flex mt-4">
          <button onClick={setMultipleAddressModalState} className="bg-grey-900 text-white py-4 rounded w-full">
            Ok
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReportProfile;
