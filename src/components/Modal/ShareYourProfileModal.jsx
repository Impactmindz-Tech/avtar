import { useState, useEffect, useRef } from "react";
import EditDateCalendar from "../Calendar/EditDateCalendar";
import UserSearch from "../UserTopSearch/UserSearch";
import Images from "@/constant/Images";

const ShareYourProfileModal = ({ shareProfileModalState, setShareProfileModalState }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const modalRef = useRef();

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setShareProfileModalState();
    }
  };

  useEffect(() => {
    if (shareProfileModalState) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [shareProfileModalState]);

  if (!shareProfileModalState) return null;

  return (
    <div className="fixed  flex items-end justify-center inset-0 bg-black bg-opacity-50 z-50">
      <div ref={modalRef} className="bg-white rounded-t-2xl px-7 shadow-lg w-full max-w-4xl xl:max-w-2xl lg:max-w-full p-3">
        <div className="flex justify-between items-center mb-4">
          <button className="focus:outline-none">
            <i className="fas fa-chevron-left"></i>
          </button>
          <span className="text-xl font-bold">Share Your Profile</span>
          <button className="focus:outline-none">
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>

        <div className="p-4 flex gap-4 justify-center m-auto w-[80%]">
          <div className="bg-[#1877F2] rounded-full p-4 cursor-pointer">
            <img src={Images.facebook} alt="facebook" className="bg-white rounded-full" />
          </div>

          <div className="insta rounded-full p-4 cursor-pointer">
            <img src={Images.insta} alt="insta" />
          </div>
          <div className="bg-[#48c857] rounded-full p-4 cursor-pointer">
            <img src={Images.whatsapp} alt="whatsapp" />
          </div>
          <div className="bg-[#000000] rounded-full p-4 cursor-pointer">
            <img src={Images.tiktok} alt="tiktok" />
          </div>
        </div>

        <div className="flex justify-between mt-4">
          <div className="text font-bold">Share via link</div>
          <div className="flex gap-3">
            <div className="text-grey-800">Copy link</div>
            <img src={Images.copy} alt="copy" className="cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShareYourProfileModal;
