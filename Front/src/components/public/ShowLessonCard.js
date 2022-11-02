import React from "react";
import AddLesson from "./AddLesson";
import CardLesson from "./CardLesson";
import { isEmpty } from "../../utils/utils";

const ShowLessonCard = ({ theme, chapter }) => {
  return (
    <div className="ShowTheme">
      <ul>
        <AddLesson theme={theme} chapter={chapter} />
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
      </ul>
    </div>
  );
};

export default ShowLessonCard;
