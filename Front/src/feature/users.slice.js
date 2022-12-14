import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: {},
  },
  reducers: {
    setUsersData: (state, { payload }) => {
      state.users = payload;
    },
    setAddStudent: (state, { payload }) => {
      state.users.push(payload);
    },
    deleteStudent: (state, { payload }) => {
      state.users = state.users.filter(
        (student) => student.userName !== payload
      );
    },
  },
});

export const { setUsersData, setAddStudent, deleteStudent } =
  usersSlice.actions;
export default usersSlice.reducer;
