import { useState } from "react";
import BookedCard from "../Cards/ExperiencePageCard/BookedCard";
import RequestedCard from "../Cards/ExperiencePageCard/RequestedCard";
import CompletedCard from "../Cards/ExperiencePageCard/CompletedCard";
import CancelledCard from "../Cards/ExperiencePageCard/CancelledCard";
const ExperiencePageTab = () => {
  const [activeTab, setActiveTab] = useState("Booked");
  const tabs = ["Requested", "Booked", "Completed", "Cancelled"];
  return (
    <div className="container mx-auto p-4">
      <div className="flex border-b">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 text-sm font-medium border-b-2 ${
              activeTab === tab ? "border-primaryColor-900 text-primaryColor-900 font-bold" : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {activeTab === "Booked" && (
        <>
          <BookedCard />
          <BookedCard />
        </>
      )}
      {activeTab === "Requested" && (
        <>
          <RequestedCard />
          <RequestedCard />
        </>
      )}
      {activeTab === "Completed" && (
        <>
          <CompletedCard />
          <CompletedCard />
        </>
      )}
      {activeTab === "Cancelled" && (
        <>
          <CancelledCard />
          <CancelledCard />
        </>
      )}
    </div>
  );
};

export default ExperiencePageTab;
