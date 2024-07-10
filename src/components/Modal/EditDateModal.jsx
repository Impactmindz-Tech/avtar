import  { useState, useEffect, useRef } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
// import './DatePickerModal.css'; // Optional: if you want to add any custom styles

const DatePickerModal = ({ show, onClose }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const modalRef = useRef();

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      onClose();
    }
  };

  useEffect(() => {
    if (show) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [show]);

  if (!show) return null;

  return (
    <div className="fixed  flex items-end justify-center inset-0 bg-black bg-opacity-50 z-50">
      <div ref={modalRef} className="bg-white rounded-t-2xl shadow-lg w-full max-w-lg p-4">
        <h2 className="text-lg font-medium mb-4 text-center">Select Date</h2>
        <div className="flex justify-between items-center mb-4">
          <button className="focus:outline-none">
            <i className="fas fa-chevron-left"></i>
          </button>
          <span className="text-xl font-semibold">March 2024</span>
          <button className="focus:outline-none">
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          inline
        />
        <div className="mt-4">
          <input
            type="text"
            value={selectedDate.toLocaleDateString()}
            readOnly
            className="w-full border rounded p-2"
          />
        </div>
        <div className="flex mt-4">
          <button
            onClick={onClose}
            className="bg-gray-200 text-black  py-2 rounded mr-2 w-[50%]"
          >
            Cancel
          </button>
          <button
            onClick={onClose}
            className="bg-black text-white py-2 rounded  w-[50%]"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default DatePickerModal;
