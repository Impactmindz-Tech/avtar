import ReviewCard from "@/components/Cards/ReviewCard/ReviewCard";
import HeaderBack from "@/components/HeaderBack";
import BookExperienceSwiper from "@/components/Swiper/Book Experience/BookExperienceSwiper";
import Images from "@/constant/Images";
import { Link } from "react-router-dom";

function Book_Experience() {
  return (
    <div className="container">
      {/* header */}
      <HeaderBack link="/" text="Book Experience" />
      <div className="max-w-2xl m-auto">
        {/* swiper */}
        <div className=" rounded overflow-hidden shadow-lg m-auto">
          <BookExperienceSwiper />
        </div>

        {/* search bar */}
        <div className="my-4">
          <input type="search" name="" id="" placeholder="Walking tour around New York" className="input" />
        </div>
        {/* city */}
        <div>
          <div className="flex justify-between font-bold">
            <h1>United States</h1>
            <div className="flex items-center px-4 py-1 justify-center gap-2 bg-borderFill-900 rounded-full">
              <div className="border-r-2 px-1">
                <img src={Images.star} alt="star" />
              </div>
              <div className="font-semibold">4.5</div>
            </div>
          </div>
          <p className="text-grey-800">New York, NY</p>
          <p className="text-grey-800">
            <b className="text-black">$5 </b>per minute
          </p>
        </div>
        {/* user */}
        <div className="flex gap-2 py-5 items-center borderTopBottom my-5">
          <div className="userImg">
            <img src={Images.user2} alt="user" />
          </div>
          <div className="flex flex-col">
            <h3 className="font-medium">Jane Cooper</h3>
            <p className="text-grey-800">7 year experience as a avatar</p>
          </div>
        </div>

        {/* map */}
        <div className="map">
          <h1 className="font-bold">Your Avatar Tour will be Here..</h1>
          <div className="my-3 relative">
            <div className="flex flex-col absolute top-[120px] left-[186px]">
              <div className="shape">Exact location provided after booking.</div>
              <div className="triangleDown"></div>
            </div>
            <div className="centerImageIcon">
              <img src={Images.homeIcon} alt="home icon" className="cursor-pointer" />
            </div>
            <img src={Images.map} alt="map" className="w-full" />
          </div>
          <h4 className="font-bold">United States, New york</h4>
          <h5 className="font-medium my-2">About this Tour</h5>
          <p className="text-grey-800">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet.</p>
        </div>

        {/* review */}
        <div className="reviewContainer my-5">
          {/* top */}
          <div className="flex justify-between">
            <div className="flex gap-2 items-center">
              <div className="font-bold">Review (4.6)</div>
              <div className="img">
                <img src={Images.star2} alt="star 2" />
              </div>
            </div>
            <div className="font-bold text-grey-800 cursor-pointer underline">
              <Link to="/user/see-all-review">Show All</Link>
            </div>
          </div>

          <div className="">
            <ReviewCard />
          </div>
        </div>

        {/* Cancellation Policy */}
        <div className="cancel">
          <div className="cardBorder my-5">
            <div className="flex justify-between items-center py-5 border-b-2 border-borderFill-600 px-3">
              <div className="font-bold text-xl">Cancellation Policy</div>
              <div className="text-grey-800 p-2 cursor-pointer border border-borderFill-900 rounded-full">
                <img src={Images.arrowRight} alt="arrowRight" />
              </div>
            </div>
            <div className="px-4 py-4">
              <p className="text-grey-800 text-md">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
        </div>

        {/* report */}
        <Link to="/user/report">
          <div className="BoxShadow">
            <div className="flex justify-between items-center py-5  px-3">
              <div className="flex items-center gap-2 font-bold text-xl">
                <div className="">
                  <img src={Images.report} alt="report icon" />
                </div>
                <div className="text">Report this Listing</div>
              </div>
              <div className="text-grey-800 p-2 cursor-pointer border border-borderFill-900 rounded-full">
                <img src={Images.arrowRight} alt="arrowRight" />
              </div>
            </div>
          </div>
        </Link>
        {/* book btn */}
         <Link to="/user/booking">
        <div className="rounded-md my-6 p-2 cursor-pointer bg-backgroundFill-900 text-white text-center">
          <button className="py-2 font-bold">Book</button>
        </div>
         </Link>
      </div>
    </div>
  );
}

export default Book_Experience;
