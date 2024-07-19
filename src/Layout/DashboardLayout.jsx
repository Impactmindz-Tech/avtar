import Header from "@/components/UserHeader/Header";
import React from "react";

const DashboardLayout = ({children}) => {
  return (
    <div className="container">
      <Header />
      {children}
    </div>
  );
};

export default DashboardLayout;
