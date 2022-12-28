import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../feature/user.slice";
import usersReducer from "../feature/users.slice";
import contentReducer from "../feature/content.slice";
import postReducer from "../feature/post.slice";

export default configureStore({
  reducer: {
    user: userReducer,
    users: usersReducer,
    content: contentReducer,
    post: postReducer,
  },
});
