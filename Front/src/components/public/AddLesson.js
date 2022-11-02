import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setContentData } from "../../feature/content.slice";
import { contentService } from "../../services/content.service";

const AddLesson = ({ theme, chapter }) => {
  const [IsAdmin, setIsAdmin] = useState(false);
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user.user);
  useEffect(() => {
    const checkAdmin = () => {
      if (userData.isAdmin === true) {
        setIsAdmin(true);
      }
    };
    checkAdmin();
  }, [userData]);

  const [newLesson, setnewLesson] = useState({
    userLessonId: userData._id,
    chapterId: chapter._id,
    lessonTitle: "",
    lessondescription: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setnewLesson({ ...newLesson, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    contentService.createLesson(theme._id, newLesson).then((res) => {
      contentService
        .getTheme()
        .then((res) => {
          dispatch(setContentData(res.data));
        })
        .catch((err) => console.log(err));
    });
  };

  return (
    <div className="addLesson_container">
      <div className="newLessonForm">
        {IsAdmin && (
          <form onSubmit={(e) => handleSubmit(e)}>
            <label htmlFor="lessonTitle">Titre de la lesson</label>
            <br />
            <input
              type="text"
              name="lessonTitle"
              id="lessonTitle"
              value={newLesson.lessonTitle}
              onChange={(e) => handleChange(e)}
            />
            <br />
            <label htmlFor="lessondescription">description de la lesson</label>
            <br />
            <input
              type="text"
              name="lessondescription"
              id="lessondescription"
              value={newLesson.lessondescription}
              onChange={(e) => handleChange(e)}
            />
            <br />
            <input type="submit" className="submitNewLesson" value="Valider" />
          </form>
        )}
      </div>
    </div>
  );
};

export default AddLesson;
