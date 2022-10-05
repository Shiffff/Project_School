import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { dateParser } from "../../../utils/utils";
import { userService } from "../../../services/user.service";
import { deleteStudent } from "../../../feature/users.slice";

const Cinquieme = () => {
  const usersData = useSelector((state) => state.users.users);
  const dispatch = useDispatch();

  const classTrue = usersData.filter((cinquieme) => {
    return cinquieme.class === "5°";
  });

  const deleteUser = (userName) => {
    userService.deleteUser(userName);
    dispatch(deleteStudent(userName));
  };
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Prénom</th>
            <th>Identifiant</th>
            <th>Classe</th>
            <th>Date de création</th>
          </tr>
        </thead>
        <tbody>
          {classTrue.map((user) => (
            <tr key={user.userName}>
              <td>{user.name}</td>
              <td>{user.firstName}</td>
              <td>{user.userName}</td>
              <td>{user.class}</td>
              <td>{dateParser(user.createdAt)}</td>
              <td onClick={() => deleteUser(user.userName)}>Suppr</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Cinquieme;
