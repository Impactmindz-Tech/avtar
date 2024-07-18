import SwiperSlider from "@/components/Swiper/UserDashboardCardSwiper/SwiperSlider";
import React from "react";
import { Link } from "react-router-dom";
import Images from "../Images";

const RecommendExperience = ({ product }) => {
  return (
    <Link to={`/user/book-experience/${product._id}`}>
      <div className="max-w-sm rounded overflow-hidden shadow-lg sm:max-w-full">
        <SwiperSlider item={product.images} />
        <div className="px-5 py-4 ">
          <div className="font-bold text-xl mb-2 relative xl:pt-7 lg:pt-7">
            {product.ExperienceName}
            <div className="absolute -top-12 right-0 z-50">
              <img src={product.avatarImage} alt="user" className="w-20 h-20" />
            </div>
          </div>
          <p className="text-grey-800 text-base">
            {product.State}, {product.Country}
          </p>
          <div className="flex gap-2 items-center justify-between">
            <p className="text-gray-700 text-base">Starts at: ${product.AmountsperMinute} (Per Minute)</p>
            <img src={Images.InstantLiveBtn} alt="InstantLiveBtn" className="w-30 xl:w-20 cursor-pointer" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RecommendExperience;
