import Images from "@/constant/Images";
import UserLocationChange from "../ui/UserLocationChange";
import { useNavigate } from "react-router-dom";
import { getLocalStorage } from "@/utills/LocalStorageUtills";
import HeaderNavigation from "../HeaderNavigation";

function Header() {
  return (
    <header className="flex justify-between items-center p-3">
      <UserLocationChange />
      <div className="brand ">
        <img src={Images.AvatarWalk} alt="AvatarWalk" />
      </div>

      <div className="cursor-pointer flex gap-4 items-center">
        <button className="bg-[#ff5454] py-[8px] text-white rounded-lg px-4">switch avtar</button>
        <img src={Images.liveBtn} alt="liveBtn" />
        <HeaderNavigation />
      </div>
    </header>
  );
}

export default Header;
