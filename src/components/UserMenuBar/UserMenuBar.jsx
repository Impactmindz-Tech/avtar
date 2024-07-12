import React from "react";
import { useState } from "react";
import UserDashboardCard from "../Cards/UserDashBoardCard/UserDashboardCard";

const UserMenuBar = () => {
  const [activeTab, setActiveTab] = useState("Popular");
  const tabs = ["Popular", "Featured", "Most Booked", "Most Favorite", "Recent Experience", "Recommend Experience"];

  return (
    <div className="container mx-auto p-4">
      <div className="lg:overflow-x-auto lg:overflow-y-hidden border-b  ">
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
      </div>

      {activeTab === "Popular" && (
        <div className="my-10 grid grid-cols-4 lg:grid-cols-2 sm:grid-cols-1 xl:lg:grid-cols-2 gap-4">
          <UserDashboardCard />
          <UserDashboardCard />
          <UserDashboardCard />
          <UserDashboardCard />
          <UserDashboardCard />
          <UserDashboardCard />
        </div>
      )}

      {activeTab === "Featured" && (
        <div className="my-10 grid grid-cols-4  gap-4">
          <UserDashboardCard />
          <UserDashboardCard />
          <UserDashboardCard />
          <UserDashboardCard />
          <UserDashboardCard />
          <UserDashboardCard />
        </div>
      )}

      {activeTab === "Most Booked" && (
        <div className="my-10 grid grid-cols-4 sm:grid-cols-1 gap-4">
          <UserDashboardCard />
          <UserDashboardCard />
          <UserDashboardCard />
          <UserDashboardCard />
          <UserDashboardCard />
          <UserDashboardCard />
        </div>
      )}

      {activeTab === "Most Favorite" && (
        <div className="my-10 grid grid-cols-4 sm:grid-cols-1 gap-4">
          <UserDashboardCard />
          <UserDashboardCard />
          <UserDashboardCard />
          <UserDashboardCard />
          <UserDashboardCard />
          <UserDashboardCard />
        </div>
      )}

      {activeTab === "Recent Experience" && (
        <div className="my-10 grid grid-cols-4 sm:grid-cols-1 gap-4">
          <UserDashboardCard />
          <UserDashboardCard />
          <UserDashboardCard />
          <UserDashboardCard />
          <UserDashboardCard />
          <UserDashboardCard />
        </div>
      )}

      {activeTab === "Recommend Experience" && (
        <div className="my-10 grid grid-cols-4 sm:grid-cols-1 gap-4">
          <UserDashboardCard />
          <UserDashboardCard />
          <UserDashboardCard />
          <UserDashboardCard />
          <UserDashboardCard />
          <UserDashboardCard />
        </div>
      )}
    </div>
  );
};

export default UserMenuBar;
