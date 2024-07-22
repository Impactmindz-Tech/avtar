import { useState } from "react";

export default function ChatAndSupportCard({ title, desc }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="BoxShadow cardShadow my-5">
      <div className="bg-white p-4 cursor-pointer flex justify-between items-center" onClick={() => setIsOpen(!isOpen)}>
        <h2 className="text-lg font-semibold">{title}</h2>
        <svg className={`text-grey-900 w-6 h-6 transform transition-transform duration-300 ${isOpen ? "rotate-0" : "rotate-180"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </div>
      {isOpen && (
        <div className=" p-4 text-gray-800">
          <p>{desc}</p>
        </div>
      )}
    </div>
  );
}
