import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dateParser, isEmpty } from "../../../utils/utils";
import DeleteCard from "./DeleteCard";
import { postService } from "../../../services/post.service";
import { putPostData } from "../../../feature/post.slice";
import LikeButton from "./LikeButton";
import CardComment from "./CardComment";

const Card = ({ post }) => {
  const [IsAuthor, setIsAuthor] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [showComments, setShowComments] = useState(false);
  const [isUpdated, setIsUpdated] = useState(false);
  const [textUpdate, setTextUpdate] = useState(null);
  const userData = useSelector((state) => state.user.user);
  const usersData = useSelector((state) => state.users.users);
  const dispatch = useDispatch();

  const updateItem = async () => {
    if (textUpdate) {
      postService
        .putPost(post._id, textUpdate)
        .then((res) => {
          dispatch(putPostData([textUpdate, post._id]));
          setIsUpdated(false);
        })
        .catch((err) => console.log("err"));
    } else {
      setIsUpdated(false);
    }
  };

  useEffect(() => {
    const checkAuthor = () => {
      if (userData._id === post.posterId || userData.isAdmin === true) {
        setIsAuthor(true);
      }
    };
    checkAuthor();
  }, [userData, post.posterId]);

  useEffect(() => {
    !isEmpty(usersData[0]) && setIsLoading(false);
  }, [usersData]);

  return (
    <li className="card-container" key={post._id}>
      {isLoading ? (
        <div>Chargement</div>
      ) : (
        <>
          <div className="card-left"></div>
          <div className="card-right">
            <div className="card-header">
              <div className="pseudo">
                <h3>
                  {!isEmpty(usersData[0]) &&
                    usersData
                      .map((user) => {
                        if (user._id === post.posterId)
                          return user.firstName + " " + user.name;
                        else return null;
                      })
                      .join("")}
                </h3>
                {IsAuthor && (
                  <div className="button-container">
                    <div onClick={() => setIsUpdated(!isUpdated)}>
                      <img
                        className="editLogo"
                        src="../edit.svg"
                        alt="edit-logo"
                      ></img>
                    </div>
                    <DeleteCard id={post._id} />
                  </div>
                )}
              </div>
              <span className="datePost">{dateParser(post.createdAt)}</span>
            </div>
            {isUpdated === false && <p>{post.message}</p>}
            {isUpdated && (
              <div className="update-post">
                <textarea
                  defaultValue={post.message}
                  onChange={(e) => setTextUpdate(e.target.value)}
                />
                <div className="button-container">
                  <button className="btn" onClick={updateItem}>
                    Modifier
                  </button>
                </div>
              </div>
            )}
            {post.picture && (
              <img src={post.picture} alt="card-pic" className="card-pic" />
            )}

            <div className="card-footer">
              <div className="comment-icon">
                <img
                  onClick={() => setShowComments(!showComments)}
                  className="comment-icon"
                  src="../comment.svg"
                  alt="comment"
                ></img>
              </div>
              <span>{post.comments.length}</span>
              <LikeButton post={post} />
            </div>
            {showComments && <CardComment post={post} />}
          </div>
        </>
      )}
    </li>
  );
};

export default Card;
