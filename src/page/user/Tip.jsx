import BlackBottomButton from "@/components/Button/BlackBottomButton";
import HeaderBack from "@/components/HeaderBack";
import ConfirmPaymentForm from "@/components/Payment Card/Confirm_Page_Payment";

function Tip() {
  return (
    <div className="container">
      <HeaderBack link="/user/rate-tour" text={"Tip"} />
      <div className="max-w-2xl m-auto ">
        <ConfirmPaymentForm />
        <div className="m-auto w-[460px]">
          <BlackBottomButton link={"/user/tip"} text={"Pay"} />
        </div>
      </div>
    </div>
  );
}

export default Tip;
