import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { contentService } from "../../services/content.service";
import { putLesson } from "../../feature/content.slice";
import DeleteLesson from "./DeleteLesson";

const CardLesson = ({ theme, chapter, lesson }) => {
  const dispatch = useDispatch();

  const userData = useSelector((state) => state.user.user);
  const [IsUpdated, setIsUpdated] = useState(false);

  const [IsAdmin, setIsAdmin] = useState(false);
  const [TextTitleUpdate, setTextTitleUpdate] = useState(lesson.lessonTitle);
  const [TextDescriptionUpdate, setTextDescriptionUpdate] = useState(
    lesson.lessondescription
  );

  const updateItem = async () => {
    if (TextTitleUpdate || TextDescriptionUpdate) {
      const newDescription = {
        chapterId: chapter._id,
        lessonId: lesson._id,
        lessonTitle: TextTitleUpdate,
        lessondescription: TextDescriptionUpdate,
      };
      contentService
        .putLesson(theme._id, newDescription)
        .then((res) => {
          console.log(res);
          dispatch(
            putLesson([
              theme._id,
              chapter._id,
              lesson._id,
              TextTitleUpdate,
              TextDescriptionUpdate,
            ])
          );
        })
        .catch((err) => console.log(err));
    }
  };

  useEffect(() => {
    const checkAdmin = () => {
      if (userData.isAdmin === true) {
        setIsAdmin(true);
      }
    };
    checkAdmin();
  }, [userData]);

  return (
    <div className="CardLessonsContainer">
      <div className="lessonsContainer">
        <ul>
          {IsUpdated === false && <p>{lesson.lessonTitle}</p>}
          {IsUpdated && (
            <div className="update-post">
              <textarea
                defaultValue={lesson.lessonTitle}
                onChange={(e) => setTextTitleUpdate(e.target.value)}
              />
              <div className="button-container"></div>
            </div>
          )}

          {IsUpdated === false && <p>{lesson.lessondescription}</p>}
          {IsUpdated && (
            <div className="update-post">
              <textarea
                defaultValue={lesson.lessondescription}
                onChange={(e) => setTextDescriptionUpdate(e.target.value)}
              />
              <div className="button-container">
                <button
                  className="btn"
                  onClick={() => {
                    updateItem();
                    setIsUpdated(!IsUpdated);
                  }}
                >
                  Modifier
                </button>
              </div>
            </div>
          )}
          {IsAdmin && (
            <div className="button-container">
              <div onClick={() => setIsUpdated(!IsUpdated)}>
                <div>img modifié</div>
              </div>
            </div>
          )}
          {IsAdmin && (
            <DeleteLesson chapter={chapter} theme={theme} lesson={lesson} />
          )}
        </ul>
      </div>
    </div>
  );
};

export default CardLesson;
