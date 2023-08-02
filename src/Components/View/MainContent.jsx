import React from "react";

const MainContent = () => {
  return (
    <div>
      <section className="home" id="home">
        <div className="content">
          <h2>Welcome to the Project Searching Portal</h2>
          <p>
            Thank you for visiting the Project Searching Portal, your platform
            to explore and discover exciting projects. Whether you're a student
            looking for academic projects or a professional seeking new
            opportunities, our portal provides a wide range of projects from
            various domains. Find projects, collaborate with like-minded
            individuals, and enhance your skills.
          </p>
        </div>
      </section>
      <section className="services" id="services">
        <h1 className="service-heading">Our Services</h1>
        <div className="Service-box-container">
          <div className="Service-box">
            <h3>Browse Projects</h3>
            <p>
              Explore a vast collection of projects from different fields and
              domains. Find projects that match your interests and expertise.
            </p>
            <a className="btn">Learn More</a>
          </div>
          <div className="Service-box">
            <h3>Create Projects</h3>
            <p>
              Showcase your skills and knowledge by creating your own projects.
              Share your ideas and attract collaborators to work on innovative
              projects.
            </p>
            <a className="btn">Learn More</a>
          </div>
          <div className="Service-box">
            <h3>Connect and Collaborate</h3>
            <p>
              Network with like-minded individuals and collaborate on exciting
              projects. Build professional relationships and expand your
              opportunities.
            </p>
            <a className="btn">Learn More</a>
          </div>
        </div>
      </section>
      <section className="about-section" id="about">
        <h1 className="about-heading">About Us</h1>
        <div className="row">
          <div className="about-content">
            <h3>Bringing Projects to You</h3>
            <p>
              At the Project Searching Portal, we are dedicated to connecting
              talented individuals with meaningful projects. Our platform aims
              to bridge the gap between project creators and enthusiasts,
              fostering collaboration and innovation. Join us in shaping the
              future through exciting projects.
            </p>
            <a className="btn">Learn More</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainContent;
