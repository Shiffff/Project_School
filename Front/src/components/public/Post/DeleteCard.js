import React from "react";
import { useDispatch } from "react-redux";
import { deletePost } from "../../../feature/post.slice";
import { postService } from "../../../services/post.service";

const DeleteCard = (props) => {
  const dispatch = useDispatch();

  const deleteQuote = () =>
    postService
      .deletePost(props.id)
      .then((res) => {
        dispatch(deletePost(props.id));
      })
      .catch((err) => console.log("err"));

  return (
    <div
      onClick={() => {
        if (window.confirm("Voulez-vous supprimer cet article ?")) {
          deleteQuote();
        }
      }}
    >
      <img className="unfollowPost" src="../trash.svg" alt="delete"></img>
    </div>
  );
};

export default DeleteCard;
