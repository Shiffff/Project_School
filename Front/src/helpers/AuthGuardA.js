import React from "react";
import { Navigate } from "react-router-dom";

const AuthGuardA = ({ children }) => {
  let logged = false;

  if (!logged) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default AuthGuardA;