import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { contentService } from "../../services/content.service";

const Content = () => {
  const { id } = useParams();
  console.log(id);
  const location = useLocation();
  const contentData = {
    chapterId: location.state.chapterId,
    lessonId: id,
  };

  contentService
    .putLesson(location.state.themeId, contentData)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => console.log(err));

  return <div>{location.state.themeId}</div>;
};

export default Content;
