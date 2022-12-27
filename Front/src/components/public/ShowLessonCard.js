import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import AddLesson from "./AddLesson";
import CardLesson from "./CardLesson";
import { isEmpty } from "../../utils/utils";

const ShowLessonCard = ({ theme, chapter }) => {
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
            Ajouté une leçon
          </button>
        )}
        {ShowAddTheme && <AddLesson theme={theme} chapter={chapter} />}
        <div className="eachCard">
          {!isEmpty(chapter.lessons[0]) &&
            chapter.lessons.map((lesson) => {
              return (
                <CardLesson
                  theme={theme}
                  chapter={chapter}
                  lesson={lesson}
                  key={lesson._id}
                />
              );
            })}
        </div>
      </ul>
    </div>
  );
};

export default ShowLessonCard;
