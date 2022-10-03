import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { accountService } from "../../services/account_service";

export default function SignUp() {
  let navigate = useNavigate();
  const [user, setUser] = useState({
    userName: "",
    password: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  }

  const handleCheckSubmit = (e) => {
    e.preventDefault();
    accountService
      .login(user)
      .then((res) => {
        document.querySelector(".errorMessageFetch").innerHTML = "";
        accountService.saveToken(res.data.token);
        navigate("/home");
      })
      .catch((err) => {
        if (err.response.status === 401) {
          document.querySelector(".errorMessageFetch").innerHTML =
            "Paires identifiant mot de passe invalide";
        } else {
          document.querySelector(".errorMessageFetch").innerHTML =
            "Site en maintenance";
        }
      });
  };

  return (
    <div className="CenterForm">
      <form onSubmit={(e) => handleCheckSubmit(e)}>
        <label htmlFor="userName">Identifiant *</label>
        <br />
        <input
          placeholder="jean.dupont"
          type="text"
          name="userName"
          id="userName"
          value={user.userName}
          onChange={(e) => handleChange(e)}
        />
        <br />
        <div className="errorMessageEmail errormsg"></div>
        <br />
        <label htmlFor="text">Mot de passe *</label>
        <br />
        <input
          type="password"
          name="password"
          id="password"
          autoComplete="off"
          value={user.password}
          onChange={(e) => handleChange(e)}
        />
        <br />
        <div className="errorMessagePassword errormsg"></div>
        <br />
        <input type="submit" className="submitLogin" value="Se connecter" />
        <br />
        <div className="errorMessageFetch errormsg"></div>
      </form>
    </div>
  );
}
