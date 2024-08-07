import { useEffect, useState } from "react";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./router/Routing";
import "react-country-state-city/dist/react-country-state-city.css";
import { Toaster } from "react-hot-toast";
import useSocket from "./utills/service/socket/useSocket";

function App() {
  useSocket()

  return (
    <>
      <Toaster />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
