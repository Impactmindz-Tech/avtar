import { useEffect, useState } from "react";
import Images from "@/constant/Images";
import UserLocationChange from "../ui/UserLocationChange";
import { useNavigate } from "react-router-dom";
import { getLocalStorage, removeLocalStorage, setLocalStorage } from "@/utills/LocalStorageUtills";
import HeaderNavigation from "../HeaderNavigation";
import { switchProfile } from "@/utills/service/switchRole/RoleSwitch";
import toast from "react-hot-toast";

function Header() {
  const navigate = useNavigate();
  const [role, setRole] = useState(getLocalStorage("user") ? getLocalStorage("user").Activeprofile : null);

  useEffect(() => {
    if (role === "user") {
      navigate("/user/dashboard");
    } else if (role === "avatar") {
      navigate("/avatar/dashboard");
    }
  }, [role, navigate]);

  const roleSwitch = async () => {
    const newRole = role === "user" ? "avatar" : "user";
    try {
      const response = await switchProfile(newRole);
      if (response?.isSuccess) {
        removeLocalStorage("user");
        setLocalStorage("user", response?.data);
        setRole(newRole);
        toast.success(response?.message)
        console.log(response);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <header className="flex justify-between items-center p-3">
      <UserLocationChange />
      <div className="brand ">
        <img src={Images.AvatarWalk} alt="AvatarWalk" />
      </div>

      <div className="cursor-pointer flex gap-4 items-center">
        <button className="bg-[#ff5454] py-[8px] text-white rounded-lg px-4" onClick={roleSwitch}>
          {role == "user" ? "switch avatar " : "switch user"}
        </button>
        <img src={Images.liveBtn} alt="liveBtn" />
        <HeaderNavigation />
      </div>
    </header>
  );
}

export default Header;
