import { io } from "socket.io-client";

const baseURL = () => {
  const socket = io("https://avatarbackend.onrender.com");
};
export default baseURL; 