import React, { useState } from "react";
import NewStudent from "../../../components/admin/NewStudent";
import { useSelector, useDispatch } from "react-redux";
import { dateParser } from "../../../utils/utils";
import { userService } from "../../../services/user.service";
import { deleteStudent } from "../../../feature/users.slice";
import { isEmpty } from "../../../utils/utils";

const ListStudent = () => {
  const dispatch = useDispatch();
  const [showNewStudent, setshowNewStudent] = useState(false);
  const usersData = useSelector((state) => state.users.users);

  const deleteUser = (userName) => {
    userService.deleteUser(userName);
    dispatch(deleteStudent(userName));
  };

  return (
    <div className="ListStudent_container">
      <div onClick={() => setshowNewStudent(!showNewStudent)}>New student?</div>
      {showNewStudent && <NewStudent />}
      <div className="arrayStudent">
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
                <td>{dateParser(user.createdAt)}</td>
                <td onClick={() => deleteUser(user.userName)}>Suppr</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListStudent;
