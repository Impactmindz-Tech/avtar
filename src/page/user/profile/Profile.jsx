import ProfilePageCard from "@/components/Cards/ProfileCard/ProfilePageCard";
import UserLogoutModal from "@/components/Modal/UserLogoutModal";
import Images from "@/constant/Images";
import { getLocalStorage } from "@/utills/LocalStorageUtills";
import { useState } from "react";
import { Link } from "react-router-dom";

function Profile() {
  const[userLogoutModalState,setUserLogoutModalState]=useState(false)
  const user = getLocalStorage("user") ? getLocalStorage("user") : null;
  return (
    <div className="container">
      {/* topSection */}
      <div className="m-auto ">
        <div className="bg-black w-100 rounded-b-3xl">
          <div className="p-4">
            <img src={Images.AvatarWalkWhite} alt="AvatarWalkWhite" />
          </div>
          <div className="flex justify-between items-center gap-2 p-8 sm:p-3">
            <div className="imageProfile">
              <img src={user?.profileimage} alt="profile" className="rounded-full w-[84px] h-[84px]  object-cover border-[2px] border-dashed border-white" />
              {/* <img src={Images.profile} alt="profile" className="rounded-full   object-cover border-[2px] border-dashed border-white" /> */}
            </div>
            <div className="flex-1 sm:flex-auto px-5 sm:px-2">
              <h3 className="text-white sm:text-sm">{user?.firstName}</h3>
              <p className="text-primaryColor-300 sm:text-sm">{user?.email}</p>
              <p className="text-primaryColor-300 sm:text-sm">@{user?.userName}</p>
            </div>
            <div className="editBtn">
              <Link to="/user/edit-profile">
                <img src={Images.editBtnWhite} alt="editBtnWhite" className="cursor-pointer" />
              </Link>
            </div>
          </div>
        </div>

        <div className="my-5">
          <ProfilePageCard active={true} icon={Images.userIcon} text="Become a Avatar" />
          <ProfilePageCard active={false} icon={Images.info} text="Account Info" link={"/user/account-info"}/>
          <ProfilePageCard active={false} icon={Images.payment} text="Payment" />
          <ProfilePageCard active={false} icon={Images.currency} text="Currency" />
          <ProfilePageCard active={false} icon={Images.notification} text="Notifications" />
          <ProfilePageCard active={false} icon={Images.share} text="Share Your Profile" />
          <ProfilePageCard active={false} icon={Images.message} text="Chat with Support" />
          <ProfilePageCard active={false} icon={Images.term} text="Terms and Privacy" />

          <div className="profileShadow flex mb-2 gap-4 rounded-md  justify-between items-center border  p-4 cursor-pointer text-[#FF3544] bg-[#ffebed]" onClick={()=>setUserLogoutModalState(true)}>
            <div className="">
              <img src={Images.logout} alt={"logout"} />
            </div>
            <div className="flex-1 font-medium ">logout</div>
          </div>
        </div>
      </div>

      <UserLogoutModal userLogoutModalState={userLogoutModalState} setUserLogoutModalState={setUserLogoutModalState} />
    </div>
  );
}

export default Profile;
