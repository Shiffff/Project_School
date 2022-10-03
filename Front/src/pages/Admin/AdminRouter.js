import React from "react";
import { Route, Routes } from "react-router-dom";

import ALayout from "./ALayout";
import Dashboard from "./Dashboard";
import AddStudent from "./AdminPage/AddStudent";
import ListStudent from "./AdminPage/ListStudent";
import Error from "../../utils/Error";

const AdminRouter = () => {
  return (
    <div>
      <Routes>
        <Route element={<ALayout />}>
          <Route index element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/addStudent" element={<AddStudent />} />
          <Route path="/listStudent" element={<ListStudent />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
};

export default AdminRouter;
