import axiosInstance from "@/utills/AxiosInstance";
import toast from "react-hot-toast";

export const createOfferApi = async (id, payload) => {
  try {
    const res = await axiosInstance.post(`/user/createoffer/${id}`, payload);
    return res.data;
  } catch (error) {
    toast.error(error?.response?.data?.message);
    console.log(error);
  }
};
