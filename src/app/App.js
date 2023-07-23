import React, { useState } from "react";
import "./App.css";
import FirstPage from "./Components/Participant/FirstPage";
import SupportPage from "./Components/View/Support";

function App() {
  // const [currentPage, setCurrentPage] = useState("home");

  // const handleNavClick = (page) => {
  //   setCurrentPage(page);
  // };

  // const renderContent = () => {
  //   switch (currentPage) {
  //     case "home":
  //       return <FirstPage />;
  //     case "support":
  //       return <SupportPage />;
  //     default:
  //       return null;
  //   }
  // };

  return (
    <div className="App">
     
      {/* <div id="header">
        <h1>Welcome to the Project portal</h1>
        <div id="header_redirection">
          <nav className="nav_bar">
            <button onClick={() => handleNavClick("home")}>
              <a href="#home">Home</a>
            </button>

            <button>
              <a href="#services">Services</a>
            </button>
            <button onClick={() => handleNavClick("support")}>
              <a href="#support">Support</a>
            </button>
            <button>
              <a href="#about">About</a>
            </button>
          </nav>
        </div>
      </div>
  {renderContent()} */}
  <FirstPage/>
    </div>
  );
}

export default App;
