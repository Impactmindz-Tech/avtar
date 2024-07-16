import UserDashboardCard from "@/components/Cards/UserDashBoardCard/UserDashboardCard";
import Header from "@/components/UserHeader/Header";
import UserMenuBar from "@/components/UserMenuBar/UserMenuBar";
import UserTopSearch from "@/components/UserTopSearch/UserTopSearch";
import Featured from "@/constant/usertab/Featured";
import MostBooked from "@/constant/usertab/MostBooked";
import MostFavorite from "@/constant/usertab/MostFavorite";
import Popular from "@/constant/usertab/Popular";
import RecentExperience from "@/constant/usertab/RecentExperience";
import RecommendExperience from "@/constant/usertab/RecommendExperience";
import { useState } from "react";
import { userExperienceApi } from "@/utills/service/userService/UserHomeService";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "@/store/slice/ExperinceProduct";

const Home = () => {
  const [activeTab, setActiveTab] = useState("Popular");
  const dispatch = useDispatch();
  const userExperinceData = useSelector((state) => state.ExperinceProduct.products);
  const tabs = ["Popular", "Featured", "Most Booked", "Most Favorite", "Recent Experience", "Recommend Experience"];
  const userExperience = async () => {
    try {
      const response = await userExperienceApi();
      if (response?.isSuccess) {
        dispatch(setProducts(response));
      }
    } catch (error) {
      console.log(error);
    }
  };
  useState(() => {
    userExperience();
  }, [userExperience]);
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
          {userExperinceData?.data?.map((product) => (
            <Popular key={product._id} product={product} />
          ))}
        </div>
      )}

      {activeTab === "Featured" && (
        <div className="my-10 grid grid-cols-4  gap-4">
          <Featured />
        </div>
      )}

      {activeTab === "Most Booked" && (
        <div className="my-10 grid grid-cols-4 sm:grid-cols-1 gap-4">
          <MostBooked />
        </div>
      )}

      {activeTab === "Most Favorite" && (
        <div className="my-10 grid grid-cols-4 sm:grid-cols-1 gap-4">
          <MostFavorite />
        </div>
      )}

      {activeTab === "Recent Experience" && (
        <div className="my-10 grid grid-cols-4 sm:grid-cols-1 gap-4">
          <RecentExperience />
        </div>
      )}

      {activeTab === "Recommend Experience" && (
        <div className="my-10 grid grid-cols-4 sm:grid-cols-1 gap-4">
          <RecommendExperience />
        </div>
      )}
    </div>
  );
};

export default Home;
