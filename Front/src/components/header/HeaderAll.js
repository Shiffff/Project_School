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
    <header className="headerAll">
      <nav>
        <ul>
          <li className="logoSite">
            <img className="imglogoSite" src="../logo_book.jpg"></img>
          </li>
          <h2 className="nameOfPage">Accueil</h2>
          {IsAdmin && (
            <NavLink to="/admin/dashboard" className="logoContainer admin">
              <img
                className="imglogoContainer admin"
                src="../logo_admin.png"
              ></img>
            </NavLink>
          )}
          <li>
            <NavLink className="logoContainer Home" to="/">
              <img
                className="imglogoContainer home"
                src="../logo_home.png"
              ></img>
            </NavLink>
          </li>
          <li onClick={logout} className="logoContainer logout">
            <img
              className="imglogoContainer logout"
              src="../logo_logout.png"
            ></img>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderAll;
