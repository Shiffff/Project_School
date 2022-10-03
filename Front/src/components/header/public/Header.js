import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul>
          <li>
            <NavLink
              to="/home"
              className={({ isActive }) =>
                isActive ? "activeLinkHome" : undefined
              }
            >
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/sixieme"
              className={({ isActive }) =>
                isActive ? "activeLinkHome" : undefined
              }
            >
              Sixieme
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/cinquieme"
              className={({ isActive }) =>
                isActive ? "activeLinkHome" : undefined
              }
            >
              Cinquieme
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/quatrieme"
              className={({ isActive }) =>
                isActive ? "activeLinkHome" : undefined
              }
            >
              Quatrieme
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/troisieme"
              className={({ isActive }) =>
                isActive ? "activeLinkHome" : undefined
              }
            >
              Troisieme
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/seconde"
              className={({ isActive }) =>
                isActive ? "activeLinkHome" : undefined
              }
            >
              Seconde
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/premiereES"
              className={({ isActive }) =>
                isActive ? "activeLinkHome" : undefined
              }
            >
              PremiereES
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/premiereSPE"
              className={({ isActive }) =>
                isActive ? "activeLinkHome" : undefined
              }
            >
              PremiereSPE
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/tes"
              className={({ isActive }) =>
                isActive ? "activeLinkHome" : undefined
              }
            >
              Tes
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/tspe"
              className={({ isActive }) =>
                isActive ? "activeLinkHome" : undefined
              }
            >
              Tspe
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
