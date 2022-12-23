import React from "react";
import { useDispatch } from "react-redux";
import { contentService } from "../../services/content.service";
import { deleteContent } from "../../feature/content.slice";

const DeleteCard = (props) => {
  const dispatch = useDispatch();

  const deletetheme = () => {
    contentService
      .deleteTheme(props.id)
      .then((res) => {
        console.log(res.data);
        dispatch(deleteContent(props.id));
      })
      .catch((err) => console.log(err));
  };

  return (
    <div
      onClick={() => {
        deletetheme();
      }}
    >
      <img className="deletecon" src="../trash.svg" alt="pic"></img>
    </div>
  );
};

export default DeleteCard;
