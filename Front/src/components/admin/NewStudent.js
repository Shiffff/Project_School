import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setAddStudent } from "../../feature/users.slice";
import { userService } from "../../services/user.service";

const NewStudent = () => {
  const dispatch = useDispatch();

  const [student, setStudent] = useState({
    name: "",
    firstName: "",
    userName: "",
    password: "",
    class: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setStudent({ ...student, [name]: value });
  }

  const handleStudentSubmit = (e) => {
    e.preventDefault();
    userService
      .createUser(student)
      .then((res) => {
        document.querySelector(".errorMessageFetch").innerHTML =
          "Etudiant crée";
      })
      .catch((err) => console.log(err));
    dispatch(setAddStudent(student));
  };

  return (
    <div className="studentForm">
      <form onSubmit={(e) => handleStudentSubmit(e)}>
        <label htmlFor="name">Nom *</label>
        <br />
        <input
          placeholder="Jean"
          type="text"
          name="name"
          id="name"
          value={student.name}
          onChange={(e) => handleChange(e)}
        />
        <br />
        <label htmlFor="firstName">Prénom *</label>
        <br />
        <input
          placeholder="Dupont"
          type="text"
          name="firstName"
          id="firstName"
          value={student.firstName}
          onChange={(e) => handleChange(e)}
        />
        <br />
        <label htmlFor="email">Idenfiant *</label>
        <br />
        <input
          placeholder="jean.dupont"
          type="text"
          name="userName"
          id="userName"
          value={student.userName}
          onChange={(e) => handleChange(e)}
        />
        <br />
        <label htmlFor="text">Mot de passe *</label>
        <br />
        <input
          placeholder=""
          type="password"
          name="password"
          autoComplete="off"
          id="password"
          value={student.password}
          onChange={(e) => handleChange(e)}
        />
        <br />
        <label htmlFor="class">Classe</label>
        <select
          name="class"
          id="class"
          value={student.class}
          onChange={(e) => handleChange(e)}
        >
          <option value="">--Please choose an option--</option>
          <option value="6°">6°</option>
          <option value="5°">5°</option>
          <option value="4°">4°</option>
          <option value="3°">3°</option>
          <option value="2°">2°</option>
          <option value="1°es">1°es</option>
          <option value="1°spe">1°spe</option>
          <option value="T°es">T°es</option>
          <option value="T°spe">T°spe</option>
        </select>

        <input type="submit" className="submitLogin" value="S'inscrire" />
        <br />
        <div className="errorMessageFetch"></div>
      </form>
    </div>
  );
};

export default NewStudent;
