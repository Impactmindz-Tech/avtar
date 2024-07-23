import React from "react";

import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { signupgoogle } from "@/constant/optimizedFunction/loginFunction/LoginFunction"; // Adjust path based on your project
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginValidation } from "@/utills/formvalidation/FormValidation";
import { getLocalStorage, setLocalStorage } from "@/utills/LocalStorageUtills";
import { loginApi } from "@/utills/service/authService";
import TitleHeading from "@/components/Avatar/Heading/TitleHeading";

import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from "@/components/ui/input-otp";

const OtpVerify = () => {
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ resolver: yupResolver(loginValidation) });

  const handleGoogleSignup = () => {
    signupgoogle(navigate);
  };
  const userRole = getLocalStorage("user")?.user?.Activeprofile;
  console.log(userRole);

  const onSubmit = async (formData) => {
    try {
      const response = await loginApi(formData);
      console.log(response);
      if (response?.isSuccess && response?.data?.length > 1) {
        setLocalStorage("userDetails", response);
        navigate("/auth/role/" + response?.data[0].userId, { state: { formData } });
      } else {
        setLocalStorage("user", response?.data);
        setLocalStorage("token", response?.token);
        navigate("/user/dashboard");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="max-w-[50%] mx-auto">
      <h1>AvatarWalk</h1>
      <div className="pt-10">
        <div className="my-5">
          <h1>OTP Verification</h1>
          <p className="text-grey-800">Enter the verification code we just send on your email address.</p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div>
            <InputOTP maxLength={6}>
              <InputOTPGroup>
                <InputOTPSlot index={0} className="input-otp-slot" />
                <InputOTPSlot index={1} className="input-otp-slot" />
                <InputOTPSlot index={2} className="input-otp-slot" />
                <InputOTPSlot index={4} className="input-otp-slot" />
              </InputOTPGroup>
            </InputOTP>
          </div>

          <div className="text-center ">
            <p className="text-danger font-bold py-3">Wrong code, please try again</p>
            <p className="text-grey-800">
              I din’t receive a code. <b className="text-grey-900 cursor-pointer">Resend</b>
            </p>
          </div>
          <div className="cursor-pointer w-full bg-primaryColor-900 p-4 text-center text-white mt-8 rounded-xl">
            <Link to="/auth/new-password">
              {" "}
              <button className="w-full">Verify</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OtpVerify;
