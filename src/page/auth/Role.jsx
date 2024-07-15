import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import Images from "@/constant/Images";
import { Link } from "react-router-dom";
import { userRoleApi } from "@/utills/service/authService";
import { getLocalStorage } from "@/utills/LocalStorageUtills";

const Role = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState({
    user: true,
    avatar: false,
  });

  const changeSelectedState = (name) => {
    if (name == "user") {
      setRole({ avatar: false, user: true });
    } else {
      setRole({ avatar: true, user: false });
    }
  };

  const setRoles = async () => {
    const id = getLocalStorage("user_id");
    const data = {
      role: role.user ? "user" : "avatar",
    };
    try {
      const response = await userRoleApi(id ,data);
      console.log(response);
      if (response?.isSuccess) {
        navigate("/auth/address")
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="max-w-[50%] mx-auto">
        <p className="text-grey-800">Please Choose User Category :</p>
        <div className="flex flex-col gap-5 pt-5">
          <div className={`${role.user ? "bg-primaryColor-900" : "border border-[#ccc]"} flex items-center gap-2  p-5 rounded-3xl relative`} onClick={() => changeSelectedState("user")}>
            <img className="w-10" src={Images.user_icon} alt="" />
            <span className={`${role.user ? "text-white" : "text-primaryColor-900"}`}>As a User</span>

            {role.user && (
              <div className="tick bg-[#757575] rounded-full p-1 absolute right-5">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            )}
          </div>

          <div className={`${role.avatar ? "bg-primaryColor-900" : "border border-[#ccc]"} flex items-center gap-2  p-5 rounded-3xl relative`} onClick={() => changeSelectedState("avatar")}>
            <img className="w-10 h-10" src={Images.avtar_icon} alt="" />
            <span className={`${role.avatar ? "text-white" : "text-primaryColor-900"}`}>As a Avatar</span>
            {role.avatar && (
              <div className="tick bg-[#757575] rounded-full p-1 absolute right-5">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            )}
          </div>
          <div onClick={setRoles} className="cursor-pointer w-full bg-primaryColor-900 p-4 text-center text-white mt-8 rounded-xl">
            <button>Next</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Role;
