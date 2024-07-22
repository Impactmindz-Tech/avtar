import { useEffect, useState } from "react";
import Images from "@/constant/Images";
import { useLocation, useNavigate } from "react-router-dom";
import { getLocalStorage, removeLocalStorage, setLocalStorage } from "@/utills/LocalStorageUtills";
import HeaderNavigation from "../../HeaderNavigation";
import { switchProfile } from "@/utills/service/switchRole/RoleSwitch";
import toast from "react-hot-toast";
import Loader from "../../Loader";
import { getAllcountryApi } from "@/utills/service/userSideService/userService/UserHomeService";
import HeaderNavigationAvatar from "@/components/HeaderNavigationAvatar";
import HeaderBack from "@/components/HeaderBack";

function AvatarHeader() {
  const location = useLocation();
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
  }, [role, navigate]);

  // const roleSwitch = async () => {
  //   setLoading(true);
  //   const newRole = role === "user" ? "avatar" : "user";
  //   try {
  //     const response = await switchProfile(newRole);
  //     if (response?.isSuccess) {
  //       removeLocalStorage("user");
  //       setLocalStorage("user", response?.data);
  //       setRole(newRole);
  //       toast.success(response?.message);
  //       console.log(response);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // const getAllcountry = async () => {
  //   try {
  //     const response = await getAllcountryApi();
  //     if (response?.isSuccess) {
  //       setCountrys(response?.data);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   getAllcountry();
  // }, []);

  const handleCountryChange = (e) => {
    const selected = e.target.value;
    setSelectedCountry(selected);
    setLocalStorage("selectedCountry", selected);
  };

  return (
    <>
      {/* {loading && <Loader />} */}
      {(location.pathname == "/avatar/offers"||location.pathname == "/avatar/instant-cash"||location.pathname == "/avatar/add-new-experience"||location.pathname == "/avatar/add-experience"||location.pathname == "/avatar/chatwithuser"||location.pathname == "/avatar/bank"||location.pathname == "/avatar/stripe"||location.pathname == "/avatar/account-info") ? <>
        {(location.pathname == "/avatar/offers")&&<HeaderBack link={"/avatar/experience"} text={"Offers"}/>}
      </> : (
        <header className="flex justify-between items-center p-3">
          {location.pathname !== "/avatar/experience" && (
            <select>
              <option value="California">California</option>
              {/* {countrys?.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))} */}
            </select>
          )}

          <div className="brand">
            <img src={Images.AvatarWalk} alt="AvatarWalk" />
          </div>
          <div className="cursor-pointer flex gap-4 items-center">
            <HeaderNavigationAvatar />
          </div>
        </header>
      )}
    </>
  );
}

export default AvatarHeader;
