import React from "react";
import { accountService } from "../../services/account_service";
import { useNavigate } from "react-router-dom";

const HeaderAll = () => {
  let navigate = useNavigate();

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
            <button onClick={logout}>Logout</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderAll;
