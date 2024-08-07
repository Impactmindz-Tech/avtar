import { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "@/store/slice/experinceS/ExperinceSlice";
import UserTopSearch from "@/components/UserTopSearch/UserTopSearch";
import { userExperienceApi } from "@/utills/service/userSideService/userService/UserHomeService";
import ExperienceList from "./ExperienceList";
import Loader from "@/components/Loader";
import { getLocalStorage, setLocalStorage } from "@/utills/LocalStorageUtills";
import MultipleAddressModal from "@/components/Modal/MultipleAddressModal";

const Home = () => {
  const [multipleAddressModalState, setMultipleAddressModalState] = useState(false);
  const [activeTab, setActiveTab] = useState("Popular");
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const userExperienceData = useSelector((state) => state.ExperinceProduct.products);
  const [country, setCountry] = useState(getLocalStorage("selectedCountry") || "India");
  const tabs = ["Popular", "Recommended", "Mostbooked", "Recent"];

  const fetchUserExperience = useCallback( async (tab) => {
      const payload = {
        tab: tab,
        country: country,
        search: search,
      };
      setLoading(true);
      try {
        const response = await userExperienceApi(payload);
        if (response?.isSuccess) {
          dispatch(setProducts(response));
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    },
    [country, dispatch, search]
  );

  useEffect(() => {
    fetchUserExperience(activeTab);
  }, [activeTab, fetchUserExperience]);

  // Handle localStorage updates for country
  const handleCountryUpdate = useCallback(() => {
    const storedCountry = getLocalStorage("selectedCountry");
    if (storedCountry && storedCountry !== country) {
      setCountry(storedCountry);
    }
  }, [country]);

  useEffect(() => {
    handleCountryUpdate();
    window.addEventListener("storage", handleCountryUpdate);
    return () => {
      window.removeEventListener("storage", handleCountryUpdate);
    };
  }, [handleCountryUpdate]);

  return (
    <>
      {loading && <Loader />}
      <div className="container">
        <UserTopSearch onSearch={setSearch} />
        <div className="lg:overflow-x-auto lg:overflow-y-hidden border-b">
          <div className="flex border-b">
            {tabs.map((tab) => (
              <button key={tab} className={`px-4 py-2 text-sm font-medium border-b-2 ${activeTab === tab ? "border-primaryColor-900 text-primaryColor-900 font-bold" : "border-transparent text-gray-500 hover:text-gray-700"}`} onClick={() => setActiveTab(tab)}>
                {tab}
              </button>
            ))}
          </div>
        </div>
        <div className="my-10 grid grid-cols-4 lg:grid-cols-2 sm:grid-cols-1 xl:grid-cols-2 gap-4">
          {userExperienceData?.data?.map((product) => (
            <ExperienceList key={product._id} product={product} />
          ))}
        </div>
      </div>

      <MultipleAddressModal multipleAddressModalState={multipleAddressModalState} setMultipleAddressModalState={setMultipleAddressModalState} />
    </>
  );
};

export default Home;
