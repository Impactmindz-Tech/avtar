import axiosInstance from "@/utills/AxiosInstance";
import toast from "react-hot-toast";

export const editProfileApi = async (id, payload) => {
  try {
    const res = await axiosInstance.patch("/user/addProfile/" + id, payload);
    return res.data;
  } catch (error) {
    toast.error(error?.response?.data?.message);
    console.log(error);
  }
};
