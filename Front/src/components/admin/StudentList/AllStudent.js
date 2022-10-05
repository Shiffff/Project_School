import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { dateParser } from "../../../utils/utils";
import { userService } from "../../../services/user.service";
import { deleteStudent } from "../../../feature/users.slice";
import { isEmpty } from "../../../utils/utils";

const AllStudent = () => {
  const usersData = useSelector((state) => state.users.users);
  const dispatch = useDispatch();

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
          {usersData.map((user) => (
            <tr key={user.userName}>
              <td>{user.name}</td>
              <td>{user.firstName}</td>
              <td>{user.userName}</td>
              <td>{user.class}</td>
              <td>
                {(!isEmpty(user.createdAt) && dateParser(user.createdAt)) ||
                  (isEmpty(user.createdAt) && `a l'instant`)}
              </td>
              <td onClick={() => deleteUser(user.userName)}>Suppr</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllStudent;
