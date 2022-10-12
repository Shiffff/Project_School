import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/header/public/Header";
import HeaderAll from "../../components/header/HeaderAll";

const Layout = () => {
  return (
    <div className="Layout">
      <HeaderAll />
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
