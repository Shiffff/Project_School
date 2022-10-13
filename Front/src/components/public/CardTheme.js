import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DeleteCard from "./DeleteCard";

const CardTheme = ({ theme }) => {
  const userData = useSelector((state) => state.user.user);
  const [IsAdmin, setIsAdmin] = useState(false);
  const [isUpdated, setIsUpdated] = useState(false);
  const [textUpdate, setTextUpdate] = useState(null);

  useEffect(() => {
    const checkAdmin = () => {
      if (userData.isAdmin === true) {
        setIsAdmin(true);
      }
    };
    checkAdmin();
  }, [userData]);

  return (
    <div className="CardThemeContainer">
      <ul>
        <li>{theme.themeTitle} </li>
        <li>{theme.themedescription} </li>
        {IsAdmin && (
          <div className="button-container">
            <div onClick={() => setIsUpdated(!isUpdated)}>
              <div>img modifié</div>
            </div>
          </div>
        )}
        {IsAdmin && (
          <div className="button-container">
            <div onClick={() => setIsUpdated(!isUpdated)}>
              <DeleteCard id={theme._id} />
            </div>
          </div>
        )}
      </ul>
    </div>
  );
};

export default CardTheme;
