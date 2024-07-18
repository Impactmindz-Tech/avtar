import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "@/store/slice/experinceS/ExperinceSlice";
import UserDashboardCard from "@/components/Cards/UserDashBoardCard/UserDashboardCard";
import Header from "@/components/UserHeader/Header";
import UserTopSearch from "@/components/UserTopSearch/UserTopSearch";
import Featured from "@/constant/usertab/Featured";
import MostBooked from "@/constant/usertab/MostBooked";
import MostFavorite from "@/constant/usertab/MostFavorite";
import Popular from "@/constant/usertab/Popular";
import RecentExperience from "@/constant/usertab/RecentExperience";
import { userExperienceApi } from "@/utills/service/userSideService/userService/UserHomeService";
import RecommendExperience from "@/constant/usertab/RecommendExperience";

const Home = () => {
  const [activeTab, setActiveTab] = useState("Popular");
  const dispatch = useDispatch();
  const userExperinceData = useSelector((state) => state.ExperinceProduct.products);
  const tabs = ["Popular", "Recommeneded", "Mostbooked", "Recent"];

  const userExperience = async (tab) => {
    try {
      const response = await userExperienceApi(tab);
      if (response?.isSuccess) {
        dispatch(setProducts(response));
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    userExperience(activeTab);
  }, [activeTab]);

  return (
    <div className="container">
      <Header />
      <UserTopSearch />
      {/* <UserMenuBar /> */}
      <div className="lg:overflow-x-auto lg:overflow-y-hidden border-b">
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
        <div className="my-10 grid grid-cols-4 gap-4">
          <Featured />
        </div>
      )}

      {activeTab === "Mostbooked" && (
        <div className="my-10 grid grid-cols-4 sm:grid-cols-1 gap-4">
          {userExperinceData?.data?.map((product) => (
            <MostBooked key={product._id} product={product} />
          ))}
        </div>
      )}

      {activeTab === "Mostbooked" && (
        <div className="my-10 grid grid-cols-4 sm:grid-cols-1 gap-4">
          <MostFavorite />
        </div>
      )}

      {activeTab === "Recent" && (
        <div className="my-10 grid grid-cols-4 sm:grid-cols-1 gap-4">
          {userExperinceData?.data?.map((product) => (
            <RecentExperience key={product._id} product={product} />
          ))}
        </div>
      )}

      {activeTab === "Recommeneded" && (
        <div className="my-10 grid grid-cols-4 sm:grid-cols-1 gap-4">
          {userExperinceData?.data?.map((product) => (
            <RecommendExperience key={product._id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
