import axiosInstance from "@/utills/AxiosInstance";


export const AddexperienceApi = async (payload) => {
  try {
    const res = await axiosInstance.post("/avatar/Addexperience/" ,payload);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
