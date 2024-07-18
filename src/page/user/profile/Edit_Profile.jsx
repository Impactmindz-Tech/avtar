import BlackBottomButton from "@/components/Button/BlackBottomButton";
import HeaderBack from "@/components/HeaderBack";
import Images from "@/constant/Images";
import { editProfileValidation } from "@/utills/formvalidation/FormValidation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { editProfileApi } from "@/utills/service/userSideService/editProfileService/EditProfileService";
import { getLocalStorage, removeLocalStorage, setLocalStorage } from "@/utills/LocalStorageUtills";

const EditProfile = () => {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
      setPreview(URL.createObjectURL(e.target.files[0]));
    }
  };
  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
  } = useForm({ resolver: yupResolver(editProfileValidation) });

  const onSubmit = async (formData) => {
    const id = getLocalStorage("user")?.id;
    const form = new FormData();
    form.append("file", image);
    for (const key in formData) {
      form.append(key, formData[key]);
    }
    try {
      const response = await editProfileApi(id, form);
      if (response?.isSuccess) {
        removeLocalStorage("user");
        setLocalStorage("user", response?.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const user = getLocalStorage("user");
    if (user) {
      setValue("firstName", getLocalStorage("user")?.firstName);
      setValue("lastName", getLocalStorage("user")?.lastName);
      setValue("mobileNumber", getLocalStorage("user")?.mobileNumber);
      setValue("city", getLocalStorage("user")?.city);
      setValue("country", getLocalStorage("user")?.country);
      setPreview(user.profileimage);
      setValue("dob", getLocalStorage("user")?.dob);
    }
  }, [setValue]);

  return (
    <div className="container">
      <HeaderBack link={"/user/profile"} text={"Edit Profile"} />
      <form onSubmit={handleSubmit(onSubmit)} noValidate className=" m-auto my-2">
        <div className="flex flex-col items-center mb-4">
          <div className="relative">
            <img src={preview} alt="Profile" className="w-32 h-32 rounded-full object-cover border-4 border-dotted border-white" />
            <input name="file" type="file" id="Profile" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" onChange={handleImageChange} />
            <div className="absolute bottom-0 right-0 rounded-full p-2 cameraBoxShadow bg-backgroundFill-900">
              <label htmlFor="Profile">
                <img src={Images.whiteCamera} alt="whiteCamera" className="cursor-pointer" />
              </label>
            </div>
          </div>
        </div>
        <div>
          <div className="mb-4 w-full">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
              First Name
            </label>
            <input className="inputGrayColor" id="firstName" type="text" name="firstName" placeholder="First Name" {...register("firstName")} />
            {errors.firstName && <p className="text-red-500 text-xs italic">{errors.firstName.message}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
              Last Name
            </label>
            <input className="inputGrayColor" id="lastName" name="lastName" type="text" placeholder="Last Name" {...register("lastName")} />
            {errors.lastName && <p className="text-red-500 text-xs italic">{errors.lastName.message}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="mobileNumber">
              Mobile Number
            </label>
            <div className="flex">
              <input className="shadow appearance-none border rounded-r w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="mobileNumber" name="mobileNumber" type="text" placeholder="98765 43210" {...register("mobileNumber")} />
              {errors.mobileNumber && <p className="text-red-500 text-xs italic">{errors.mobileNumber.message}</p>}
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="dob">
              Date of Birth
            </label>
            <div className="relative">
              <input className="inputGrayColor" id="dob" name="dob" type="date" placeholder="DD/MM/YYYY" {...register("dob")} />
              {errors.Dob && <p className="text-red-500 text-xs italic">{errors.dob.message}</p>}
            </div>
          </div>
          <div className="mb-4 w-full">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="country">
              Country
            </label>
            <input className="inputGrayColor" id="country" type="text" name="country" placeholder="country" {...register("country")} />
            {errors.Country && <p className="text-red-500 text-xs italic">{errors.country.message}</p>}
          </div>
          <div className="mb-4 w-full">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="city">
              City
            </label>
            <input className="inputGrayColor" id="city" type="text" name="city" placeholder="city" {...register("city")} />
            {errors.City && <p className="text-red-500 text-xs italic">{errors.city.message}</p>}
          </div>
          <div className="w-full my-6 rounded-md bottom-1 m-auto left-0 right-0 p-2 cursor-pointer bg-backgroundFill-900 text-white text-center">
            <button className="py-1 font-bold ">Save</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditProfile;
