import React, { useState } from "react";

const Login = ({ checkCredentials }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    checkCredentials(username, password);
    console.log(
      "Logged in with username:",
      username,
      "and password:",
      password
    );
    setUsername("");
    setPassword("");
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
        <button id="button_login" type="submit" >
          Log In
        </button>
      </form>
    </div>
  );
};

export default Login;
