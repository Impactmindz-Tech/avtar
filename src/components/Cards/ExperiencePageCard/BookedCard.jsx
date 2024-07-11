import Images from "@/constant/Images";
import { Link } from "react-router-dom";

const BookedCard=()=> {
  return (
    <div className="p-4">
      <div className=" BoxShadowLessRounded pb-2">
        <div className="flex items-center gap-4 p-4">
          <div className="">
            <img src={Images.cardImageRounded} alt="cardImageRounded" className="w-30 h-[100px] rounded-lg" />
          </div>
          <div className=" w-[70%]">
            <div className="flex justify-between">
              <div className="text-[#2AA174] bg-[#eaf6f2] p-1 px-6 rounded-full text-sm font-medium">Booked</div>
              <div className="edit cursor-pointer">
               <Link to="/user/update-experience">

                <img src={Images.edit} alt="edit" />
               </Link>
              </div>
            </div>
            <h2 className="text-lg font-bold pt-3">Shikara Hotel, India</h2>
            <div className="description flex gap-2 items-center">
              <p className="text-sm text-black ">Mon, Mar 21, 2024 </p>
              <li className="text-grey-800">
                {" "}
                <span className="text-black">8:00 - 8:30 PM</span>
              </li>
            </div>
          </div>
        </div>
        <div className="borderTopBottom flex justify-between m-auto w-[94%] py-2 text-grey-800">
          <div className="author  ">
            <b>Avatar</b>: Melia Jhon
          </div>
          <div className="font-bold">$85.25</div>
        </div>

        {/* two button */}
        <div className="my-3 w-[94%]  m-auto">
         <Link to="/user/chat-with-avatar"><button className="border border-primaryColor-900 text-black font-semibold py-2 lg:w-[80%] rounded w-full">Chat with Avatar</button></Link> 

          {/* clock timer btn */}
          <button className="bg-backgroundFill-900 text-white flex justify-center items-center py-3 gap-2 rounded w-full mt-3 lg:w-[80%]">
            <div className="img">
              <img src={Images.timer} alt="timer" />
            </div>
            <div className="text">03:43</div>
          </button>

          {/* start cancel btn */}
          <div className=" flex justify-center items-center py-3 gap-2 rounded w-full mt-3 lg:w-[80%]">
            <button className="bg-backgroundFill-900 text-white flex justify-center items-center py-3 gap-2 rounded w-[50%] ">Cancel</button>
            <button className="bg-backgroundFill-900 text-white flex justify-center items-center py-3 gap-2 rounded w-[50%]">Start</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookedCard;
