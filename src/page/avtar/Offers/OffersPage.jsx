import OffersCard from "@/components/Avatar/Card/OffersCard";
import BlackBottomButton from "@/components/Button/BlackBottomButton";
import Images from "@/constant/Images";

function OffersPage() {
  return (
    <div>
      <OffersCard state={true} />

      <div className="my-4">
        <h1 className="font-bold">User requested a tour at this location</h1>
        <div className="my-3 relative">
          <div className="centerImageIcon relative  w-full flex flex-col gap-2 justify-center">
            <div className="w-[50%] m-auto lg:w-[98%]">
              <div className="shape text-sm text-center">Exact location provided by user.</div>
              <div className="flex w-full justify-center">
                <div className="triangleDown"></div>
              </div>
            </div>
            <div className="flex justify-center">
              <img src={Images.homeIcon} alt="home icon" className="cursor-pointer lg:w-10 lg:h-10" />
            </div>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100940.18159961997!2d-122.5200014417705!3d37.7576713147358!2m3!1f0!2
                f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a50136
                7f076adff!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2sin!4v1
                720766253960!5m2!1sen!2sin"
            className="w-full 4xl:h-[600px] lg:h-auto"
            loading="lazy"
          ></iframe>
        </div>
        <h4 className="font-bold">Notes</h4>
        <p className="text-grey-800">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet.</p>
      </div>

      <BlackBottomButton text={"Accept"} link={"/avatar/experience"} />
    </div>
  );
}

export default OffersPage;
