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
    putChapter: (state, { payload }) => {
      state.content = state.content.map((themeOne) => {
        if (themeOne._id === payload[0]) {
          return {
            ...themeOne,
            chapter: themeOne.chapter.map((chapterOne) => {
              if (chapterOne._id === payload[1]) {
                return {
                  ...chapterOne,
                  chapterTitle: payload[2],
                  chapterdescription: payload[3],
                };
              } else {
                return chapterOne;
              }
            }),
          };
        } else {
          return themeOne;
        }
      });
    },
    deleteChapterSlice: (state, { payload }) => {
      state.content = state.content.map((themeOne) => {
        if (themeOne._id === payload[0]) {
          return {
            ...themeOne,
            chapter: themeOne.chapter.filter(
              (chapterOne) => chapterOne._id !== payload[1]
            ),
          };
        } else {
          return themeOne;
        }
      });
    },
    putLesson: (state, { payload }) => {
      state.content = state.content.map((themeOne) => {
        if (themeOne._id === payload[0]) {
          return {
            ...themeOne,
            chapter: themeOne.chapter.map((chapterOne) => {
              if (chapterOne._id === payload[1]) {
                return {
                  ...chapterOne,
                  lessons: chapterOne.lessons.map((lessonOne) => {
                    if (lessonOne._id === payload[2]) {
                      return {
                        ...lessonOne,
                        lessonTitle: payload[3],
                        lessondescription: payload[4],
                      };
                    } else {
                      return lessonOne;
                    }
                  }),
                };
              } else {
                return chapterOne;
              }
            }),
          };
        } else {
          return themeOne;
        }
      });
    },
    deleteLessonSlice: (state, { payload }) => {
      state.content = state.content.map((themeOne) => {
        if (themeOne._id === payload[0]) {
          return {
            ...themeOne,
            chapter: themeOne.chapter.map((chapterOne) => {
              if (chapterOne._id === payload[1]) {
                return {
                  ...chapterOne,
                  lessons: chapterOne.lessons.filter(
                    (lessonOne) => lessonOne._id !== payload[2]
                  ),
                };
              } else {
                return chapterOne;
              }
            }),
          };
        } else {
          return themeOne;
        }
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
  putChapter,
  deleteChapterSlice,
  putLesson,
  deleteLessonSlice,
} = contentSlice.actions;
export default contentSlice.reducer;
