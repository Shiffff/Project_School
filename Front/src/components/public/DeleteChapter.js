import React from "react";
import { useDispatch } from "react-redux";
import { contentService } from "../../services/content.service";
import { deleteChapterSlice } from "../../feature/content.slice";

const DeleteChapter = ({ chapter, theme }) => {
  const dispatch = useDispatch();
  const chapterId = { chapterId: chapter._id };

  const handleDeleteChapter = () => {
    contentService
      .deleteChapterService(theme._id, chapterId)
      .then((res) => {
        console.log(res.data);
        dispatch(deleteChapterSlice([theme._id, chapter._id]));
      })
      .catch((err) => console.log(err));
  };

  return (
    <div
      onClick={() => {
        handleDeleteChapter();
      }}
    >
      delete2
    </div>
  );
};

export default DeleteChapter;
