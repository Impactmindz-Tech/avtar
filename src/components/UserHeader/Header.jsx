import { useEffect, useState } from "react";
import Images from "@/constant/Images";
import { useNavigate } from "react-router-dom";
import { getLocalStorage, removeLocalStorage, setLocalStorage } from "@/utills/LocalStorageUtills";
import HeaderNavigation from "../HeaderNavigation";
import { switchProfile } from "@/utills/service/switchRole/RoleSwitch";
import toast from "react-hot-toast";
import Loader from "../Loader";
import { getAllcountryApi } from "@/utills/service/userSideService/userService/UserHomeService";
import { initClient, handleAuthClick } from "../../meetConfig/googlemeet";

function Header() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [countrys, setCountrys] = useState([]);
  const [role, setRole] = useState(getLocalStorage("user") ? getLocalStorage("user").Activeprofile : null);
  const [selectedCountry, setSelectedCountry] = useState(getLocalStorage("selectedCountry") || "");

  useEffect(() => {
    if (role === "user") {
      navigate("/user/dashboard");
    } else if (role === "avatar") {
      navigate("/avatar/dashboard");
    }
  }, [role]);

  const roleSwitch = async () => {
    const newRole = role === "user" ? "avatar" : "user";
    try {
      const response = await switchProfile(newRole);
      if (response?.isSuccess) {
        removeLocalStorage("user");
        setLocalStorage("user", response?.data);
        setRole(newRole);
        toast.success(response?.message);
        console.log(response);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const getAllcountry = async () => {
    try {
      const response = await getAllcountryApi();
      if (response?.isSuccess) {
        setCountrys(response?.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllcountry();
    initClient(updateSignInStatus);
  }, []);

  const handleCountryChange = (e) => {
    const selected = e.target.value;
    setSelectedCountry(selected);
    setLocalStorage("selectedCountry", selected);
  };

  const updateSignInStatus = (isSignedIn) => {
    // Update UI based on sign-in status
    console.log('Sign-in status:', isSignedIn);
  };

  const handlelive = () => {
    handleAuthClick();
  };

  return (
    <>
      {loading && <Loader />}
      <header className="flex justify-between items-center p-3">
        <select value={selectedCountry} onChange={handleCountryChange}>
          {countrys?.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>
        <div className="brand">
          <img src={Images.AvatarWalk} alt="AvatarWalk" />
        </div>
        <div className="cursor-pointer flex gap-4 items-center">
          <button className="bg-[#ff5454] flex-1 py-[7px] text-white rounded-lg px-4 sm:hidden" onClick={roleSwitch}>
            {role === "user" ? "switch avatar" : "switch user"}
          </button>
          <button className="bg-[#ff5454] py-[7px] text-white rounded-lg px-4 sm:hidden" onClick={handlelive}>
            Live
          </button>
          <HeaderNavigation />
        </div>
      </header>
    </>
  );
}

export default Header;
