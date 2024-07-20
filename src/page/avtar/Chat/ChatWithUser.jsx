import HeaderBack from "@/components/HeaderBack";
import Images from "@/constant/Images";

function ChatWithUser() {
  return (
    <div className="container">
      <HeaderBack link="/avatar/chat" text={"Melia Jhon"} />
      <div className=" m-auto h-[90vh] relative">
        {/* chat container */}
        <div className="w-full h-[80vh]  py-2 flex flex-col justify-end">
          <div className="child">
            <div className="rounded-lg bg-boxFill-900 text-grey-800 flex justify-center p-2 sm:px-10 w-[15%] m-auto">Today</div>
          </div>
          {/* right  */}
          <div className="w-full clear-both">
            <div className="float-right mt-3">
              <div className="bg-grey-900 p-3 rounded-md text-white borderRadiusLeftChatRight font-medium">Hi, good morning melia...</div>
              <p className="float-right text-grey-800">02:20</p>
            </div>{" "}
          </div>
          {/* left */}
          <div className="w-full clear-both">
            <div className="float-left mt-3">
              <div className="bg-borderFill-800 p-3 rounded-md text-grey-900 borderRadiusLeftChatLeft font-medium">Hi, good morning rosan...</div>
              <p className="float-left text-grey-800">02:25</p>
            </div>
          </div>
        </div>

        {/* bottom chat */}
        <div className="absolute bottom-0 left-0  w-full h-20 gap-2 flex justify-between items-center">
          <div className="relative flex-1">
            <div className="absolute right-3 top-2">
              <img src={Images.microphone} alt="microphone" className="cursor-pointer w-7" />
            </div>
            <input type="text" placeholder="Send message..." className="p-3 px-5 w-full bg-boxFill-900 rounded-md outline-none" />
          </div>

          <div className="bg-backgroundFill-900 rounded-md cursor-pointer p-3 sm:w-[15%] w-[8%] flex justify-center items-center">
            <img src={Images.sendIcon} alt="send icon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatWithUser;