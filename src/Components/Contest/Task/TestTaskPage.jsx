import React from 'react';
import './TestTaskPage.css';

const TestTaskPage = ({
  contest,
  mcqAnswers,
  programmingAnswer,
  handleMCQAnswerChange,
  handleProgrammingAnswerChange,
  handleComplete,
}) => {
  const handleMCQChange = (event) => {
    const questionId = parseInt(event.target.name, 10);
    const answer = event.target.value;
    handleMCQAnswerChange(questionId, answer);
  };

  return (
    <div className="test-task-container">
      <h2>Test/Task Page</h2>
      <p>Complete the following questions to finish the test/task.</p>

      <h3>Multiple Choice Questions</h3>
      {contest.mcqQuestions.map((question, index) => (
        <div key={index} className="mcq-question">
          <p>{question}</p>
          <div className="mcq-options">
            {contest.mcqOptions[index].map((option, optionIndex) => (
              <label key={optionIndex}>
                <input
                  type="radio"
                  name={index}
                  value={option}
                  checked={mcqAnswers[index] === option}
                  onChange={handleMCQChange}
                />
                {option}
              </label>
            ))}
          </div>
        </div>
      ))}

      <h3>Programming Question</h3>
      <div className="programming-question">
        <p>{contest.programmingQuestion}</p>
        <textarea
          name="programmingAnswer"
          value={programmingAnswer}
          onChange={handleProgrammingAnswerChange}
        ></textarea>
      </div>

      <button onClick={handleComplete}>Complete</button>
    </div>
  );
};

export default TestTaskPage;
