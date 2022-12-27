import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { isEmpty } from "../../utils/utils";
import CardChapter from "./CardChapter";
import AddChapter from "./AddChapter";

const ShowChapter = ({ theme }) => {
  const userData = useSelector((state) => state.user.user);
  const [ShowAddTheme, setShowAddTheme] = useState(false);
  const [IsAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const checkAdmin = () => {
      if (userData.isAdmin === true) {
        setIsAdmin(true);
      }
    };
    checkAdmin();
  }, [userData]);

  return (
    <div className="ShowTheme">
      <ul>
        {IsAdmin && (
          <button onClick={() => setShowAddTheme(!ShowAddTheme)}>
            Ajouté un Chapitre
          </button>
        )}
        {ShowAddTheme && <AddChapter theme={theme} />}
        {!isEmpty(theme.chapter[0]) &&
          theme.chapter.map((chapter) => {
            return (
              <CardChapter theme={theme} chapter={chapter} key={chapter._id} />
            );
          })}
      </ul>
    </div>
  );
};

export default ShowChapter;
