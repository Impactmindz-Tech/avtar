import ConfirmPayCard from "@/components/Cards/Confirm_Pay_Card/ConfirmPayCard";
import HeaderBack from "@/components/HeaderBack";
import Images from "@/constant/Images";

function Confirm_Pay() {
  return (
    <div className="container">
      <HeaderBack link="/user/book-experience" text={"Confirm and Pay"} />

      <div className="max-w-2xl m-auto ">
        <div className="flex justify-center">
          <ConfirmPayCard />
        </div>

        {/* your events edit card */}
        <div className="flex BoxShadowLessRounded m-auto w-[460px] my-5">
          <div className="py-2 px-4 w-full">
            <div className="my-2 font-bold">Your Events</div>

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
                <img src={Images.edit} alt="edit" className="cursor-pointer" />
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
      </div>
    </div>
  );
}

export default Confirm_Pay;
