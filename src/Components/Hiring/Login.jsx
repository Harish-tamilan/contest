import React, { useState } from "react";

const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginHandler = ()=>{
    console.log('inside loginhandler');
    props.handleButtonClicked(username, password);
  }


  return (
    <div>
      <div className="form_login">
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
        
        <button id="button_login" onClick={loginHandler}>
          Log Innnn
        </button>
      </div>
    </div>
  );
};

export default Login;
