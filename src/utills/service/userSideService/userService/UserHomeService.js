import axiosInstance from "@/utills/AxiosInstance";
import toast from "react-hot-toast";

export const userExperienceApi = async (payload) => {
  const { tab, country, search } = payload;
  try {
    const res = await axiosInstance.get(`/user/getExperience?filters=${tab}&country=${country}&search=${search}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const userExperienceListApi = async (id) => {
  try {
    const res = await axiosInstance.get("/user/getdetailExp/" + id);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getAllcountryApi = async () => {
  try {
    const res = await axiosInstance.get("/user/getAllcountry/");
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const bookingExperinceApi = async (id, payload) => {
  try {
    const res = await axiosInstance.post("/user/booking/" + id, payload);
    return res.data;
  } catch (error) {
    toast.error(error?.response?.data?.message);
    console.log(error);
  }
};

export const getBookingDetailsApi = async (id) => {
  try {
    const res = await axiosInstance.get("/user/getBookingDetails/" + id);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
