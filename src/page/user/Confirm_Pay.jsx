import ConfirmPayCard from "@/components/Cards/Confirm_Pay_Card/ConfirmPayCard";
import HeaderBack from "@/components/HeaderBack";
import EditDateModal from "@/components/Modal/EditDateModal";
import ConfirmPaymentForm from "@/components/Payment Card/Confirm_Page_Payment";
import Images from "@/constant/Images";
import { useState } from "react";
import { Link } from "react-router-dom";

function Confirm_Pay() {
    const [showEditDateModal, setShowEditDateModal] = useState(false);

  return (
    <>
    <div className="container">
      <HeaderBack link="/user/book-experience" text={"Confirm and Pay"} />

      <div className="max-w-2xl m-auto ">
        <div className="flex justify-center">
          <ConfirmPayCard />
        </div>

        {/* your events edit card */}
        <div className="flex BoxShadowLessRounded m-auto w-[460px] my-5">
          <div className="py-2 px-4 w-full">
            <h1 className="my-2 font-bold">Your Events</h1>

            <div className="relative  w-full">
              {/* date */}
              <div className="flex gap-1 items-center">
                <div className="icon">
                  <img src={Images.calendarIcon} alt="calendarIcon" />
                </div>
                <h6 className="font-semibold">Dates</h6>
              </div>
              <h4 className="font-medium my-1">Mon, Mar 21, 2024</h4>
              {/* edit btn */}
              <div className="absolute top-3 right-0">
                <img src={Images.edit} alt="edit" className="cursor-pointer" onClick={() => setShowEditDateModal(true)} />
              </div>
            </div>

            {/* time */}
            <div className="relative  w-full">
              <div className="flex gap-1 items-center my-2">
                <div className="icon">
                  <img src={Images.clock} alt="clock" />
                </div>
                <h6 className="font-semibold">Time</h6>
              </div>
              <h4 className="font-medium my-1">08:00 PM - 08:30 PM</h4>
              {/* edit btn */}
              <div className="absolute top-5 right-0">
                <img src={Images.edit} alt="edit" className="cursor-pointer" />
              </div>
            </div>
          </div>{" "}
        </div>

        {/* price details card */}
        <div className="flex BoxShadowLessRounded m-auto w-[460px] my-5 bg-boxFill-900">
          <div className="py-2 px-4 w-full">
            <h1 className="my-2 font-bold">Price Details</h1>

            <div className="text flex justify-between py-1">
              <div className="title">Price: $1 x 15 minutes</div>
              <div className="font-medium">$15.00</div>
            </div>
            <div className="text flex justify-between py-1">
              <div className="title">Avatar Walk Fee</div>
              <div className="font-medium">$0.20</div>
            </div>

            {/* total */}
            <div className="total borderTop mt-2 py-2">
              <div className="text flex justify-between py-1">
                <div className="title">Total</div>
                <div className="font-medium">$15.20</div>
              </div>
            </div>
          </div>{" "}
        </div>

        <ConfirmPaymentForm />

        <div className="m-auto w-[460px] my-5">
          <Link to={"/"}>
            <div className="w-full my-6 rounded-md bottom-1 m-auto left-0 right-0 p-2 cursor-pointer bg-backgroundFill-900 text-white text-center">
              <button className="py-2 font-bold ">Pay</button>
            </div>
          </Link>
        </div>
      </div>
    </div>

    <EditDateModal show={showEditDateModal} onClose={() => setShowEditDateModal(false)}/>
    </>
  );
}

export default Confirm_Pay;
