import React from "react";
import { Navigate } from "react-router-dom";
import { accountService } from "../services/account_service";

const AuthGuardP = ({ children }) => {
  if (!accountService.isLogged()) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default AuthGuardP;
