import { createSlice } from "@reduxjs/toolkit";

export const contentSlice = createSlice({
  name: "content",
  initialState: {
    content: {},
  },
  reducers: {
    setContentData: (state, { payload }) => {
      state.content = payload;
    },
    setAddContent: (state, { payload }) => {
      state.content.push(payload);
    },
  },
});

export const { setContentData, setAddContent } = contentSlice.actions;
export default contentSlice.reducer;
