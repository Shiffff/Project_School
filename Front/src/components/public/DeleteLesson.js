import React from "react";
import { useDispatch } from "react-redux";
import { contentService } from "../../services/content.service";
import { deleteLessonSlice } from "../../feature/content.slice";

const DeleteLesson = ({ chapter, theme, lesson }) => {
  const dispatch = useDispatch();
  const lessonFound = { chapterId: chapter._id, lessonId: lesson._id };

  const handleDeleteLesson = () => {
    contentService
      .deleteLessonService(theme._id, lessonFound)
      .then((res) => {
        console.log(res.data);
        dispatch(deleteLessonSlice([theme._id, chapter._id, lesson._id]));
      })
      .catch((err) => console.log(err));
  };

  return (
    <div
      onClick={() => {
        handleDeleteLesson();
      }}
    >
      <img className="deletecon" src="../trash.svg" alt="pic"></img>
    </div>
  );
};

export default DeleteLesson;
