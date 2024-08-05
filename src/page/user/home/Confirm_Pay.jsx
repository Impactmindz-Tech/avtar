import ConfirmPayCard from "@/components/Cards/Confirm_Pay_Card/ConfirmPayCard";
import HeaderBack from "@/components/HeaderBack";
import EditDateModal from "@/components/Modal/EditDateModal";
import EditTimeModal from "@/components/Modal/EditTimeModal";
import ConfirmPaymentForm from "@/components/Payment Card/Confirm_Page_Payment";
import { formatTime } from "@/constant/date-time-format/DateTimeFormat";
import Images from "@/constant/Images";
import { getBookingDetailsApi } from "@/utills/service/userSideService/userService/UserHomeService";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Confirm_Pay() {
  const params = useParams();
  const [showEditDateModal, setShowEditDateModal] = useState(false);
  const [showEditTimeModal, setShowEditTimeModal] = useState(false);
  const [bookingDetails, setBookingDetails] = useState(null);

  const getBookingDetails = async () => {
    try {
      const response = await getBookingDetailsApi(params?.id);
      if (response?.isSuccess) {
        setBookingDetails(response);
      }
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    getBookingDetails();
  }, []);
  return (
    <>
      <div className="container">
        <HeaderBack link="/user/booking" text={"Confirm and Pay"} />

        <div className="m-auto ">
          <div className="flex justify-center w-full ">
            <ConfirmPayCard bookingDetails={bookingDetails} />
          </div>

          <div className="flex gap-4 md:block">
            {/* your events edit card */}
            <div className="flex BoxShadowLessRounded m-auto w-[50%] md:w-full my-5">
              <div className="py-2 px-4 w-full">
                <h1 className="my-2 font-bold">Your Events</h1>

                <div className="relative  w-full">
                  {/* date */}
                  <div className="flex justify-between items-center">
                    <div className="div">
                      <div className="flex gap-1 items-center">
                        <div className="icon">
                          <img src={Images.calendarIcon} alt="calendarIcon" />
                        </div>
                        <h6 className="font-semibold">Dates</h6>
                      </div>
                      <h4 className="font-medium my-1">{bookingDetails?.data?.booking?.bookingDate}</h4>
                    </div>
                    {/* edit btn */}
                    <div className="">
                      <img src={Images.edit} alt="edit" className="cursor-pointer" onClick={() => setShowEditDateModal(true)} />
                    </div>
                  </div>

                  {/* time */}
                  <div className="flex justify-between items-center my-3">
                    <div className="div">
                      <div className="flex gap-1 items-center">
                        <div className="icon">
                          <img src={Images.clock} alt="clock" />
                        </div>
                        <h6 className="font-semibold">Time</h6>
                      </div>
                      <h4 className="font-medium my-1">{bookingDetails?.data?.booking?.bookingTime && bookingDetails?.data?.booking?.endTime ? `${formatTime(bookingDetails.data.booking.bookingTime)} - ${formatTime(bookingDetails.data.booking.endTime)}` : "N/A"}</h4>
                    </div>
                    <div className="">
                      <img src={Images.edit} alt="edit" className="cursor-pointer" onClick={() => setShowEditTimeModal(true)} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* price details card */}
            <div className="flex BoxShadowLessRounded m-auto w-[50%] md:w-full my-5 bg-boxFill-900">
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
          </div>
          <ConfirmPaymentForm />

          <div className="m-auto  my-5">
            <Link to={"/user/payment-status"}>
              <div className="w-full my-6 rounded-md bottom-1 m-auto left-0 right-0 p-2 cursor-pointer bg-backgroundFill-900 text-white text-center">
                <button className="py-2 font-bold ">Pay</button>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <EditTimeModal show={showEditTimeModal} onClose={() => setShowEditTimeModal(false)} />
      <EditDateModal show={showEditDateModal} onClose={() => setShowEditDateModal(false)} />
    </>
  );
}

export default Confirm_Pay;
