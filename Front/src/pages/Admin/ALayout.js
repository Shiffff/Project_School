import React from "react";
import { Outlet } from "react-router-dom";
import HeaderAll from "../../components/header/HeaderAll";

const ALayout = () => {
  return (
    <div className="Layout">
      <HeaderAll />
      <Outlet />
    </div>
  );
};

export default ALayout;
