import { formatDate, formatTime } from "@/constant/date-time-format/DateTimeFormat";
import Images from "@/constant/Images";
import { Link } from "react-router-dom";

const BookedCard = ({ item }) => {
  return (
    <div className="p-4 sm:p-0 sm:mt-2">
      <div className="BoxShadowLessRounded pb-2">
        <div className="flex items-center gap-4 p-4 sm:flex-wrap">
          <div className="sm:w-[100%] ">
            <img src={item?.experienceImage} alt="cardImageRounded" className="w-30 h-[100px] sm:w-full object-cover sm:h-[200px] rounded-lg" />
          </div>
          <div className="w-[80%] sm:w-[100%]">
            <div className="flex justify-between">
              <div className="text-[#2AA174] bg-[#eaf6f2] p-1 px-6 sm:px-4 sm:p-1 rounded-full text-sm font-medium">{item?.status}</div>
              <div className="edit cursor-pointer sm:flex sm:items-center">
                <Link to="/user/update-experience">
                  <img src={Images.edit} alt="edit" className="sm:w-6 sm:h-4" />
                </Link>
              </div>
            </div>
            <h2 className="text-lg font-bold pt-3 sm:text-sm">Shikara Hotel, {item?.country}</h2>
            <div className="description flex gap-2 items-center sm:flex-wrap">
              <p className="text-sm text-black">{formatDate(item?.bookingDate)}</p>
              <li className="text-grey-800">
                <span className="text-black sm:text-sm">
                  {formatTime(item?.bookingTime)} - {formatTime(item?.endTime)}
                </span>
              </li>
            </div>
          </div>
        </div>
        <div className="borderTopBottom flex justify-between m-auto w-[94%] py-2 text-grey-800">
          <div className="author  ">
            <b>Avatar</b>: {item?.avatarName}
          </div>
          <div className="font-bold">${item?.totalPrice}</div>
        </div>

        {/* two button */}
        <div className="my-3 w-[94%] sm:w-full m-auto">
          <Link to="/user/chat-with-avatar">
            <button className="border border-primaryColor-900 text-black font-semibold py-2 lg:w-[97%] lg:m-1 rounded w-full ">Chat with Avatar</button>
          </Link>

          {/* clock timer btn */}
          <button className="bg-backgroundFill-900 text-white flex justify-center items-center py-3 gap-2 rounded w-full mt-3  lg:w-[97%] lg:m-1">
            <div className="img">
              <img src={Images.timer} alt="timer" />
            </div>
            <div className="text">03:43</div>
          </button>

          {/* start cancel btn */}
          <div className=" flex justify-center items-center py-3 gap-2 rounded w-full mt-3  lg:w-[97%] lg:m-1 ">
            <button className="bg-backgroundFill-900 text-white flex justify-center items-center py-3 gap-2 rounded w-[50%] ">Cancel</button>
            <button className="bg-backgroundFill-900 text-white flex justify-center items-center py-3 gap-2 rounded w-[50%]">Start</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookedCard;
