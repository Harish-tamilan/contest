import React, { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import HomePage from "./HomePage";
import EmployerContent from "./EmployerContent";

const FirstPage = () => {
  const [inputType, setInputType] = useState("");
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
    setInputType(value);
  };

  const updateUserCredentials = (user) => {
    setUserCredentials((prevCredentials) => [...prevCredentials, user]);
  };

  const checkCredentials = (username, password) => {
    const isCredentialsCorrect = userCredentials.some(
      (credential) =>
        credential.username === username && credential.password === password
    );
    setIsCredentialsCorrect(isCredentialsCorrect);
  };

  const handleLogout = () => {
    setIsCredentialsCorrect(false);
    alert("Logged Out");
  };

  const handleLoginButtonClick = () => {
    handleButtonClicked("login");
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
            updateUserCredentials={updateUserCredentials}
            handleButtonClicked={handleButtonClicked}
          />
        </div>
      );
    } else if (inputType === "login") {
      return (
        <div>
          <Login
            checkCredentials={checkCredentials}
            setIsCredentialsCorrect={setIsCredentialsCorrect}
            handleButtonClicked={handleButtonClicked}
          />
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={() => handleButtonClicked("signup")}>Sign Up</button>
          <button onClick={handleLoginButtonClick}>Log In</button>
        </div>
      );
    }
  };

  return <div>{renderContent()}</div>;
};

export default FirstPage;
