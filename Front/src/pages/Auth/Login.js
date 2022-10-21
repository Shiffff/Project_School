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
    document.querySelector(".submitLogin").classList.remove("animationLogin");
    accountService
      .login(user)
      .then((res) => {
        document.querySelector(".errorMessageFetch").innerHTML = "";
        accountService.saveToken(res.data.token);
        window.location = "/home";
      })
      .catch((err) => {
        if (err.response.status === 401) {
          document.querySelector(".errorMessageFetch").innerHTML =
            "Identifiant/mot de passe invalide";
          document
            .querySelector(".submitLogin")
            .classList.add("animationLogin");
        } else {
          document.querySelector(".errorMessageFetch").innerHTML =
            "Maintenance du site";
          document
            .querySelector(".submitLogin")
            .classList.add("animationLogin");
        }
      });
  };

  return (
    <div className="bodyForm">
      <div className="CenterForm">
        <form onSubmit={(e) => handleCheckSubmit(e)}>
          <h1>Connexion</h1>
          <label htmlFor="userName">Identifiant</label>
          <br />
          <input
            type="text"
            name="userName"
            id="userName"
            value={user.userName}
            onChange={(e) => handleChange(e)}
          />
          <br />
          <div className="errorMessageEmail errormsg"></div>
          <br />
          <label htmlFor="text">Mot de passe</label>
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
          <br />
          <div className="buttonContainer">
            <input type="submit" className="submitLogin" value="Se connecter" />
          </div>
        </form>
        <div className="errorMessageFetch errormsg"></div>
      </div>
    </div>
  );
}
