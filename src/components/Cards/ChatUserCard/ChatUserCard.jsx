import Images from "@/constant/Images";
import { Link } from "react-router-dom";

const ChatUserCard = () => {
  return (
    <Link to="/avatar/chatwithuser">
      <div className="flex gap-2 items-center w-full mb-5 cursor-pointer">
        <div className="image">
          <img src={Images.user3} alt="user3" />
        </div>
        <div className="flex-1 relative ">
          <h3 className="font-medium text-primaryColor-900">Christian Buehner</h3>
          <p className="text-primaryColor-900">Thank you mate!</p>
        </div>
        <div className="flex items-center text-grey-800">02:11</div>
      </div>
    </Link>
  );
};

export default ChatUserCard;
