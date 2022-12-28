import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLikePost, setUnLikePost } from "../../../feature/post.slice";
import { postService } from "../../../services/post.service";

const LikeButton = ({ post }) => {
  const dispatch = useDispatch();
  const [liked, setLiked] = useState(false);
  const userData = useSelector((state) => state.user.user);

  const like = () => {
    postService
      .sendLike(post._id, userData._id)
      .then((res) => {
        dispatch(setLikePost([userData._id, post._id]));
        setLiked(!liked);
      })
      .catch((err) => console.log("err"));
  };

  const unlike = () => {
    postService
      .sendUnlike(post._id, userData._id)
      .then((res) => {
        dispatch(setUnLikePost([userData._id, post._id]));
        setLiked(!liked);
      })
      .catch((err) => console.log("err"));
  };

  useEffect(() => {
    if (post.likers.includes(userData._id)) setLiked(true);
  }, [userData, post.likers, liked]);

  return (
    <div className="like-container">
      {liked === false && (
        <img
          className="unfollowPost"
          src="../heart.svg"
          onClick={like}
          alt="like"
        ></img>
      )}
      {liked === true && (
        <img
          className="unfollowPost"
          src="../heart-filled.svg"
          onClick={unlike}
          alt="unlike"
        ></img>
      )}
      <span>{post.likers.length}</span>
    </div>
  );
};
export default LikeButton;
