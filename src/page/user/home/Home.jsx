import UserDashboardCard from "@/components/Cards/UserDashBoardCard/UserDashboardCard";
import Header from "@/components/UserHeader/Header";
import UserMenuBar from "@/components/UserMenuBar/UserMenuBar";
import UserTopSearch from "@/components/UserTopSearch/UserTopSearch";
import { useState } from "react";

const Home = () => {
  const [activeTab, setActiveTab] = useState("Popular");
  const tabs = ["Popular", "Featured", "Most Booked", "Most Favorite", "Recent Experience", "Recommend Experience"];
  return (
    <div className="container ">
      <Header />
      <UserTopSearch />
      {/* <UserMenuBar /> */}
      <div className="lg:overflow-x-auto lg:overflow-y-hidden border-b  ">
        <div className="flex border-b">
          {tabs.map((tab) => (
            <button key={tab} className={`px-4 py-2 text-sm font-medium border-b-2 ${activeTab === tab ? "border-primaryColor-900 text-primaryColor-900 font-bold" : "border-transparent text-gray-500 hover:text-gray-700"}`} onClick={() => setActiveTab(tab)}>
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

export default Home;
