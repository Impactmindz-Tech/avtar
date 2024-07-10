import Images from "@/constant/Images";
import { useState } from "react";
const Confirm_Page_Payment = () => {
  //   const [paymentMethod, setPaymentMethod] = useState('applePay');
  const [selectedMethod, setSelectedMethod] = useState("applePay");

  return (
    <form className="w-[460px] BoxShadowLessRounded m-auto p-5">
      <h2 className="text-lg font-medium my-3">Pay with</h2>

      <div className="space-y-4">
        <label className={`payment-option flex items-center justify-between p-4 border rounded-lg cursor-pointer ${selectedMethod === "paypal" ? "active" : ""}`}>
          <div className="flex items-center">
            <img src={Images.paypal} alt="PayPal" className="w-6 h-6 mr-2" />
            <span className="text-sm font-semibold">PayPal</span>
          </div>
          <input type="radio" name="paymentMethod" value="paypal" checked={selectedMethod === "paypal"} onChange={() => setSelectedMethod("paypal")} className="hidden" />
          <div className="custom-radio"></div>
        </label>
        <label className={`payment-option flex items-center justify-between p-4 border rounded-lg cursor-pointer ${selectedMethod === "applePay" ? "active" : ""}`}>
          <div className="flex items-center">
            <img src={Images.applePay} alt="Apple Pay" className="w-6 h-6 mr-2" />
            <span className="text-sm font-semibold">Apple Pay</span>
          </div>
          <input type="radio" name="paymentMethod" value="applePay" checked={selectedMethod === "applePay"} onChange={() => setSelectedMethod("applePay")} className="hidden" />
          <div className="custom-radio"></div>
        </label>
      </div>

      <div className="py-4">
        <div className="flex items-center justify-between my-4">
          <h2 className="text-sm font-medium mb-2">Platinum Card</h2>
          <div className="flex items-center gap-1">
            <img src={Images.camera} alt="camera" />
            <h4 className="font-medium">Scan Card</h4>
          </div>
        </div>

        <div className="cardNumber relative">
          <div className="absolute top-3 right-2">
            <img src={Images.cardsGateway} alt="cardsGateway" className="" />
          </div>
          <input type="text" placeholder="Card number" className="inputGrayColor" />
        </div>
      </div>

      <div className="flex gap-1">
        {/* month */}

        <div className="cardNumber ">
          <input type="text" placeholder="MM / YY" className="inputGrayColor" />
        </div>
        {/* cvv */}
        <div className="cardNumber relative ">
          <div className="absolute top-4 right-3">
            <img src={Images.cvv} alt="cvv" />
          </div>
          <input type="text" placeholder="CVC" className="inputGrayColor" />
        </div>
      </div>

      <div className="mt-5">
        <label className="block text-sm font-medium mb-2">Billing Address</label>
        <select className="inputGrayColor">
          <option>United States</option>
        </select>
        <input type="text" placeholder="ZIP Code" className="inputGrayColor mt-3" />
      </div>
    </form>
  );
};

export default Confirm_Page_Payment;