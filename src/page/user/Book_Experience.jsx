import HeaderBack from "@/components/HeaderBack";
import BookExperienceSwiper from "@/components/Swiper/Book Experience/BookExperienceSwiper";
import Images from "@/constant/Images";

function Book_Experience() {
  return (
    <div className="container">
      {/* header */}
      <HeaderBack link="" text="Book Experience" />
      <div className="max-w-lg m-auto">
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
            <div className="flex flex-col absolute top-[52px] left-[110px]">
            <div className="shape">
            Exact location provided after booking.
            </div>
            <div className="triangleDown"></div>
            </div>
            <div className="centerImageIcon">
                <img src={Images.homeIcon} alt="home icon" className="cursor-pointer"/>
            </div>
                <img src={Images.map} alt="map" className="w-full" />
            </div>
        </div>
      </div>
    </div>
  );
}

export default Book_Experience;
