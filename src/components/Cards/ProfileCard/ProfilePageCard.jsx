import Images from "@/constant/Images";

const ProfilePageCard = ({ active, icon, text }) => {
  return (
    <div className={`profileShadow flex mb-2 gap-4 rounded-md  justify-between items-center border  p-4 cursor-pointer ${active ? "text-white bg-backgroundFill-900" : "text-backgroundFill-900 "}`}>
      <div className="">
        <img src={icon} alt={icon} />
      </div>
      <div className="flex-1 font-medium ">{text}</div>
      <div className="dropDOwn">{active ? <img src={Images.rightArrowWhite} alt="rightArrowWhite" /> : <img src={Images.rightArrowGray} alt="rightArrowGray" />}</div>
    </div>
  );
};

export default ProfilePageCard;
