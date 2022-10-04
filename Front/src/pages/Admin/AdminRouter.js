import React from "react";
import { Route, Routes } from "react-router-dom";

import ALayout from "./ALayout";
import Dashboard from "./Dashboard";
import Student from "./AdminPage/Student";
import Error from "../../utils/Error";

const AdminRouter = () => {
  return (
    <div>
      <Routes>
        <Route element={<ALayout />}>
          <Route index element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/Student" element={<Student />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
};

export default AdminRouter;
