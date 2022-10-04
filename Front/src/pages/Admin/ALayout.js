import React from "react";
import { Outlet } from "react-router-dom";
import AHeader from "../../components/header/admin/AHeader";
import HeaderAll from "../../components/header/HeaderAll";

const ALayout = () => {
  return (
    <div className="Layout">
      <HeaderAll />
      <AHeader />
      <Outlet />
    </div>
  );
};

export default ALayout;
