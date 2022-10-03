import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "./pages/Auth/AuthRouter";
import PublicRouter from "./pages/Public/PublicRouter";
import AdminRouter from "./pages/Admin/AdminRouter";
import AuthGuardA from "./helpers/AuthGuardA";
import AuthGuardP from "./helpers/AuthGuardP";
import { userService } from "./services/user.service";

const App = () => {
  useEffect(() => {
    userService
      .getAllUsers()
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

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
