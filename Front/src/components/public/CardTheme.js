import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DeleteCard from "./DeleteCard";
import { contentService } from "../../services/content.service";
import { putContentData } from "../../feature/content.slice";
import ShowChapterCard from "./ShowChapterCard";

const CardTheme = ({ theme }) => {
  const userData = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const [ShowChapter, setShowChapter] = useState(false);
  const [IsAdmin, setIsAdmin] = useState(false);
  const [IsUpdated, setIsUpdated] = useState(false);
  const [TextTitleUpdate, setTextTitleUpdate] = useState(theme.themeTitle);
  const [TextDescriptionUpdate, setTextDescriptionUpdate] = useState(
    theme.themedescription
  );

  const updateItem = async () => {
    if (TextTitleUpdate || TextDescriptionUpdate) {
      const newDescription = {
        themeTitle: TextTitleUpdate,
        themedescription: TextDescriptionUpdate,
      };
      contentService
        .putTheme(theme._id, newDescription)
        .then((res) => {
          console.log(res.data);
          dispatch(
            putContentData([theme._id, TextTitleUpdate, TextDescriptionUpdate])
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
    <div className="CardThemeContainer">
      <div className="ThemeElementContainer">
        <div
          className={`themeContainer themeline selectClass${theme.class}`}
          onClick={() => {
            if (IsUpdated === false) {
              setShowChapter(!ShowChapter);
            }
          }}
        >
          <ul>
            {IsUpdated === false && <p>{theme.themeTitle}</p>}
            {IsUpdated && (
              <div className="update-post">
                <textarea
                  defaultValue={theme.themeTitle}
                  onChange={(e) => setTextTitleUpdate(e.target.value)}
                />
              </div>
            )}

            {IsUpdated === false && <p>{theme.themedescription}</p>}
            {IsUpdated && (
              <div className="update-post">
                <textarea
                  defaultValue={theme.themedescription}
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
            <div className="modifyAndDeleteTheme">
              {IsAdmin && (
                <div className="button-container">
                  <div onClick={() => setIsUpdated(!IsUpdated)}>
                    <div>
                      <img
                        className="ModifyIcon"
                        src="../edit.svg"
                        alt="pic"
                      ></img>
                    </div>
                  </div>
                </div>
              )}
              {IsAdmin && <DeleteCard id={theme._id} />}
            </div>
          </ul>
        </div>
      </div>
      <div className="chapterContainer">
        {ShowChapter && <ShowChapterCard theme={theme} />}
      </div>
    </div>
  );
};

export default CardTheme;
