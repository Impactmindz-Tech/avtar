import HeaderBack from "@/components/HeaderBack";
import { formatTime } from "@/constant/date-time-format/DateTimeFormat";
import Images from "@/constant/Images";
import { chatServiceApi, getcChatApi } from "@/utills/service/userSideService/ChatService";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ChatUser() {
  const params = useParams();
  const [chatValue, setChatValue] = useState();
  const [chat, setChat] = useState([]);
  const chatService = async () => {
    let body = {
      message: chatValue,
    };
    try {
      const response = await chatServiceApi(params?.id, body);
      if(response?.isSuccess){
        setChatValue('')
        getcChat()
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getcChat = async () => {
    let body = {
      message: chatValue,
    };
    try {
      const response = await getcChatApi(params?.id, body);
      if (response?.isSuccess) {
        setChat(response);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getcChat();
  }, []);

  return (
    <div className="container">
      <HeaderBack link="/avatar/chat" text={"Melia Jhon"} />
      <div className=" m-auto h-[90vh]  relative">
        <div className="w-full h-[80vh] overflow-y-scroll  py-2 flex flex-col">
          <div className="child h-full">
            <div className="rounded-lg bg-boxFill-900 text-grey-800 flex justify-center p-2 sm:px-10 w-[15%] m-auto">Today</div>
          </div>
          <div className="w-[50%] ml-auto ">
            <div className="text-right mt-3">
              {chat?.data?.receivedMessages?.map((receiver) => {
                return (
                  <>
                    <div className="bg-grey-900 leading-7 break-words p-3 rounded-md text-white borderRadiusLeftChatRight font-medium">{receiver?.message}</div><br />
                    <p className="text-grey-800 mt-3 ">{formatTime(receiver?.timestamp)}</p>
                    <br />
                  </>
                );
              })}
            </div>
          </div>
          {/* left */}
          <div className="w-[50%] clear-both">
            <div className=" mt-3">
              {chat?.data?.sentMessages?.map((sender) => {
                return (
                  <>
                    <div className="bg-borderFill-800 p-3 rounded-md text-grey-900 borderRadiusLeftChatLeft font-medium">{sender?.message}</div>
                    <p className="float-left text-grey-800">{formatTime(sender?.timestamp)}</p>
                    <br />
                  </>
                );
              })}
            </div>
          </div>
        </div>

        {/* bottom chat */}
        <div className="absolute bottom-0 left-0  w-full h-20 gap-2 flex justify-between items-center">
          <div className="relative flex-1">
            <div className="absolute right-3 top-2">
              <img src={Images.microphone} alt="microphone" className="cursor-pointer w-7" />
            </div>
            <input type="text" onChange={(e) => setChatValue(e.target.value)} placeholder="Send message..." className="p-3 px-5 w-full bg-boxFill-900 rounded-md outline-none" />
          </div>

          <div onClick={chatService} className="bg-backgroundFill-900 rounded-md cursor-pointer p-3 sm:w-[15%] w-[8%] flex justify-center items-center">
            <img src={Images.sendIcon} alt="send icon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatUser;
