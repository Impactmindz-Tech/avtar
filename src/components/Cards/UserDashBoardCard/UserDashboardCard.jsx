import UserDashboardCardSwiper from "@/components/Swiper/UserDashboardCardSwiper/UserDashboardCardSwiper";
import Images from "@/constant/Images";

function UserDashboardCard() {
  return (
    <div className="max-w-md rounded overflow-hidden shadow-lg">
      <UserDashboardCardSwiper />
      <div className="px-5 py-4 ">
        <div className="font-bold text-xl mb-2 relative">
          Shikara Hotel, India
          <div className="absolute -top-12 right-0 z-50">
            <img src={Images.user} alt="user" className="w-20 h-20" />
          </div>
        </div>
        <p className="text-grey-800 text-base">Georgia, US</p>
        <div className="flex gap-2 items-center justify-between">
          <p className="text-gray-700 text-base">Starts at: $5 (Per Minute)</p>
          <img src={Images.InstantLiveBtn} alt="InstantLiveBtn" className="w-30 cursor-pointer" />
        </div>
      </div>
    </div>
  );
}

export default UserDashboardCard;
