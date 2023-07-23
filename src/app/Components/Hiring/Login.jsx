import React, { useState } from "react";

const Login = ({ checkCredentials, setIsCredentialsCorrect, handleButtonClicked }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const isCorrect = checkCredentials(username, password);
    setIsCredentialsCorrect(isCorrect);
    console.log("Logged in with username:", username, "and password:", password);
    setUsername("");
    setPassword("");
  };

  const handleLoginButtonClick = () => {
    handleButtonClicked("login");
  };

  return (
    <div>
      <form className="form_login" onSubmit={handleLoginSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        
        <button id="button_login" onClick={handleLoginButtonClick} type="submit">
          Log In
        </button>
      </form>
    </div>
  );
};

export default Login;
