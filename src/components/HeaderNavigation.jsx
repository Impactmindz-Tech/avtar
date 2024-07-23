import Images from "@/constant/Images";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Link, useNavigate } from "react-router-dom";
import {  useEffect, useState } from "react";
import { getLocalStorage } from "@/utills/LocalStorageUtills";
import { removeLocalStorage, setLocalStorage } from "@/utills/LocalStorageUtills";
import toast from "react-hot-toast";
import Loader from "./Loader";
import { switchProfile } from "@/utills/service/switchRole/RoleSwitch";

const HeaderNavigation = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [role, setRole] = useState(getLocalStorage("user") ? getLocalStorage("user").Activeprofile : null);
  const handleLogout = () => {
    localStorage.clear();
    navigate("/auth/login");
  };
  const roleSwitch = async () => {
    const newRole = role === "user" ? "avatar" : "user";
    console.log(`Switching from ${role} to ${newRole}`);
    try {
      const response = await switchProfile(newRole);
      if (response?.isSuccess) {
        removeLocalStorage("user");
        setLocalStorage("user", response?.data);
        setRole(newRole);
        console.log(`Role switched to ${newRole}`);
        toast.success(response?.message);
        console.log(response);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (role === "user") {
      navigate("/user/dashboard");
    } else if (role === "avatar") {
      navigate("/avatar/dashboard");
    }
  }, [role, navigate]);

  return (
    <>
      {loading && <Loader />}

      <Sheet>
        <SheetTrigger asChild>
          <img className="w-8 sm:w-6 cursor-pointer" src={Images.hamburger_img} alt="" />
        </SheetTrigger>

        {role === "user" ? (
          <SheetContent side={"left"}>
            <SheetTitle as="h2" className="sr-only">
              Navigation Menu
            </SheetTitle>
            <div className="pt-14 pb-4 px-20 sm:px-2">
              <div className="my-2">
                <Link to={"/user/dashboard"}>
                  <button className="py-3 px-10 w-[200px] bg-[#2D2D2D] text-white">Home</button>
                </Link>
              </div>
              <div className="my-2">
                <button className="py-3 px-10 w-[200px] bg-[#2D2D2D] text-white">Explore</button>
              </div>
              <div className="my-2">
                <Link to={"/user/experience"}>
                  <button className="py-3 px-10 w-[200px] bg-[#2D2D2D] text-white">Experience</button>
                </Link>
              </div>
              <div className="">
                <Link to={"/user/profile"}>
                  <button className="py-3 px-10 w-[200px] bg-[#2D2D2D] text-white">Profile</button>
                </Link>
              </div>
              <div className="my-2 ">
                <Link to={"/user/offers"}>
                  <button className="py-3 px-10 w-[200px] bg-[#2D2D2D] text-white">Offer</button>
                </Link>
              </div>
              <div className="my-2 hidden sm:block">
                <Link to={"/avatar/dashboard"}>
                  <button className="py-3 px-10 w-[200px] bg-[#2D2D2D] text-white">
                    <button className="flex-1   text-white  " onClick={roleSwitch}>
                      {role === "user" ? "switch avatar" : "switch user"}
                    </button>
                  </button>
                </Link>
              </div>
              <div className="my-2 hidden sm:block">
                <Link to={"/user/offers"}>
                  <button className="py-3 px-10 w-[200px] bg-[#2D2D2D] text-white">Live Stream</button>
                </Link>
              </div>
              <div className="my-2">
                <Link to={"/user/chat"}>
                  <button className="py-3 px-10 w-[200px] bg-[#2D2D2D] text-white">Chats</button>
                </Link>
              </div>
              <div className="my-2" onClick={handleLogout}>
                <button className="py-3 px-10 w-[200px] bg-[#ff5454]">logOut</button>
              </div>
            </div>
          </SheetContent>
        ) : (
          <SheetContent side={"left"}>
            <SheetTitle as="h2" className="sr-only">
              Navigation Menu
            </SheetTitle>
            <div className="pt-14 pb-4 px-20 sm:px-0">
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
              <div className="my-2 hidden sm:block">
                <Link to={"/user/offers"}>
                  <button className="py-3 px-10 w-[200px] bg-[#2D2D2D] text-white">
                    <button className="flex-1   text-white  " onClick={roleSwitch}>
                      {role === "user" ? "Switch avatar" : "Switch user"}
                    </button>
                  </button>
                </Link>
              </div>
              <div className="my-2 hidden sm:block">
                <Link to={"/user/offers"}>
                  <button className="py-3 px-10 w-[200px] bg-[#2D2D2D] text-white">Live Stream</button>
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
        )}
      </Sheet>
    </>
  );
};

export default HeaderNavigation;
