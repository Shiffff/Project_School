import React, { useEffect, useState } from "react";
import { contentService } from "../../services/content.service";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setContentData } from "../../feature/content.slice";

const AddChapter = ({ theme }) => {
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

  const [newChapter, setnewChapter] = useState({
    userChapterId: userData._id,
    chapterTitle: "",
    chapterdescription: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setnewChapter({ ...newChapter, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    contentService.createChapter(theme._id, newChapter).then((res) => {
      contentService
        .getTheme()
        .then((res) => {
          dispatch(setContentData(res.data));
        })
        .catch((err) => console.log(err));
    });
  };

  return (
    <div className="addChapter_container">
      <div className="newChapterForm">
        {IsAdmin && (
          <form onSubmit={(e) => handleSubmit(e)}>
            <label htmlFor="chapterTitle">Titre du chapitre</label>
            <br />
            <input
              type="text"
              name="chapterTitle"
              id="chapterTitle"
              value={newChapter.chapterTitle}
              onChange={(e) => handleChange(e)}
              required
            />
            <br />
            <label htmlFor="chapterdescription">description du chapitre</label>
            <br />
            <input
              type="text"
              name="chapterdescription"
              id="chapterdescription"
              value={newChapter.chapterdescription}
              onChange={(e) => handleChange(e)}
              required
            />
            <br />
            <input type="submit" className="submitNewChapter" value="Valider" />
          </form>
        )}
      </div>
    </div>
  );
};

export default AddChapter;
