import React, { useState } from "react";
import "./Update.css";

const UpdateSection = () => {
const [registeredCandidates, setRegisteredCandidates] = useState([
{
id: 1,
name: "John Doe",
email: "john.doe@example.com",
projects: [
{ id: 1, title: "Project 1", description: "Description 1" },
{ id: 2, title: "Project 2", description: "Description 2" },
],
communication: {
mode: "Email",
details: "john.doe@example.com",
},
},
{
id: 2,
name: "Jane Smith",
email: "jane.smith@example.com",
projects: [
{ id: 2, title: "Project 2", description: "Description 2" },
{ id: 3, title: "Project 3", description: "Description 3" },
],
communication: {
mode: "Phone",
details: "123-456-7890",
},
},
{
id: 3,
name: "Michael Johnson",
email: "michael.johnson@example.com",
projects: [
{ id: 1, title: "Project 1", description: "Description 1" },
{ id: 3, title: "Project 3", description: "Description 3" },
],
communication: {
mode: "Email",
details: "michael.johnson@example.com",
},
},
]);

const [attendedCandidates, setAttendedCandidates] = useState([
{
id: 1,
name: "John Doe",
email: "john.doe@example.com",
projects: [
{ id: 1, title: "Project 1", description: "Description 1" },
{ id: 2, title: "Project 2", description: "Description 2" },
],
communication: {
mode: "Email",
details: "john.doe@example.com",
},
},
{
id: 2,
name: "Jane Smith",
email: "jane.smith@example.com",
projects: [
{ id: 2, title: "Project 2", description: "Description 2" },
{ id: 3, title: "Project 3", description: "Description 3" },
],
communication: {
mode: "Phone",
details: "123-456-7890",
},
},
]);

const [passedCandidates, setPassedCandidates] = useState([
{
id: 1,
name: "John Doe",
email: "john.doe@example.com",
projects: [
{ id: 1, title: "Project 1", description: "Description 1" },
],
communication: {
mode: "Email",
details: "john.doe@example.com",
},
},
]);

const [communicatingCandidates, setCommunicatingCandidates] = useState([
{
id: 2,
name: "Jane Smith",
email: "jane.smith@example.com",
projects: [
{ id: 2, title: "Project 2", description: "Description 2" },
],
communication: {
mode: "Phone",
details: "123-456-7890",
},
},
]);

const [selectedUser, setSelectedUser] = useState(null);

const handleUserClick = (user) => {
setSelectedUser(user);
};

const renderUserDetails = () => {
if (selectedUser) {
const { name, email, projects, communication } = selectedUser;
return (
<div>
<h4>User: {name}</h4>
<p>Email: {email}</p>
<h5>Projects:</h5>
{projects.length === 0 ? (
<p>No projects found.</p>
) : (
<ul>
{projects.map((project) => (
<li key={project.id}>
<h6>{project.title}</h6>
<p>{project.description}</p>
</li>
))}
</ul>
)}
<h5>Communication:</h5>
<p>
Mode: {communication.mode}
<br />
Details: {communication.details}
</p>
</div>
);
}
return <p>Select a user to view details.</p>;
};

return (
<div className="Update-section">
<h2>Update Section</h2>
<div className="Update-card">
    <h3>Registered Candidates</h3>
    {registeredCandidates.length === 0 ? (
      <p>No registered candidates.</p>
    ) : (
      <ul>
        {registeredCandidates.map((candidate) => (
          <li
            key={candidate.id}
            onClick={() => handleUserClick(candidate)}
          >
            {candidate.name}
          </li>
        ))}
      </ul>
    )}
  </div>

  <div className="Update-card">
    <h3>Attended Candidates</h3>
    {attendedCandidates.length === 0 ? (
      <p>No attended candidates.</p>
    ) : (
      <ul>
        {attendedCandidates.map((candidate) => (
          <li
            key={candidate.id}
            onClick={() => handleUserClick(candidate)}
          >
            {candidate.name}
          </li>
        ))}
      </ul>
    )}
  </div>

  <div className="Update-card">
    <h3>Passed Candidates</h3>
    {passedCandidates.length === 0 ? (
      <p>No passed candidates.</p>
    ) : (
      <ul>
        {passedCandidates.map((candidate) => (
          <li
            key={candidate.id}
            onClick={() => handleUserClick(candidate)}
          >
            {candidate.name}
          </li>
        ))}
      </ul>
    )}
  </div>

  <div className="Update-card">
    <h3>Communicating Candidates</h3>
    {communicatingCandidates.length === 0 ? (
      <p>No candidates trying to communicate.</p>
    ) : (
      <ul>
        {communicatingCandidates.map((candidate) => (
          <li
            key={candidate.id}
            onClick={() => handleUserClick(candidate)}
          >
            {candidate.name}
          </li>
        ))}
      </ul>
    )}
  </div>

  <div className="user-details">{renderUserDetails()}</div>
</div>
);
};

export default UpdateSection;