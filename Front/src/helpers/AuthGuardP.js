import React from "react";
import { Navigate } from "react-router-dom";

const AuthGuardP = ({ children }) => {
  let logged = false;

  if (!logged) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default AuthGuardP;
