import React, { useState, useEffect } from "react";
import './PostProjectPage.css';
import { Select } from "antd";
import AddContest from "@/Components/Contest/AddContest";

const PostProjectPage = ({ handleBack, handlePostProject }) => {
  // const [projectTitle, setProjectTitle] = useState("");
  // const [projectDescription, setProjectDescription] = useState("");
  // const [skillsRequired, setSkillsRequired] = useState("");
  // const [projectDuration, setProjectDuration] = useState("");
  // const [projectCompensation, setProjectCompensation] = useState("");
  // const [communicationChannels, setCommunicationChannels] = useState("");
  // const [additionalRequirements, setAdditionalRequirements] = useState("");
  // const [applicationProcess, setApplicationProcess] = useState("");
  // const [contactInformation, setContactInformation] = useState("");
  // const [projects, setProjects] = useState([]);
  // const [editingIndex, setEditingIndex] = useState(-1);

  // const handleProjectTitleChange = (e) => {
  //   setProjectTitle(e.target.value);
  // };

  // const handleProjectDescriptionChange = (e) => {
  //   setProjectDescription(e.target.value);
  // };

  // const handleSkillsRequiredChange = (e) => {
  //   setSkillsRequired(e.target.value);
  // };

  // const handleProjectDurationChange = (e) => {
  //   setProjectDuration(e.target.value);
  // };

  // const handleProjectCompensationChange = (e) => {
  //   setProjectCompensation(e.target.value);
  // };

  // const handleCommunicationChannelsChange = (e) => {
  //   setCommunicationChannels(e.target.value);
  // };

  // const handleAdditionalRequirementsChange = (e) => {
  //   setAdditionalRequirements(e.target.value);
  // };

  // const handleApplicationProcessChange = (e) => {
  //   setApplicationProcess(e.target.value);
  // };

  // const handleContactInformationChange = (e) => {
  //   setContactInformation(e.target.value);
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   const project = {
  //     title: projectTitle,
  //     description: projectDescription,
  //     skillsRequired,
  //     duration: projectDuration,
  //     compensation: projectCompensation,
  //     communicationChannels,
  //     additionalRequirements,
  //     applicationProcess,
  //     contactInformation,
  //   };

  //   handlePostProject(project);

  //   // Add the project to the projects list
  //   setProjects([...projects, project]);

  //   // Reset the form
  //   setProjectTitle("");
  //   setProjectDescription("");
  //   setSkillsRequired("");
  //   setProjectDuration("");
  //   setProjectCompensation("");
  //   setCommunicationChannels("");
  //   setAdditionalRequirements("");
  //   setApplicationProcess("");
  //   setContactInformation("");
  // };

  // const handleUpdateProject = (index) => {
  //   setEditingIndex(index);
  //   const projectToUpdate = projects[index];
  //   setProjectTitle(projectToUpdate.title);
  //   setProjectDescription(projectToUpdate.description);
  //   setSkillsRequired(projectToUpdate.skillsRequired);
  //   setProjectDuration(projectToUpdate.duration);
  //   setProjectCompensation(projectToUpdate.compensation);
  //   setCommunicationChannels(projectToUpdate.communicationChannels);
  //   setAdditionalRequirements(projectToUpdate.additionalRequirements);
  //   setApplicationProcess(projectToUpdate.applicationProcess);
  //   setContactInformation(projectToUpdate.contactInformation);
  // };

  // const handleCancelUpdate = () => {
  //   setEditingIndex(-1);
  //   resetForm();
  // };

  // const handleSaveUpdate = () => {
  //   const updatedProject = {
  //     title: projectTitle,
  //     description: projectDescription,
  //     skillsRequired,
  //     duration: projectDuration,
  //     compensation: projectCompensation,
  //     communicationChannels,
  //     additionalRequirements,
  //     applicationProcess,
  //     contactInformation,
  //   };

  //   const updatedProjects = [...projects];
  //   updatedProjects[editingIndex] = updatedProject;
  //   setProjects(updatedProjects);

  //   setEditingIndex(-1);
  //   resetForm();
  // };

  // const resetForm = () => {
  //   setProjectTitle("");
  //   setProjectDescription("");
  //   setSkillsRequired("");
  //   setProjectDuration("");
  //   setProjectCompensation("");
  //   setCommunicationChannels("");
  //   setAdditionalRequirements("");
  //   setApplicationProcess("");
  //   setContactInformation("");
  // };

  // const handleDeleteProject = (index) => {
  //   const updatedProjects = [...projects];
  //   updatedProjects.splice(index, 1);
  //   setProjects(updatedProjects);
  // };

  // return (
  //   <div>
  //     <h1>Post a Project</h1>
  //     <form onSubmit={handleSubmit}>
  //       <label>
  //         Project Title:
  //         <input type="text" value={projectTitle} onChange={handleProjectTitleChange} />
  //       </label>
  //       <label>
  //         Project Description:
  //         <textarea value={projectDescription} onChange={handleProjectDescriptionChange} />
  //       </label>
  //       <label>
  //         Skills Required:
  //         <input type="text" value={skillsRequired} onChange={handleSkillsRequiredChange} />
  //       </label>
  //       <label>
  //         Project Duration:
  //         <input type="text" value={projectDuration} onChange={handleProjectDurationChange} />
  //       </label>
  //       <label>
  //         Project Compensation:
  //         <input type="text" value={projectCompensation} onChange={handleProjectCompensationChange} />
  //       </label>
  //       <label>
  //         Communication Channels:
  //         <input type="text" value={communicationChannels} onChange={handleCommunicationChannelsChange} />
  //       </label>
  //       <label>
  //         Additional Requirements:
  //         <input type="text" value={additionalRequirements} onChange={handleAdditionalRequirementsChange} />
  //       </label>
  //       <label>
  //         Application Process:
  //         <input type="text" value={applicationProcess} onChange={handleApplicationProcessChange} />
  //       </label>
  //       <label>
  //         Contact Information:
  //         <input type="text" value={contactInformation} onChange={handleContactInformationChange} />
  //       </label>
  //       {editingIndex !== -1 ? (
  //         <>
  //           <button type="button" onClick={handleSaveUpdate}>Save</button>
  //           <button type="button" onClick={handleCancelUpdate}>Cancel</button>
  //         </>
  //       ) : (
  //         <button type="submit">Submit</button>
  //       )}
  //     </form>
  //     <button onClick={handleBack}>Back</button>

  //     <h2>Added Projects:</h2>
  //     <ul>
  //       {projects.map((project, index) => (
  //         <li key={index}>
  //           <div>
  //             <h3>{project.title}</h3>
  //             <p>Description: {project.description}</p>
  //             <p>Skills Required: {project.skillsRequired}</p>
  //             <p>Duration: {project.duration}</p>
  //             <p>Compensation: {project.compensation}</p>
  //             <p>Communication Channels: {project.communicationChannels}</p>
  //             <p>Additional Requirements: {project.additionalRequirements}</p>
  //             <p>Application Process: {project.applicationProcess}</p>
  //             <p>Contact Information: {project.contactInformation}</p>
  //             {editingIndex !== index ? (
  //               <button onClick={() => handleUpdateProject(index)}>Update</button>
  //             ) : null}
  //             <button onClick={() => handleDeleteProject(index)}>Delete</button>
  //           </div>
  //         </li>
  //       ))}
  //     </ul>
  //   </div>
  // );
  const [title, setTitle] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [questions, setQuestions] = useState([]);
  const [selectedQuestions, setSelectedQuestions] = useState([]);
  const [description, setDescription] = useState('');

  // Fetch questions from API on component mount
  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    try {
      const response = await fetch('/api/problem/getAll'); // Replace with your API endpoint
      const data = await response.json();
      if (data.status === 'success') setQuestions(data.result);
      else setQuestions([]);
    } catch (error) {
      console.error('Error fetching questions:', error);
    }
  };

  const handleAddContest = async () => {
    try {
      // Validate inputs before making the API call
      if (!title || !startDate || !endDate || selectedQuestions.length === 0) {
        alert('Please fill in all the fields and select at least one question.');
        return;
      }

      let questions = [];
      for(let ques of selectedQuestions){
        let arr = ques.split(":");
        let obj = {
          problem: arr[0],
          problemId: arr[1]
        }
        questions.push(obj);
      }

      let body = {
        title: title,
        description,
        startDate: startDate,
        endDate: endDate,
        questions: questions,
      };

      console.log('body is ', body);

      // Make the API call to add the contest
        let response = await fetch('/api/contest/add', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(body),
        });
        response = response.json();
        if (response.status === 200) {
          alert('Contest added successfully!');
          // Reset the form after successful addition
          setTitle('');
          setStartDate('');
          setEndDate('');
          setSelectedQuestions([]);
        } else {
          const data = await response.json();
          alert('Failed to add contest. Error: ' + data.error);
        }
    } catch (error) {
      console.error('Error adding contest:', error);
    }
  };

  const onChangeHandler = (e) => {
    console.log('inside onChangeHandler, ', JSON.parse(e.target.value));
    console.log('keys, ', Object.keys(e.target));
  }

  const handleChange = (ev)=>{
    console.log('ev, ', ev);
    setSelectedQuestions(ev);
  }

  const fetchOptions = ()=>{
    let options = [];
    for(let question of questions){
      options.push({
        label: question.problem,
        value: question._id+":"+question.problemId
      })
    }
    return options;
  }

  return (
    <div>
      <h2>Add Contest</h2>
      <label>
        Title:
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </label>
      <br />
      <label>
        Description:
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
      </label>
      <br />
      <label>
        Start Date:
        <input type="text" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
      </label>
      <br />
      <label>
        End Date:
        <input type="text" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
      </label>
      <br />
      <div>
      Questions:
        <Select
          mode="multiple"
          allowClear
          style={{
            width: '100%',
          }}
          placeholder="Please select"
          defaultValue={[]}
          onChange={handleChange}
          options={fetchOptions()}
        />
      </div>
      <br />
      <button onClick={handleAddContest}>Add Contest</button>
    </div>
  );
};

export default PostProjectPage;
