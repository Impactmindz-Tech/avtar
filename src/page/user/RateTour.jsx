import BlackBottomButton from "@/components/Button/BlackBottomButton";
import RateTourRating from "@/components/Rating/RateTourRating";
import HeaderWithSkipBtn from "@/components/UserHeader/HeaderWithSkipBtn";
import { Link } from "react-router-dom";
function RateTour() {
  return (
    <div className="container">
      <HeaderWithSkipBtn link="/user/experience" text={"Tour Rating"} skipLink={"/"} />
      <div className="max-w-2xl m-auto  relative ">
        <h1 className="text-primaryColor-900">Review the Experience</h1>

        <div className="starRate">
          <RateTourRating />
        </div>

        <div className="my-3">
          <textarea name="reason" placeholder="Type reason" rows={"9"} className="bg-boxFill-900 w-full outline-0 p-3 resize-none rounded-md"></textarea>
        </div>

        <p className="my-2">Tip for the Avatar($)</p>
        <div className="btn mb-10 ">
          <Link to="/user/chat-with-avatar">
            <button className="rateTourBtn">$10</button>
          </Link>
          <Link to="/user/chat-with-avatar">
            <button className="rateTourBtn">$15</button>
          </Link>
          <Link to="/user/chat-with-avatar">
            <button className="rateTourBtn ">$20</button>
          </Link>
          <Link to="/user/chat-with-avatar">
            <button className="rateTourBtn ">$25</button>
          </Link>

          <input type="text" className="inputCenter" placeholder="Enter amount" />

          <BlackBottomButton link={"/"} text={"Add Review"} />
        </div>
      </div>
    </div>
  );
}

export default RateTour;
