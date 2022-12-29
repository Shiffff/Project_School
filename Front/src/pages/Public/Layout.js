import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/header/public/Header";
import HeaderAll from "../../components/header/HeaderAll";
import HearderAllRight from "../../components/header/public/HearderAllRight";

const Layout = () => {
  return (
    <div className="Layout">
      <HeaderAll />
      <Header />
      <HearderAllRight />
      <Outlet />
    </div>
  );
};

export default Layout;
