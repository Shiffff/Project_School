import React, { useEffect, useState } from "react";
import { accountService } from "../../services/account_service";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const HeaderAll = () => {
  const [IsAdmin, setIsAdmin] = useState(false);
  const userData = useSelector((state) => state.user.user);
  let navigate = useNavigate();

  useEffect(() => {
    const checkAdmin = () => {
      if (userData.isAdmin === true) {
        setIsAdmin(true);
      }
    };
    checkAdmin();
  }, [userData]);

  const logout = () => {
    accountService.logout();
    navigate("/login");
  };

  return (
    <header className="header">
      <nav>
        <ul>
          <li>LOGO</li>
          <li>
            <NavLink to="/">Accueil</NavLink>
          </li>
          {IsAdmin && <NavLink to="/admin/dashboard">Admin_page</NavLink>}
          <li>
            <button onClick={logout}>Logout</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderAll;
