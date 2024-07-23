import AvatarProfileCard from "@/components/Cards/ProfileCard/AvatarProfileCard";
import HeaderBack from "@/components/HeaderBack";
import ReportProfile from "@/components/Modal/ReportProfile";
import AvatarReviewCardSwiper from "@/components/Swiper/AvatarProfileTour/AvatarReviewCardSwiper";
import UserAvatarTourCardSwiper from "@/components/Swiper/AvatarProfileTour/UserAvatarTourCardSwiper";
import Images from "@/constant/Images";
import { useState } from "react";

function AvatarProfile() {
  const [multipleAddressModalState, setMultipleAddressModalState] = useState(false);
  return (
    <div className="container">
      <HeaderBack text={"Avatar Profile"} link={""} />

      <AvatarProfileCard />
      <div className="tour">
        <div className="flex justify-between items-center">
          <h1 className="text-grey-900 sm:text-sm">Jane Copper Tours</h1>
          <h1 className="text-grey-800 underline underline-offset-4 cursor-pointer sm:text-sm">Show All</h1>
        </div>
        <div className="my-6">
          <UserAvatarTourCardSwiper />
        </div>

        <AvatarReviewCardSwiper />

        <div className="BoxShadow border-grey-800 cursor-pointer mb-5" onClick={() => setMultipleAddressModalState(true)}>
          <div className="flex justify-between items-center py-5  px-3">
            <div className="flex items-center gap-2 font-bold text-xl">
              <div className="">
                <img src={Images.report} alt="report icon" />
              </div>
              <div className="text sm:text-sm">Report this Listing</div>
            </div>
            <div className="text-grey-800 p-2 cursor-pointer border border-grey-800 rounded-full">
              <img src={Images.arrowRight} alt="arrowRight" />
            </div>
          </div>
        </div>
      </div>

      <ReportProfile multipleAddressModalState={multipleAddressModalState} setMultipleAddressModalState={setMultipleAddressModalState} />
    </div>
  );
}

export default AvatarProfile;
