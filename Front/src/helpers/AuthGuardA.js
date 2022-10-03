import { useSelector } from "react-redux";

import { Navigate } from "react-router-dom";

const AuthGuardA = ({ children }) => {
  const userData = useSelector((state) => state.user.user);

  if (!userData.isAdmin) {
    return <Navigate to="/" />;
  }

  return children;
};

export default AuthGuardA;
