import React, { useState } from "react";
import Signup from "./Signup";
import HomePage from "./HomePage";


const FirstPage = () => {
  const [inputType, setInputType] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userCredentials, setUserCredentials] = useState([
    {
      username: "",
      password: "",
      emailid: "",
      phoneno: "",
    },
  ]);
  const [isCredentialsCorrect, setIsCredentialsCorrect] = useState(false);

  const handleButtonClicked = (value) => {
    console.log('inside updateUserCredentials of Hiring first page, value is ', value);
  };

  const updateUserCredentials = (user) => {
    console.log('inside updateUserCredentials of Hiring first page, user is ', user);
    // setUserCredentials((prevCredentials) => [...prevCredentials, user]);
  };

  const checkCredentials = (username, password) => {
    console.log('inside checkCredentials in FirstPage, username is ', username, ', password is ', password);
    // const isCredentialsCorrect = userCredentials.some(
    //   (credential) =>
    //     credential.username === username && credential.password === password
    // );
    // setIsCredentialsCorrect(isCredentialsCorrect);
  };

  const handleLogout = () => {
    setIsCredentialsCorrect(false);
    alert("Logged Out");
  };

  const handleLoginButtonClick = (username, password) => {
    console.log('inside handleLoginButtonClick, username : ', username, ', password : ', password);
  };

  const renderContent = () => {
    if (isCredentialsCorrect) {
      return (
        <div>
          <HomePage handleLogout={handleLogout} />
        </div>
      );
    } else if (inputType === "signup") {
      return (
        <div>
          <Signup
            update={updateUserCredentials}
            handleButtonClicked={handleButtonClicked}
          />
        </div>
      );
    } else if (inputType === "login") {
      return (
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
        <button id="button_login" onClick={checkCredentials}>
          Log In
        </button>
      </div>
      );
    } else {
      return (
        <div>
          <button onClick={handleButtonClicked}>Sign Up</button>
          <button onClick={handleLoginButtonClick}>Log In</button>
        </div>
      );
    }
  };

  return <div>{renderContent()}</div>;
};

export default FirstPage;
