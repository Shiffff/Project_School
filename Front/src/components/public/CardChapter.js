import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DeleteChapter from "./deleteChapter";
import { contentService } from "../../services/content.service";

const CardChapter = ({ chapter, theme }) => {
  const [IsUpdated, setIsUpdated] = useState(false);

  const userData = useSelector((state) => state.user.user);
  const [IsAdmin, setIsAdmin] = useState(false);
  const [TextTitleUpdate, setTextTitleUpdate] = useState(chapter.chapterTitle);
  const [TextDescriptionUpdate, setTextDescriptionUpdate] = useState(
    chapter.chapterdescription
  );

  const updateItem = async () => {
    if (TextTitleUpdate || TextDescriptionUpdate) {
      const newDescription = {
        chapterTitle: TextTitleUpdate,
        chapterdescription: TextDescriptionUpdate,
      };
      contentService
        .putChapter(theme._id, newDescription)
        .then((res) => {
          console.log(res);
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
    <div className="CardThemeContainer">
      <div className="themeContainer">
        <ul>
          {IsUpdated === false && <p>{chapter.chapterTitle}</p>}
          {IsUpdated && (
            <div className="update-post">
              <textarea
                defaultValue={chapter.chapterTitle}
                onChange={(e) => setTextTitleUpdate(e.target.value)}
              />
              <div className="button-container"></div>
            </div>
          )}

          {IsUpdated === false && <p>{chapter.chapterdescription}</p>}
          {IsUpdated && (
            <div className="update-post">
              <textarea
                defaultValue={chapter.chapterdescription}
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
          {IsAdmin && <DeleteChapter id={chapter._id} />}
        </ul>
      </div>
    </div>
  );
};

export default CardChapter;
