import React, { useState } from "react";
import SignInForm from "./SignIn";

const Log = (props) => {
  const [signInModal, setSignInModal] = useState(true);

  const handleModals = (e) => {
    if (e.target.id === "register") {
      setSignInModal(false);
    } else if (e.target.id === "login") {
      setSignInModal(true);
    }
  };

  return (
    <div className="fullLoginPage">
      <div className="connection-form">
        <div className="form-container">
          <ul>
            <li
              onClick={handleModals}
              id="login"
              className={signInModal ? "active-btn" : null}
            >
              Se connecter
            </li>
          </ul>
          {signInModal && <SignInForm />}
        </div>
      </div>
    </div>
  );
};

export default Log;
