import axiosInstance from "@/utills/AxiosInstance";

export const AddexperienceApi = async (payload) => {
  try {
    const res = await axiosInstance.post("/avatar/Addexperience/", payload);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getRequestsApi = async (search) => {
  try {
    const res = await axiosInstance.get("/avatar/getrequests?status="+search);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
