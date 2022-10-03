import Axios from "./caller.service";

let saveToken = (token) => {
  localStorage.setItem("token", token);
};

let logout = () => {
  localStorage.removeItem("token");
};

let isLogged = () => {
  let token = localStorage.getItem("token");
  return !!token;
};

let login = (user) => {
  return Axios.post("/user/login", user);
};

let getToken = () => {
  return localStorage.getItem("token");
};

export const accountService = {
  saveToken,
  logout,
  isLogged,
  login,
  getToken,
};
