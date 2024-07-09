import Images from "@/constant/Images";
import UserLocationChange from "../ui/UserLocationChange";

function Header() {
  return (
    <header className="flex justify-between items-center p-3">
      <UserLocationChange />

      <div className="brand ">
        <img src={Images.AvatarWalk} alt="AvatarWalk" />
      </div>

      <div className="cursor-pointer">
        <img src={Images.liveBtn} alt="liveBtn" />
      </div>
    </header>
  );
}

export default Header;
