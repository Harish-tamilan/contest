import React, { useState } from 'react';
import './ContestDetailsPage.css';
import TestTaskPage from './Task/TestTaskPage';

const ContestDetailsPage = ({ handleBack }) => {
  const [registrationData, setRegistrationData] = useState({
    name: '',
    email: '',
    country: '',
    skills: '',
    gender: '',
    location: '',
    mcqAnswers: [],
    programmingAnswer: '',
  });
  const [isRegistered, setIsRegistered] = useState(false);

  const handleInputChange = (event) => {
    setRegistrationData({
      ...registrationData,
      [event.target.name]: event.target.value,
    });
  };

  const handleMCQAnswerChange = (questionId, answer) => {
    const updatedAnswers = [...registrationData.mcqAnswers];
    updatedAnswers[questionId] = answer;
    setRegistrationData({
      ...registrationData,
      mcqAnswers: updatedAnswers,
    });
  };

  const handleRegistration = () => {
    // Perform registration logic here
   
  };

  const handleTestTaskComplete = () => {
    setIsRegistered(false);
    // Perform any necessary actions or logic after test/task completion
  }

  const contest = {
    id: 1,
    title: "Programming Contest",
    description: "Participate in the programming contest and showcase your skills.",
    details: "Join the programming contest to solve challenging problems and compete with other participants.",
    timeline: "Start Date: 2023-07-15, End Date: 2023-07-20",
    prizes: "1st Prize: $1000, 2nd Prize: $500, 3rd Prize: $250",
    submissions: "Submit your solutions by the end date of the contest.",
    leaderboard: "Check the leaderboard to see your rank and progress.",
    Updates: "Receive updates and Updates regarding the contest.",
    updates: "Stay updated with the latest announcements and changes.",
    mcqQuestions: [
      "What is the capital of France?",
      "Who wrote the novel 'Pride and Prejudice'?",
    ],
    mcqOptions: [
      ["Paris", "London", "Berlin", "Madrid"],
      ["Jane Austen", "Charlotte Bronte", "Charles Dickens", "Mark Twain"],
    ],
    programmingQuestion: "Write a program to find the factorial of a number.",
  };

  return (
    <div className="contest-details-container">
      {!isRegistered ? (
        <>
          <h2>Challenge Title: {contest.title}</h2>
          <p>Challenge Description: {contest.description}</p>
          <p>Challenge Details: {contest.details}</p>
          <p>Challenge Timeline: {contest.timeline}</p>
          <p>Challenge Prizes: {contest.prizes}</p>
          <p>Challenge Submissions: {contest.submissions}</p>
          <p>Leaderboard: {contest.leaderboard}</p>
          <p>Updates: {contest.Updates}</p>
          <p>Updates and Announcements: {contest.updates}</p>

          <form>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={registrationData.name}
                onChange={handleInputChange}
              />
            </label>
            <br />
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={registrationData.email}
                onChange={handleInputChange}
              />
            </label>
            <br />
            <label>
              Country:
              <input
                type="text"
                name="country"
                value={registrationData.country}
                onChange={handleInputChange}
              />
            </label>
            <br />
            <label>
              Skills:
              <input
                type="text"
                name="skills"
                value={registrationData.skills}
                onChange={handleInputChange}
              />
            </label>
            <br />
            <label>
              Gender:
              <select
                name="gender"
                value={registrationData.gender}
                onChange={handleInputChange}
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </label>
            <br />
            <label>
              Location:
              <input
                type="text"
                name="location"
                value={registrationData.location}
                onChange={handleInputChange}
              />
            </label>
            <br />
            <button type="button" onClick={handleRegistration}>
              Register
            </button>
            <button type="button" onClick={handleBack}>
              Back
            </button>
          </form>
        </>
      ) : (
        <TestTaskPage
          contest={contest}
          mcqAnswers={registrationData.mcqAnswers}
          programmingAnswer={registrationData.programmingAnswer}
          handleMCQAnswerChange={handleMCQAnswerChange}
          handleProgrammingAnswerChange={handleInputChange}
          handleComplete={handleTestTaskComplete}
        />
      )}
    </div>
  );
};

export default ContestDetailsPage;
