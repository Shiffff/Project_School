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
    putContentData: (state, { payload }) => {
      state.content = state.content.map((contentOne) => {
        if (contentOne._id === payload[0]) {
          return {
            ...contentOne,
            themeTitle: payload[1],
            themedescription: payload[2],
          };
        } else {
          return contentOne;
        }
      });
    },
    deleteContent: (state, { payload }) => {
      state.content = state.content.filter(
        (contentone) => contentone._id !== payload
      );
    },
    setAddChapter: (state, { payload }) => {
      state.content = state.content.map((themeOne) => {
        if (themeOne._id !== payload[0]) return null;

        return themeOne.chapter.push(payload[1]);
      });
    },
  },
});

export const {
  setContentData,
  setAddContent,
  putContentData,
  deleteContent,
  setAddChapter,
} = contentSlice.actions;
export default contentSlice.reducer;
