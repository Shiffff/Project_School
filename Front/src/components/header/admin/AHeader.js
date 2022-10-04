import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul>
          <li>
            <NavLink
              to="/admin/Student"
              className={({ isActive }) =>
                isActive ? "activeLinkHome" : undefined
              }
            >
              Student
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
