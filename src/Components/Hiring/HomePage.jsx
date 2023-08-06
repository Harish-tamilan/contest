import React, { useState } from "react";
import "./HomePage.css";
import PostProjectPage from "./Navbar/PostProjectPage";
import ProfilePage from "./Navbar/Profile";
import UpdatePage from "./Navbar/Update";
import InterviewPage from "./Navbar/InterviewPage";
import NotificationPage from "./Navbar/Notification";

const HomePage = ({ handleLogout }) => {
  const [activePage, setActivePage] = useState("dashboard");
  const [projects, setProjects] = useState([]);
  const [profileData, setProfileData] = useState({
    recruiterName: "John Doe",
    recruiterTitle: "Recruiter",
    recruiterBio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    emailAddress: "john.doe@example.com",
    phoneNumber: "123-456-7890",
    linkedinProfile: "https://www.linkedin.com/in/johndoe/",
    companyName: "ABC Company",
    companyWebsite: "https://www.example.com",
  });

  const handlePostProject = (project) => {
    setProjects([...projects, project]);
  };

  const handleBack = () => {
    setActivePage("dashboard");
  };

  const handleProfileClick = (event) => {
    event.preventDefault();
    setActivePage("profile");
  };

  const handleUpdatesClick = (event) => {
    event.preventDefault();
    setActivePage("Updates");
  };

  const handleInterviewClick = (event) => {
    event.preventDefault();
    setActivePage("Interview");
  };

  const handleNotificationClick = (event) => {
    event.preventDefault();
    setActivePage("Notification");
  };

  const renderContent = () => {
    if (activePage === "dashboard") {
      return (
        <div>
          <h1 className="dashboard-title">Candidate Dashboard</h1>
          <div className="dashboard-content">
            <div className="dashboard-stat">
              <h2 className="dashboard-stat-number">{projects.length}</h2>
              <p className="dashboard-stat-label">Projects Uploaded</p>
            </div>
            <div className="dashboard-stat">
        
            </div>
          </div>
          <div className="project-list">
            {projects.map((project, index) => (
              <div
                key={index}
                className="project-box"
                onClick={() => handleProjectClick(project)}
              >
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      );
    } else if (activePage === "postProject") {
      return (
        <PostProjectPage
          handleBack={handleBack}
          handlePostProject={handlePostProject}
        />
      );
    } else if (activePage === "profile") {
      return <ProfilePage profileData={profileData} />;
    } else if (activePage === "Updates") {
      return <UpdatePage />;
    } else if (activePage === "Interview") {
      return <InterviewPage />;
    } else if (activePage === "Notification") {
      return <NotificationPage />;
    }
  };

  const handleNavbarClick = (page) => {
    setActivePage(page);
  };

  const handleHomeClick = (event) => {
    event.preventDefault();
    handleNavbarClick("dashboard");
  };

  const handleProjectClick = (project) => {
    setActivePage("postProject");
    handlePostProject(project);
  };

  return (
    <div>
      <nav className="navbar">
        <ul>
          <li>
            <a href="/" onClick={handleHomeClick}>
              Home
            </a>
          </li>
          <li>
            <button onClick={() => handleNavbarClick("postProject")}>
              Post
            </button>
          </li>
          <li>
            <a href="/Updates" onClick={handleUpdatesClick}>
              Update
            </a>
          </li>
          <li>
            <a href="/about" onClick={handleProfileClick}>
              Profile
            </a>
          </li>
          <li>
            <span onClick={handleLogout}>
              Logout
            </span>
          </li>
        </ul>
      </nav>
      <div className="container">{renderContent()}</div>
      
    </div>
  );
};

export default HomePage;
