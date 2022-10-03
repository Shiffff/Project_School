import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul>
          <li>
            <NavLink
              to="/admin/addStudent"
              className={({ isActive }) =>
                isActive ? "activeLinkHome" : undefined
              }
            >
              AddStudent
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/listStudent"
              className={({ isActive }) =>
                isActive ? "activeLinkHome" : undefined
              }
            >
              ListStudent
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
