import axiosInstance from "@/utills/AxiosInstance";
import toast from "react-hot-toast";

export const AddexperienceApi = async (payload) => {
  try {
    const res = await axiosInstance.post("/avatar/Addexperience/", payload);
    return res.data;
  } catch (error) {
    toast.error(error?.response?.data?.message);
    console.log(error);
  }
};

export const getRequestsApi = async (search) => {
  try {
    const res = await axiosInstance.get("/avatar/getrequests?status=" + search);
    return res.data;
  } catch (error) {
    toast.error(error?.response?.data?.message);
    console.log(error);
  }
};
export const getExpApi = async () => {
  try {
    const res = await axiosInstance.get("/avatar/getExp");
    return res.data;
  } catch (error) {
    toast.error(error?.response?.data?.message);
    console.log(error);
  }
};
export const editexperienceApi = async (id, payload) => {
  try {
    const res = await axiosInstance.get("/avatar/Editexperience/" + id, payload);
    return res.data;
  } catch (error) {
    toast.error(error?.response?.data?.message);
    console.log(error);
  }
};
