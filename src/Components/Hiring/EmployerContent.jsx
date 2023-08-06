import React, { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import HomePage from "./HomePage";

const EmployerContent = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginButtonClick = () => {
    setShowLogin(true);
    setShowRegister(false);
  };

  const handleRegisterButtonClick = () => {
    setShowLogin(false);
    setShowRegister(true);
  };

  const loginHandler = async (username, password)=>{
    let body = {
      email: username,
      password: password
    }
    body = JSON.stringify(body);
    let response = await fetch('/api/login?type=Manager', {
      method: "POST",
      body: body
    });
    response = await response.json();
    localStorage.setItem('manager', JSON.stringify(response.data));
    if(response.status=='success'){
      setIsLoggedIn(true);
    } else{
      alert("Invalid credentials");
    }
  }

  const logoutHandler = ()=>{
    setIsLoggedIn(false);
  }

  return (
    isLoggedIn ? <HomePage handleLogout={logoutHandler}/> :<div>
      <h2>Welcome, Recruiter!</h2>
      <p>
        Thank you for choosing our platform to post your projects and hire talented candidates. With our platform, you can easily showcase your projects, connect with skilled professionals, and find the perfect candidates for your team.
      </p>
      <h3>Post a Project</h3>
      <p>
        Posting a project is quick and simple. Just provide a detailed description, set your requirements, and attract the right candidates to work on your project.
      </p>
      <h3>Hire Candidates</h3>
      <p>
        Browse through a diverse pool of talented individuals who are eager to contribute to your projects. Review resumes, conduct interviews, and hire the best fit for your team.
      </p>
      <h3>Collaborate and Succeed</h3>
      <p>
        With our platform, you can build a strong network of professionals, collaborate with like-minded individuals, and achieve success by working on innovative projects together.
      </p>
      <div>
        <button onClick={handleLoginButtonClick}>Login</button>
        <button onClick={handleRegisterButtonClick}>Register</button>
      </div>
      {showLogin && <Login handleButtonClicked={loginHandler}/>}
      {showRegister && <Signup />}
    </div>
  );
};

export default EmployerContent;
