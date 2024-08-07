import { useEffect } from "react";
import { io } from "socket.io-client";

const useSocket = () => {
  const socket = io("https://avatarbackend.onrender.com");

  useEffect(() => {
    socket.on("connect", () => {
      console.log("connected", socket.id);
    });

    socket.on("welcome", (message) => {
      console.log(message);
    });

    return () => {
      socket.disconnect();
    };
  }, [socket]);

  return socket;
};

export default useSocket;
