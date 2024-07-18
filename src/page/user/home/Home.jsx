import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "@/store/slice/experinceS/ExperinceSlice";
import Header from "@/components/UserHeader/Header";
import UserTopSearch from "@/components/UserTopSearch/UserTopSearch";
import Popular from "@/constant/usertab/Popular";
import { userExperienceApi } from "@/utills/service/userSideService/userService/UserHomeService";

const Home = () => {
  const [activeTab, setActiveTab] = useState("Popular");
  const dispatch = useDispatch();
  const userExperienceData = useSelector((state) => state.ExperinceProduct.products);
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
      <div className="lg:overflow-x-auto lg:overflow-y-hidden border-b">
        <div className="flex border-b">
          {tabs.map((tab) => (
            <button key={tab} className={`px-4 py-2 text-sm font-medium border-b-2 ${activeTab === tab ? "border-primaryColor-900 text-primaryColor-900 font-bold" : "border-transparent text-gray-500 hover:text-gray-700"}`} onClick={() => setActiveTab(tab)}>
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="my-10 grid grid-cols-4 lg:grid-cols-2 sm:grid-cols-1 xl:lg:grid-cols-2 gap-4">
        {userExperienceData?.data?.map((product) => (
          <Popular key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
