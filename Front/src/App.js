import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "./pages/Auth/AuthRouter";
import PublicRouter from "./pages/Public/PublicRouter";
import AdminRouter from "./pages/Admin/AdminRouter";
import AuthGuardA from "./helpers/AuthGuardA";
import AuthGuardP from "./helpers/AuthGuardP";
import { userService } from "./services/user.service";
import { contentService } from "./services/content.service";
import { setUsersData } from "./feature/users.slice";
import { setUserData } from "./feature/user.slice";
import { setContentData } from "./feature/content.slice";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    userService
      .getAllUsers()
      .then((res) => {
        dispatch(setUsersData(res.data));
      })
      .catch((err) => console.log(err));
    userService
      .getUser()
      .then((res) => {
        dispatch(setUserData(res.data));
      })
      .catch((err) => console.log(err));
    contentService
      .getTheme()
      .then((res) => {
        dispatch(setContentData(res.data));
      })
      .catch((err) => console.log(err));

    // eslint-disable-next-line
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

        <Route path="/login/*" element={<Auth />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
