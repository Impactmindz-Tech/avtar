import ProfilePageCard from "@/components/Cards/ProfileCard/ProfilePageCard";
import Images from "@/constant/Images";
import { Link } from "react-router-dom";
// import { FaRegCircleUser } from "react-icons/fa6";
function Profile() {
  return (
    <div className="container">
      {/* topSection */}
      <div className="max-w-2xl m-auto ">
        <div className="bg-black w-100 rounded-b-3xl">
          <div className="p-4">
            <img src={Images.AvatarWalkWhite} alt="AvatarWalkWhite" />
          </div>
          <div className="flex justify-between items-center gap-2 p-8">
            <div className="imageProfile">
              <img src={Images.profile} alt="profile" className="rounded-full object-cover border-[2px] border-dashed border-white" />
            </div>
            <div className="flex-1 px-5">
              <h3 className="text-white">Richardo Black</h3>
              <p className="text-primaryColor-300">richardoblack02@gmail.com</p>
              <p className="text-primaryColor-300">@richrdo1205</p>
            </div>
            <div className="editBtn">
            <Link to="/user/edit-profile">

              <img src={Images.editBtnWhite} alt="editBtnWhite" className="cursor-pointer" />
            </Link>
            </div>
          </div>
        </div>

        {/* menu */}
        <div className="my-5">
          {/* card */}

          <ProfilePageCard active={true} icon={Images.userIcon} text="Become a Avatar" />
          <ProfilePageCard active={false} icon={Images.info} text="Account Info" />
          <ProfilePageCard active={false} icon={Images.payment} text="Payment" />
          <ProfilePageCard active={false} icon={Images.currency} text="Currency" />
          <ProfilePageCard active={false} icon={Images.notification} text="Notifications" />
          <ProfilePageCard active={false} icon={Images.share} text="Share Your Profile" />
          <ProfilePageCard active={false} icon={Images.message} text="Chat with Support" />
          <ProfilePageCard active={false} icon={Images.term} text="Terms and Privacy" />

          <div className="profileShadow flex mb-2 gap-4 rounded-md  justify-between items-center border  p-4 cursor-pointer text-[#FF3544] bg-[#ffebed]">
            <div className="">
              <img src={Images.logout} alt={"logout"} />
            </div>
            <div className="flex-1 font-medium ">logout</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
