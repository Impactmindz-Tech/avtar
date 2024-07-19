import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "@/store/slice/experinceS/ExperinceSlice";
import Header from "@/components/UserHeader/Header";
import UserTopSearch from "@/components/UserTopSearch/UserTopSearch";
import { userExperienceApi } from "@/utills/service/userSideService/userService/UserHomeService";
import ExperienceList from "./ExperienceList";
import Loader from "@/components/Loader";

const Home = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const userExperienceData = useSelector((state) => state.ExperinceProduct.products);
  const tabs = ["All", "Popular", "Recommeneded", "Mostbooked", "Recent"];

  const fetchUserExperience = async (tab) => {
    const query = tab === "All" ? "" : tab;
    setLoading(true);
    try {
      const response = await userExperienceApi(query);
      if (response?.isSuccess) {
        dispatch(setProducts(response));
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserExperience(activeTab);
  }, [activeTab]);

  return (
    <>
      {loading && <Loader />}
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
            <ExperienceList key={product._id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
