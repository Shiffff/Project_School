import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="Aheader">
      <nav>
        <ul>
          <li className="containerMenu Student">
            <NavLink
              to="/admin/Student"
              className={({ isActive }) =>
                isActive ? "activeLinkStudent" : "linkStudent"
              }
            >
              Elèves
            </NavLink>
          </li>
          <li className="containerMenu test1"></li>
          <li className="containerMenu test2"></li>
          <li className="containerMenu test3"></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
