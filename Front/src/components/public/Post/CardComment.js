import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPostData } from "../../../feature/post.slice";
import { isEmpty, dateParser, timestampParser } from "../../../utils/utils";
import { postService } from "../../../services/post.service";
import EditDeleteComment from "./EditDeleteComment";

const CardComment = ({ post }) => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const userData = useSelector((state) => state.user.user);
  const usersData = useSelector((state) => state.users.users);

  const handleComment = (e) => {
    e.preventDefault();

    if (text) {
      const comment = {
        commenterId: userData._id,
        commenterName: userData.name,
        commenterFirstName: userData.firstName,
        text: text,
      };
      postService.newComment(post._id, comment).then((res) => {
        postService
          .getAllPost()
          .then((res) => {
            setText("");
            dispatch(setPostData(res.data));
          })
          .catch((err) => console.log(err));
      });
    }
  };

  return (
    <div className="comments-container">
      {post.comments.map((comment) => {
        console.log(comment);
        return (
          <div
            className={
              comment.commenterId === userData._id
                ? "comment-container client"
                : "comment-container"
            }
            key={comment._id}
          >
            <div className="left-part-comment"></div>
            <div className="right-part">
              <div className="comment-header">
                <div className="pseudo">
                  <h3>
                    {comment.commenterFirstName} {comment.commenterName}
                  </h3>
                </div>
                <span className="comment-date">
                  {timestampParser(comment.timestamp)}
                </span>
                <p>{comment.text}</p>
                <EditDeleteComment comment={comment} postId={post._id} />
              </div>
            </div>
          </div>
        );
      })}
      {userData._id && (
        <form action="" onSubmit={handleComment} className="comment-form">
          <input
            type="text"
            name="text"
            onChange={(e) => setText(e.target.value)}
            value={text}
            placeholder="Commenter ..."
          />
          <br />
          <input type="submit" value="envoyer" />
        </form>
      )}
    </div>
  );
};

export default CardComment;
