import Axios from "./caller.service";

let getAllUsers = () => {
  return Axios.get("/user/allusers");
};

let getUser = () => {
  return Axios.get("/user/user");
};

let createUser = (user) => {
  return Axios.post("/user/signup", user);
};

export const userService = {
  getAllUsers,
  getUser,
  createUser,
};
