import Axios from "./caller.service";

let createTheme = (theme) => {
  return Axios.post("/content/theme", theme);
};

let getTheme = () => {
  return Axios.get("/content/theme");
};
let putTheme = (_id, newTheme) => {
  return Axios.put(`/content/theme/${_id}`, newTheme);
};
let deleteTheme = (_id) => {
  return Axios.delete(`/content/theme/${_id}`);
};
let createChapter = (_id, chapter) => {
  return Axios.post(`/content/chapter/${_id}`, chapter);
};
let putChapter = (_id, chapter) => {
  return Axios.put(`/content/chapter/${_id}`, chapter);
};
let deleteChapterService = (_id, chapter) => {
  return Axios.put(`/content/deletechapter/${_id}`, chapter);
};
let createLesson = (_id, lesson) => {
  return Axios.post(`/content/lessons/${_id}`, lesson);
};
let putLesson = (_id, chapter) => {
  return Axios.put(`/content/lessons/${_id}`, chapter);
};
let deleteLessonService = (_id, lesson) => {
  return Axios.put(`/content/deletelessons/${_id}`, lesson);
};
export const contentService = {
  createTheme,
  getTheme,
  deleteTheme,
  putTheme,
  createChapter,
  putChapter,
  deleteChapterService,
  createLesson,
  putLesson,
  deleteLessonService,
};
