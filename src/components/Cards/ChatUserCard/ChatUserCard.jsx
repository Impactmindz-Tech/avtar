import Images from "@/constant/Images";
import { getavatarChatApi } from "@/utills/service/userSideService/ChatService";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const chatGroup = [
  {
    id: "1",
    src: Images.user3,
    name: "Christian Buehner",
    Thank: "Thank you mate!",
    time: "02:11",
  },
  {
    id: "2",
    src: Images.user3,
    name: "Christian Buehner",
    Thank: "Thank you mate!",
    time: "02:11",
  },
  {
    id: "3",
    src: Images.user3,
    name: "Christian Buehner",
    Thank: "Thank you mate!",
    time: "02:11",
  },
  {
    id: "4",
    src: Images.user3,
    name: "Christian Buehner",
    Thank: "Thank you mate!",
    time: "02:11",
  },
];
const ChatUserCard = () => {
  const [avtar, setAvtar] = useState([]);
  const getavatarChat = async () => {
    try {
      const responce = await getavatarChatApi();
      if(responce?.isSuccess){
        setAvtar(responce)
        console.log(responce)
      }
    } catch (error) {
      console.log(error);
    }
  };

  console.log(avtar)
  useEffect(()=>{
    getavatarChat()
  },[])
  return (
    <>
      {avtar?.data?.map((item, index) => {
        return (
          <>
            <Link to={"/user/ChatUser/" + item?.id}>
              <div key={index} className="flex gap-2 items-center w-full mb-5 cursor-pointer">
                <div className="image">
                  <img className="w-[56px] h-[56px] rounded-full" src={item.profile} alt="user3" />
                </div>
                <div className="flex-1 relative ">
                  <h3 className="font-medium text-primaryColor-900">{item?.Name}</h3>
                  <p className="text-primaryColor-900">{item?.Thank}</p>
                </div>
                <div className="flex items-center text-grey-800">{item?.time}</div>
              </div>
            </Link>
          </>
        );
      })}
    </>
  );
};

export default ChatUserCard;
