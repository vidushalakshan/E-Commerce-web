import React from "react";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="flex flex-col justify-between flex-1 overflow-y-auto lg:h-screen">
        <div>{children}</div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
