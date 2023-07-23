import React, { useState } from "react";
import './PostProjectPage.css';

const PostProjectPage = ({ handleBack, handlePostProject }) => {
  const [projectTitle, setProjectTitle] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [skillsRequired, setSkillsRequired] = useState("");
  const [projectDuration, setProjectDuration] = useState("");
  const [projectCompensation, setProjectCompensation] = useState("");
  const [communicationChannels, setCommunicationChannels] = useState("");
  const [additionalRequirements, setAdditionalRequirements] = useState("");
  const [applicationProcess, setApplicationProcess] = useState("");
  const [contactInformation, setContactInformation] = useState("");
  const [projects, setProjects] = useState([]);
  const [editingIndex, setEditingIndex] = useState(-1);

  const handleProjectTitleChange = (e) => {
    setProjectTitle(e.target.value);
  };

  const handleProjectDescriptionChange = (e) => {
    setProjectDescription(e.target.value);
  };

  const handleSkillsRequiredChange = (e) => {
    setSkillsRequired(e.target.value);
  };

  const handleProjectDurationChange = (e) => {
    setProjectDuration(e.target.value);
  };

  const handleProjectCompensationChange = (e) => {
    setProjectCompensation(e.target.value);
  };

  const handleCommunicationChannelsChange = (e) => {
    setCommunicationChannels(e.target.value);
  };

  const handleAdditionalRequirementsChange = (e) => {
    setAdditionalRequirements(e.target.value);
  };

  const handleApplicationProcessChange = (e) => {
    setApplicationProcess(e.target.value);
  };

  const handleContactInformationChange = (e) => {
    setContactInformation(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const project = {
      title: projectTitle,
      description: projectDescription,
      skillsRequired,
      duration: projectDuration,
      compensation: projectCompensation,
      communicationChannels,
      additionalRequirements,
      applicationProcess,
      contactInformation,
    };

    handlePostProject(project);

    // Add the project to the projects list
    setProjects([...projects, project]);

    // Reset the form
    setProjectTitle("");
    setProjectDescription("");
    setSkillsRequired("");
    setProjectDuration("");
    setProjectCompensation("");
    setCommunicationChannels("");
    setAdditionalRequirements("");
    setApplicationProcess("");
    setContactInformation("");
  };

  const handleUpdateProject = (index) => {
    setEditingIndex(index);
    const projectToUpdate = projects[index];
    setProjectTitle(projectToUpdate.title);
    setProjectDescription(projectToUpdate.description);
    setSkillsRequired(projectToUpdate.skillsRequired);
    setProjectDuration(projectToUpdate.duration);
    setProjectCompensation(projectToUpdate.compensation);
    setCommunicationChannels(projectToUpdate.communicationChannels);
    setAdditionalRequirements(projectToUpdate.additionalRequirements);
    setApplicationProcess(projectToUpdate.applicationProcess);
    setContactInformation(projectToUpdate.contactInformation);
  };

  const handleCancelUpdate = () => {
    setEditingIndex(-1);
    resetForm();
  };

  const handleSaveUpdate = () => {
    const updatedProject = {
      title: projectTitle,
      description: projectDescription,
      skillsRequired,
      duration: projectDuration,
      compensation: projectCompensation,
      communicationChannels,
      additionalRequirements,
      applicationProcess,
      contactInformation,
    };

    const updatedProjects = [...projects];
    updatedProjects[editingIndex] = updatedProject;
    setProjects(updatedProjects);

    setEditingIndex(-1);
    resetForm();
  };

  const resetForm = () => {
    setProjectTitle("");
    setProjectDescription("");
    setSkillsRequired("");
    setProjectDuration("");
    setProjectCompensation("");
    setCommunicationChannels("");
    setAdditionalRequirements("");
    setApplicationProcess("");
    setContactInformation("");
  };

  const handleDeleteProject = (index) => {
    const updatedProjects = [...projects];
    updatedProjects.splice(index, 1);
    setProjects(updatedProjects);
  };

  return (
    <div>
      <h1>Post a Project</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Project Title:
          <input type="text" value={projectTitle} onChange={handleProjectTitleChange} />
        </label>
        <label>
          Project Description:
          <textarea value={projectDescription} onChange={handleProjectDescriptionChange} />
        </label>
        <label>
          Skills Required:
          <input type="text" value={skillsRequired} onChange={handleSkillsRequiredChange} />
        </label>
        <label>
          Project Duration:
          <input type="text" value={projectDuration} onChange={handleProjectDurationChange} />
        </label>
        <label>
          Project Compensation:
          <input type="text" value={projectCompensation} onChange={handleProjectCompensationChange} />
        </label>
        <label>
          Communication Channels:
          <input type="text" value={communicationChannels} onChange={handleCommunicationChannelsChange} />
        </label>
        <label>
          Additional Requirements:
          <input type="text" value={additionalRequirements} onChange={handleAdditionalRequirementsChange} />
        </label>
        <label>
          Application Process:
          <input type="text" value={applicationProcess} onChange={handleApplicationProcessChange} />
        </label>
        <label>
          Contact Information:
          <input type="text" value={contactInformation} onChange={handleContactInformationChange} />
        </label>
        {editingIndex !== -1 ? (
          <>
            <button type="button" onClick={handleSaveUpdate}>Save</button>
            <button type="button" onClick={handleCancelUpdate}>Cancel</button>
          </>
        ) : (
          <button type="submit">Submit</button>
        )}
      </form>
      <button onClick={handleBack}>Back</button>

      <h2>Added Projects:</h2>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>
            <div>
              <h3>{project.title}</h3>
              <p>Description: {project.description}</p>
              <p>Skills Required: {project.skillsRequired}</p>
              <p>Duration: {project.duration}</p>
              <p>Compensation: {project.compensation}</p>
              <p>Communication Channels: {project.communicationChannels}</p>
              <p>Additional Requirements: {project.additionalRequirements}</p>
              <p>Application Process: {project.applicationProcess}</p>
              <p>Contact Information: {project.contactInformation}</p>
              {editingIndex !== index ? (
                <button onClick={() => handleUpdateProject(index)}>Update</button>
              ) : null}
              <button onClick={() => handleDeleteProject(index)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostProjectPage;
