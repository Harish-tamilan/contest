import React, { useState } from "react";
import "./Styles.css";
import Signup from "./Signup";
import Login from "./Login";
import MainContent from "../View/MainContent";
import HomePage from "./HomePage";
import EmployerContent from "../Hiring/EmployerContent";



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

  const renderContent = () => {
    if (isCredentialsCorrect) {
      return (
        <div>
          <HomePage handleLogout={handleLogout} />
        </div>
      );
    } else if (inputType === "") {
      return (
        <div>
          <nav>
            <button onClick={() => handleButtonClicked("employer")}>
              Employer
            </button>
          </nav>
          <div className="landing_login">
            <div className="login_credentials">
              <h1>Welcome to the Project portal</h1>
              <p>Login using your credentials:</p>
              <button
                id="button_login"
                value="login"
                onClick={() => handleButtonClicked("login")}
              >
                Login
              </button>
              <br />
              <p>Create an account:</p>
              <button
                id="button_signup"
                value="signup"
                onClick={() => handleButtonClicked("signup")}
              >
                Signup
              </button>
            </div>
            <MainContent handleButtonClicked={handleButtonClicked} />
          </div>
        </div>
      );
    } else if (inputType === "signup") {
      return (
        <div>
          <nav>
            <button onClick={() => handleButtonClicked("employer")}>
              Employer
            </button>
          </nav>
          <Signup
            updateUserCredentials={updateUserCredentials}
            handleButtonClicked={handleButtonClicked}
          />
          <button
            value=""
            id="button_signup_back"
            onClick={() => handleButtonClicked("")}
          >
            Back
          </button>
        </div>
      );
    } else if (inputType === "login") {
      return (
        <div>
          <nav>
            <button onClick={() => handleButtonClicked("employer")}>
              Employer
            </button>
          </nav>
          <Login
            checkCredentials={checkCredentials}
            handleButtonClicked={handleButtonClicked}
          />
          <button
            id="button_back"
            value=""
            onClick={() => handleButtonClicked("")}
          >
            Back
          </button>
        </div>
      );
    } else if (inputType === "employer") {
      return (
        <div>
          <nav>
            <button onClick={() => handleButtonClicked("employer")}>
              Employer
            </button>
          </nav>
          <EmployerContent handleButtonClicked={handleButtonClicked} />
        </div>
      );
    }
  };

  return <div>{renderContent()}</div>;
};

export default FirstPage;
