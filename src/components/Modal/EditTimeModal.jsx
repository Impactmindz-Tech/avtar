import { useEffect, useRef } from "react";
import TimePicker from "./TimePicker";

const EditTimeModal = ({ show, onClose }) => {
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
    <div className="fixed flex items-end justify-center inset-0 bg-black bg-opacity-50 z-50">
      <div ref={modalRef} className="bg-white rounded-t-2xl shadow-lg w-full max-w-lg lg:max-w-full p-3">
        <div className="flex justify-between items-center mb-4">
          <button className="focus:outline-none">
            <i className="fas fa-chevron-left"></i>
          </button>
          <span className="text-xl font-bold">Select Time</span>
          <button className="focus:outline-none">
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>

        <div className="h-[30vh] flex justify-center">
          <TimePicker />
        </div>

        <div className="flex mt-4">
          <button onClick={onClose} className="border border-primaryColor-900 text-black font-semibold py-2 rounded mr-2 w-[50%]">
            Cancel
          </button>
          <button onClick={onClose} className="bg-black text-white py-2 rounded  w-[50%]">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditTimeModal;
