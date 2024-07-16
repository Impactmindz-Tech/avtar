import Images from "@/constant/Images";
import UserLocationChange from "../ui/UserLocationChange";
import { useNavigate } from "react-router-dom";
import { getLocalStorage } from "@/utills/LocalStorageUtills";

function Header() {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear();
    navigate("/auth/login");
  };

  const activateProfile = getLocalStorage("user");
  console.log(activateProfile.Activeprofile)
  return (
    <header className="flex justify-between items-center p-3">
      <UserLocationChange />

      <div className="brand ">
        <img src={Images.AvatarWalk} alt="AvatarWalk" />
      </div>

      <div className="cursor-pointer flex gap-4 items-center">
        <img src={Images.liveBtn} alt="liveBtn" />
        <div onClick={handleLogout}>logOut</div>
      </div>
    </header>
  );
}

export default Header;
