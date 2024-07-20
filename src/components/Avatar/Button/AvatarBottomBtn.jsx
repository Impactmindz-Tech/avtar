import { Link } from "react-router-dom";

const AvatarBottomBtn = ({text,link}) => {
  return (
   <Link to={link}> <div className="absolute bottom-1 left-0  w-full ">
      <div className="w-full flex justify-center">
        <button className="font-bold lg:w-[90%] p-3 bg-backgroundFill-900 rounded-md text-white w-[88%]">{text}</button>
      </div>
    </div></Link>
  );
};

export default AvatarBottomBtn;
