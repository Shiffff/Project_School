import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul>
          <li>
            <NavLink
              to="/admin/listStudent"
              className={({ isActive }) =>
                isActive ? "activeLinkHome" : undefined
              }
            >
              Toutes les classes
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/sixieme"
              className={({ isActive }) =>
                isActive ? "activeLinkHome" : undefined
              }
            >
              Sixieme
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/cinquieme"
              className={({ isActive }) =>
                isActive ? "activeLinkHome" : undefined
              }
            >
              Cinquieme
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/quatrieme"
              className={({ isActive }) =>
                isActive ? "activeLinkHome" : undefined
              }
            >
              Quatrieme
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/troisieme"
              className={({ isActive }) =>
                isActive ? "activeLinkHome" : undefined
              }
            >
              Troisieme
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/seconde"
              className={({ isActive }) =>
                isActive ? "activeLinkHome" : undefined
              }
            >
              Seconde
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/premiereESL"
              className={({ isActive }) =>
                isActive ? "activeLinkHome" : undefined
              }
            >
              PremiereES
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/premiereSPE"
              className={({ isActive }) =>
                isActive ? "activeLinkHome" : undefined
              }
            >
              PremiereSPE
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/tes"
              className={({ isActive }) =>
                isActive ? "activeLinkHome" : undefined
              }
            >
              Tes
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/tspe"
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
