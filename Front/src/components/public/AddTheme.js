import React, { useEffect, useState } from "react";
import { contentService } from "../../services/content.service";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setContentData } from "../../feature/content.slice";

const AddTheme = (props) => {
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

  const [newTheme, setnewTheme] = useState({
    userThemeId: userData._id,
    themeTitle: "",
    themedescription: "",
    class: props.class,
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setnewTheme({ ...newTheme, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    contentService
      .createTheme(newTheme)
      .then(() => {
        contentService
          .getTheme()
          .then((res) => {
            dispatch(setContentData(res.data));
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="addTheme_container">
      <div className="newThemeForm">
        {IsAdmin && (
          <form onSubmit={(e) => handleSubmit(e)}>
            <label htmlFor="themeTitle">Titre du thème</label>
            <br />
            <input
              type="text"
              name="themeTitle"
              id="themeTitle"
              value={newTheme.themeTitle}
              onChange={(e) => handleChange(e)}
            />
            <br />
            <label htmlFor="themedescription">description du theme</label>
            <br />
            <input
              type="text"
              name="themedescription"
              id="themedescription"
              value={newTheme.themedescription}
              onChange={(e) => handleChange(e)}
            />
            <br />
            <input type="submit" className="submitNewTheme" value="Valider" />
          </form>
        )}
      </div>
    </div>
  );
};

export default AddTheme;
