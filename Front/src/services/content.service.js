import Axios from "./caller.service";

let createTheme = (theme) => {
  return Axios.post("/content/theme", theme);
};

let getTheme = () => {
  return Axios.get("/content/theme");
};

export const contentService = {
  createTheme,
  getTheme,
};
