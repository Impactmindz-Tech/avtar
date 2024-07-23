import React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import Image from "../../constant/Images";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { signupgoogle } from "@/constant/optimizedFunction/loginFunction/LoginFunction"; // Adjust path based on your project
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginValidation } from "@/utills/formvalidation/FormValidation";
import { getLocalStorage, setLocalStorage } from "@/utills/LocalStorageUtills";
import { loginApi } from "@/utills/service/authService";

const Login = () => {
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
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div>
            <label htmlFor="username" className="label">
              Username
            </label>
            <br />
            <input className="input" type="text" placeholder="Eg. Rohan Sharma" name="username" id="username" {...register("userName")} />
          </div>
          <div className="pt-4">
            <label htmlFor="password" className="label">
              Password
            </label>
            <br />
            <input className="input" type="password" placeholder="Eg. Ro12******" name="password" id="password" {...register("password")} />
          </div>
          <div className="pt-4 text-right">
          <Link to="/auth/forget-password">

          Forget Password ? </Link>
          </div>
          <div className="flex items-center space-x-2 pt-2">
            <Checkbox id="terms" />
            <Label htmlFor="terms">
              By Signing up, You Agree to our <span className="font-semibold">Privacy Policy</span> and <span className="font-semibold">Terms of Services.</span>
            </Label>
          </div>
          <div className="cursor-pointer w-full bg-primaryColor-900 p-4 text-center text-white mt-8 rounded-xl">
            <button>Sign In</button>
          </div>
        </form>
        <div className="flex flex-col gap-3 pt-2">
          <p className="text-center">Or</p>
          <div className="flex items-center justify-center gap-3 cursor-pointer w-full bg-grey-300 p-4 text-center text-bg-primaryColor-900 rounded-xl">
            <img className="w-5 h-5" src={Image.mail_img} alt="" />
            <button className="font-semibold text-primaryColor-500">Continue with Email</button>
          </div>
          <div className="flex items-center justify-center gap-3 cursor-pointer w-full bg-grey-300 p-4 text-center text-bg-primaryColor-900 rounded-xl" onClick={handleGoogleSignup}>
            <img className="w-5 h-5" src={Image.google_img} alt="" />
            <button className="font-semibold text-primaryColor-500">Continue with Google</button>
          </div>
          <div className="flex items-center justify-center gap-3 cursor-pointer w-full bg-grey-300 p-4 text-center text-bg-primaryColor-900 rounded-xl">
            <img className="w-5 h-5" src={Image.iphone_icon} alt="" />
            <button className="font-semibold text-primaryColor-500">Continue with Apple</button>
          </div>
          <div className="pt-5 text-center">
            <p>
              Don’t have an account?{" "}
              <Link to={"/auth/signup"} className="font-semibold">
                {" "}
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
