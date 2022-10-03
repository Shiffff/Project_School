import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "./pages/Auth/";
import PublicRouter from "./pages/Public/PublicRouter";
import AdminRouter from "./pages/Admin/AdminRouter";
import AuthGuardA from "./helpers/AuthGuardA";
import AuthGuardP from "./helpers/AuthGuardP";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/*"
          element={
            <AuthGuardP>
              <PublicRouter />
            </AuthGuardP>
          }
        />

        <Route
          path="/admin/*"
          element={
            <AuthGuardA>
              <AdminRouter />
            </AuthGuardA>
          }
        />

        <Route path="/login" element={<Auth />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
