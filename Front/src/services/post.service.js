import Axios from "./caller.service";

let createPost = (userID, post) => {
  return Axios.post(`/post/post/${userID}`, post);
};
let getAllPost = () => {
  return Axios.get(`/post/posts`);
};
let deletePost = (postID) => {
  return Axios.delete(`/post/post/${postID}`);
};
let putPost = (postID, textUpdate) => {
  return Axios.put(`/post/${postID}`, { message: textUpdate });
};
let sendLike = (postID, userDataID) => {
  return Axios.put(`/post/like/${postID}`, { id: userDataID });
};
let sendUnlike = (postID, userDataID) => {
  return Axios.put(`/post/unlike/${postID}`, { id: userDataID });
};
let newComment = (postID, comment) => {
  return Axios.post(`/post/comment/${postID}`, comment);
};
let putComment = (postID, comment) => {
  return Axios.put(`/post/comment/${postID}`, comment);
};
let deleteComment = (postID, comment) => {
  return Axios.put(`/post/deletecomment/${postID}`, comment);
};

export const postService = {
  createPost,
  getAllPost,
  deletePost,
  putPost,
  sendLike,
  sendUnlike,
  newComment,
  putComment,
  deleteComment,
};
