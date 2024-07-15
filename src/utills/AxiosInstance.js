import axios from "axios";

const axiosInstance = axios.create({
    baseURL:"https://avatar-backend.vercel.app"
})

export default axiosInstance