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
let createChapter = (_id, theme) => {
  return Axios.post(`/content/chapter/${_id}`, theme);
};
let putChapter = (_id, theme) => {
  return Axios.put(`/content/chapter/${_id}`, theme);
};

export const contentService = {
  createTheme,
  getTheme,
  deleteTheme,
  putTheme,
  createChapter,
  putChapter,
};
