import { useEffect, useRef } from "react";

import Images from "@/constant/Images";

const InstantLiveRequestModal = ({ instantLiveModalState, setInstantLiveModalState }) => {
  const modalRef = useRef();

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setInstantLiveModalState();
    }
  };

  useEffect(() => {
    if (instantLiveModalState) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [instantLiveModalState]);

  if (!instantLiveModalState) return null;

  return (
    <div className="fixed top-0 flex items-start justify-center inset-0 bg-black bg-opacity-50 z-50">
      <div ref={modalRef} className="bg-white BoxShadowModalTop rounded-b-2xl px-7 shadow-lg w-full max-w-4xl xl:max-w-2xl lg:max-w-full p-3">
        {/*  */}

        <div className=" pb-2">
          <h1 className="text-center py-2">Instant Lives Request</h1>
          <div className="flex  gap-4 p-4 sm:flex-wrap">
            <div className="sm:w-[100%] relative w-[30%]">
              <img src={Images.cardImageRounded} alt="cardImageRounded" className="m-auto w-[90%] h-[110px] sm:w-full object-cover sm:h-[200px] rounded-lg" />
            </div>
            <div className="w-[80%] sm:w-[100%]">
              <h2 className="text-2xl font-bold  sm:text-sm">$15.20</h2>
              <h2 className="text-lg font-bold  sm:text-sm">Shikara Hotel</h2>

              <div className="flex justify-between items-center gap-2 py-1">
                <div className="icon">
                  <img src={Images.location2} alt="location" className="w-5 h-5" />
                </div>
                <div className="flex-1">Grand Park, New York</div>
              </div>
            </div>
          </div>

          <div className="flex justify-between m-auto w-[94%] py-2 text-grey-800">
            <button className="border border-primaryColor-900 text-black font-semibold py-2 rounded mr-2 w-[50%]" onClick={() => setInstantLiveModalState(false)}>
              Deny
            </button>
            <button className="bg-black text-white py-2 rounded  w-[50%]">Accept</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstantLiveRequestModal;
