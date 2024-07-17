import ReviewCard from "@/components/Cards/ReviewCard/ReviewCard";
import HeaderBack from "@/components/HeaderBack";
import SwiperSlider from "@/components/Swiper/UserDashboardCardSwiper/SwiperSlider";
import Images from "@/constant/Images";
import { setProductList } from "@/store/slice/experinceS/ExperinceSlice";
import { userExperienceListApi } from "@/utills/service/userService/UserHomeService";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

function Book_Experience() {
  const params = useParams();
  const dispatch = useDispatch();
  const experinceList = useSelector((state) => state?.ExperinceProduct.products);
  console.log(experinceList);
  const userExperience = async () => {
    try {
      const responce = await userExperienceListApi(params?.id);
      if (responce?.isSuccess) {
        dispatch(setProductList(responce));
      }
    } catch (error) {
      console.log(error, "experince list error");
    }
  };

  useEffect(() => {
    userExperience();
  }, []);
  return (
    <div className="container">
      <HeaderBack link="/" text="Book Experience" />

      {experinceList?.isSuccess && experinceList?.data?.map((item, index) => {
        return (
          <div className="my-4" key={index}>
            {/* swiper */}
            <div className=" rounded overflow-hidden shadow-lg m-auto">
              <SwiperSlider item={item?.images} />
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
                    <img src={item?.avatarImage} alt="star" />
                  </div>
                  <div className="font-semibold">4.5</div>
                </div>
              </div>
              <p className="text-grey-800">{item?.Country}</p>
              <p className="text-grey-800">
                <b className="text-black">${item?.AmountsperMinute} </b>per minute
              </p>
            </div>
            {/* user */}
            <div className="flex gap-2 py-5 items-center borderTopBottom my-5">
              <div className="userImg">
                <img src={Images.user2} alt="user" />
              </div>
              <div className="flex flex-col">
                <h3 className="font-medium">{item?.avatarName}</h3>
                <p className="text-grey-800">{item?.about}</p>
              </div>
            </div>

            {/* map */}
            <div className="map">
              <h1 className="font-bold">Your Avatar Tour will be Here..</h1>
              <div className="my-3 relative">
                <div className="centerImageIcon relative  w-full flex flex-col gap-2 justify-center">
                  {/* location */}
                  <div className="w-[50%] m-auto lg:w-[98%]">
                    <div className="shape text-sm text-center">Exact location provided after booking.</div>
                    <div className="flex w-full justify-center">
                      <div className="triangleDown"></div>
                    </div>
                  </div>
                  {/* images */}
                  <div className="flex justify-center">
                    <img src={Images.homeIcon} alt="home icon" className="cursor-pointer lg:w-10 lg:h-10" />
                  </div>
                </div>

                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100940.18159961997!2d-122.5200014417705!3d37.7576713147358!2m3!1f0!2
                f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a50136
                7f076adff!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2sin!4v1
                720766253960!5m2!1sen!2sin"
                  className="w-full 4xl:h-[600px] lg:h-auto"
                  loading="lazy"
                ></iframe>
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
        );
      })}
    </div>
  );
}

export default Book_Experience;
