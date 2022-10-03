import React from "react";
import { Outlet } from "react-router-dom";
import AHeader from "../../components/admin/AHeader"


const ALayout = () => {
  return (
    <div className="Layout">
      <AHeader />
      <Outlet />
    </div>
  );
};

export default ALayout;
