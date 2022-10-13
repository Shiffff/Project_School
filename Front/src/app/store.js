import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../feature/user.slice";
import usersReducer from "../feature/users.slice";
import contentReducer from "../feature/content.slice";

export default configureStore({
  reducer: {
    user: userReducer,
    users: usersReducer,
    content: contentReducer,
  },
});
