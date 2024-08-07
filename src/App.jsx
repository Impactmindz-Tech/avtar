import { useEffect, useMemo, useState } from "react";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./router/Routing";
import "react-country-state-city/dist/react-country-state-city.css";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
