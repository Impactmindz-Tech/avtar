import React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import Image from "../../constant/Images";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registrationValidation } from "@/utills/formvalidation/FormValidation";
import { registrationApi } from "@/utills/service/authService";
import { setLocalStorage } from "@/utills/LocalStorageUtills";
import toast from "react-hot-toast";

const SignUp = () => {
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ resolver: yupResolver(registrationValidation) });

  const onSubmit = async (formData) => {
    try {
      const response = await registrationApi(formData);
      console.log(response);
      if (response?.isSucces) {
        toast.success(response?.message);
        setLocalStorage("user_Signup", response?.data);
        navigate("/auth/role/" + response?.data?._id);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="max-w-[50%] mx-auto">
      <h1>AvatarWalk</h1>
      <form className="pt-10" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="userName" className="label">
            Username
          </label>
          <br />
          <input className="input" type="text" placeholder="Eg. Rohan Sharma" name="userName" id="userName" {...register("userName")} />
        </div>
        <p className="text-[red]">{errors?.userName?.message}</p>
        <div className="pt-4">
          <label htmlFor="email" className="label">
            Email
          </label>
          <br />
          <input className="input" type="text" placeholder="Eg. rohansharma@gmail.com" name="email" id="email" {...register("email")} />
        </div>
        <p className="text-[red]">{errors?.email?.message}</p>
        <div className="pt-4">
          <label htmlFor="password" className="label">
            Password
          </label>
          <br />
          <input className="input" type="text" placeholder="Eg. Ro12******" name="password" id="password" {...register("password")} />
        </div>
        <p className="text-[red]">{errors?.password?.message}</p>
        <div className="pt-4">
          <label htmlFor="confirmPassword" className="label">
            Confirm Password
          </label>
          <br />
          <input className="input" type="text" placeholder="Eg. **********" name="confirmPassword" id="confirmPassword" {...register("confirmPassword")} />
        </div>
        <p className="text-[red]">{errors?.confirmPassword?.message}</p>
        <div className="flex items-center space-x-2 pt-2">
          <input type="checkbox" name="terms" id="terms" {...register("terms")} />
          <Label htmlFor="terms">
            By Signing up, You Agree to our <span className="font-semibold">Privacy Policy</span> and <span className="font-semibold">Terms of Services.</span>
          </Label>
        </div>
        <p className="text-[red]">{errors?.terms?.message}</p>
        <div className="block cursor-pointer w-full bg-primaryColor-900 p-4 text-center text-white mt-8 rounded-xl">
          <button>Sign Up</button>
        </div>
        <div className="flex flex-col gap-3 pt-2">
          <p className="text-center">Or</p>
          <div className="flex items-center justify-center gap-3 cursor-pointer w-full bg-grey-300 p-4 text-center text-bg-primaryColor-900 rounded-xl">
            <img className="w-5 h-5" src={Image.google_img} alt="" />
            <button className="font-semibold text-primaryColor-500">Continue with Google</button>
          </div>
          <div className="pt-5 text-center">
            <p>
              Already have an account?{" "}
              <Link to={"/auth/login"} className="font-semibold">
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
