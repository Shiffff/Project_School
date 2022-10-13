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

export const contentService = {
  createTheme,
  getTheme,
  deleteTheme,
  putTheme,
};
