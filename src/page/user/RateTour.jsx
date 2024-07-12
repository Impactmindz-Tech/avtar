import BlackBottomButton from "@/components/Button/BlackBottomButton";
import RateTourRating from "@/components/Rating/RateTourRating";
import HeaderWithSkipBtn from "@/components/UserHeader/HeaderWithSkipBtn";
import { useState } from "react";
function RateTour() {
  const [tipMoney, setTipMoney] = useState('');
  const tipCalculate = (price) => {
    setTipMoney(price);
  };
  return (
    <div className="container">
      <HeaderWithSkipBtn link="/user/experience" text={"Tour Rating"} skipLink={"/"} />
      <div className=" m-auto  relative ">
        <h1 className="text-primaryColor-900">Review the Experience</h1>

        <div className="starRate">
          <RateTourRating />
        </div>

        <div className="my-3">
          <textarea name="reason" placeholder="Type reason" rows={"9"} className="bg-boxFill-900 w-full outline-0 p-3 resize-none rounded-md"></textarea>
        </div>

        <p className="my-2">Tip for the Avatar($)</p>
        <div className="btn mb-10 ">
          <button className={`rateTourBtn ${tipMoney == "10" && "rateTourBtnActive"}`} onClick={() => tipCalculate(10)}>
            $10
          </button>

          <button className={`rateTourBtn ${tipMoney == "15" && "rateTourBtnActive"}`} onClick={() => tipCalculate(15)}>
            $15
          </button>

          <button className={`rateTourBtn ${tipMoney == "20" && "rateTourBtnActive"}`} onClick={() => tipCalculate(20)}>
            $20
          </button>

          <button className={`rateTourBtn ${tipMoney == "25" && "rateTourBtnActive"}`} onClick={() => tipCalculate(25)}>
            $25
          </button>

          <input type="text" className="inputCenter" placeholder="Enter amount" value={tipMoney} onChange={(e) => setTipMoney(e.target.value)} />

          <BlackBottomButton link={"/user/tip"} text={"Add Review"} />
        </div>
      </div>
    </div>
  );
}

export default RateTour;
