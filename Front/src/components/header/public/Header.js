import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul>
          <li className="iconeClass6">
            <NavLink
              to="/sixieme"
              className={({ isActive }) =>
                isActive ? "activeLinkHome isActiveClass6" : "iconeClass"
              }
            >
              6ème
            </NavLink>
          </li>
          <li className="iconeClass5">
            <NavLink
              to="/cinquieme"
              className={({ isActive }) =>
                isActive ? "activeLinkHome isActiveClass5" : "iconeClass "
              }
            >
              5ème
            </NavLink>
          </li>
          <li className="iconeClass4">
            <NavLink
              to="/quatrieme"
              className={({ isActive }) =>
                isActive ? "activeLinkHome isActiveClass4" : "iconeClass "
              }
            >
              4ème
            </NavLink>
          </li>
          <li className="iconeClass3">
            <NavLink
              to="/troisieme"
              className={({ isActive }) =>
                isActive ? "activeLinkHome isActiveClass3" : "iconeClass "
              }
            >
              3ème
            </NavLink>
          </li>
          <li className="iconeClass2">
            <NavLink
              to="/seconde"
              className={({ isActive }) =>
                isActive ? "activeLinkHome isActiveClass2" : "iconeClass "
              }
            >
              2nd
            </NavLink>
          </li>
          <li className="iconeClass1es">
            <NavLink
              to="/premiereES"
              className={({ isActive }) =>
                isActive ? "activeLinkHome isActiveClass1es" : "iconeClass "
              }
            >
              1ère ES
            </NavLink>
          </li>
          <li className="iconeClass1spe ">
            <NavLink
              to="/premiereSPE"
              className={({ isActive }) =>
                isActive ? "activeLinkHome isActiveClass1spe" : "iconeClass "
              }
            >
              1ère SPE
            </NavLink>
          </li>
          <li className="iconeClasstes">
            <NavLink
              to="/tes"
              className={({ isActive }) =>
                isActive ? "activeLinkHome isActiveClasstes" : "iconeClass "
              }
            >
              Term ES
            </NavLink>
          </li>
          <li className="iconeClasstspe">
            <NavLink
              to="/tspe"
              className={({ isActive }) =>
                isActive ? "activeLinkHome isActiveClasstspe" : "iconeClass"
              }
            >
              Term SPE
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
