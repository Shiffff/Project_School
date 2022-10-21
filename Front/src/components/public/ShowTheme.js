import React, { useEffect } from "react";
import { isEmpty } from "../../utils/utils";
import { useSelector, useDispatch } from "react-redux";
import CardTheme from "./CardTheme";
import { contentService } from "../../services/content.service";
import { setContentData } from "../../feature/content.slice";

const ShowTheme = (props) => {
  const dispatch = useDispatch();
  const contentData = useSelector((state) => state.content.content);

  useEffect(() => {
    contentService
      .getTheme()
      .then((res) => {
        dispatch(setContentData(res.data));
      })
      .catch((err) => console.log(err));
    // eslint-disable-next-line
  }, []);

  return (
    <div className="ShowTheme">
      <ul>
        {!isEmpty(contentData[0]) &&
          contentData.map((theme) => {
            if (theme.class !== props.class) return null;
            return <CardTheme theme={theme} key={theme._id} />;
          })}
      </ul>
    </div>
  );
};

export default ShowTheme;
