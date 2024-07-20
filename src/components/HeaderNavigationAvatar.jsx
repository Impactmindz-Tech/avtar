import Images from "@/constant/Images";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Link, useNavigate } from "react-router-dom";

const HeaderNavigationAvatar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear();
    navigate("/auth/login");
  };
  return (
    <Sheet>
      <SheetTrigger asChild>
        <img className="w-8 cursor-pointer" src={Images.hamburger_img} alt="" />
      </SheetTrigger>
      <SheetContent side={"left"}>
        <SheetTitle as="h2" className="sr-only">
          Navigation Menu
        </SheetTitle>
        <div className="pt-14 pb-4 px-20">
          <div className="my-2">
            <Link to={"/avatar/dashboard"}>
              <button className="py-3 px-10 w-[200px] bg-[#2D2D2D] text-white">Home</button>
            </Link>
          </div>
          <div className="my-2">
          <Link to={"/avatar/chat"}>
            <button className="py-3 px-10 w-[200px] bg-[#2D2D2D] text-white">Chat</button>
            </Link>
          </div>
          <div className="my-2">
            <Link to={"/avatar/experience"}>
              <button className="py-3 px-10 w-[200px] bg-[#2D2D2D] text-white">Experience</button>
            </Link>
          </div>
          <div className="">
            <Link to={"/avatar/profile"}>
              <button className="py-3 px-10 w-[200px] bg-[#2D2D2D] text-white">Profile</button>
            </Link>
          </div>
          {/* <div className="my-2">
            <button className="py-3 px-10 w-[200px] bg-[#2D2D2D] text-white">Offer</button>
          </div>
          <div className="my-2">
            <Link to={"/user/chat"}>
              <button className="py-3 px-10 w-[200px] bg-[#2D2D2D] text-white">Chats</button>
            </Link>
          </div> */}
          <div className="my-2" onClick={handleLogout}>
            <button className="py-3 px-10 w-[200px] bg-[#ff5454]">logOut</button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default HeaderNavigationAvatar;
