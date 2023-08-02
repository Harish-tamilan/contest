import React, { useState } from "react";
import "./InterviewPage.css";

const InterviewPage = () => {
    const passedCandidates = [
        { id: 1, name: "John Doe" },
        { id: 2, name: "Jane Smith" },
      ];
  const [interviews, setInterviews] = useState([]);

  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [interviewDate, setInterviewDate] = useState("");
  const [communication, setCommunication] = useState("");
  const [offerLetter, setOfferLetter] = useState("");
  const [rejectionReason, setRejectionReason] = useState("");
  const [joiningDate, setJoiningDate] = useState("");

  const handleCandidateClick = (candidate) => {
    setSelectedCandidate(candidate);
    setInterviewDate("");
    setCommunication("");
    setOfferLetter("");
    setRejectionReason("");
    setJoiningDate("");
  };

  const handleScheduleInterview = () => {
    if (selectedCandidate && interviewDate) {
      const newInterview = {
        candidate: selectedCandidate,
        interviewDate,
        communication,
        offerLetter,
        rejectionReason,
        joiningDate,
      };

      setInterviews([...interviews, newInterview]);

      setSelectedCandidate(null);
      setInterviewDate("");
      setCommunication("");
      setOfferLetter("");
      setRejectionReason("");
      setJoiningDate("");
    }
  };

  return (
    <div className="InterviewPage">
      <h2>Interview Page</h2>

      <div className="candidate-list">
        <h3>Passed Candidates</h3>
        {passedCandidates.length === 0 ? (
          <p>No passed candidates.</p>
        ) : (
          <ul>
            {passedCandidates.map((candidate) => (
              <li
                key={candidate.id}
                onClick={() => handleCandidateClick(candidate)}
              >
                {candidate.name}
              </li>
            ))}
          </ul>
        )}
      </div>

      {selectedCandidate && (
        <div className="interview-form">
          <h3>Selected Candidate: {selectedCandidate.name}</h3>
          <label>
            Interview Date:
            <input
              type="date"
              value={interviewDate}
              onChange={(e) => setInterviewDate(e.target.value)}
            />
          </label>
          <label>
            Communication:
            <textarea
              value={communication}
              onChange={(e) => setCommunication(e.target.value)}
            ></textarea>
          </label>
          <label>
            Offer Letter:
            <textarea
              value={offerLetter}
              onChange={(e) => setOfferLetter(e.target.value)}
            ></textarea>
          </label>
          <label>
            Rejection Reason:
            <textarea
              value={rejectionReason}
              onChange={(e) => setRejectionReason(e.target.value)}
            ></textarea>
          </label>
          <label>
            Joining Date:
            <input
              type="date"
              value={joiningDate}
              onChange={(e) => setJoiningDate(e.target.value)}
            />
          </label>
          <button onClick={handleScheduleInterview}>Schedule Interview</button>
        </div>
      )}

      <div className="interview-list">
        <h3>Scheduled Interviews</h3>
        {interviews.length === 0 ? (
          <p>No scheduled interviews.</p>
        ) : (
          <ul>
            {interviews.map((interview, index) => (
              <li key={index}>
                <h4>Candidate: {interview.candidate.name}</h4>
                <p>Interview Date: {interview.interviewDate}</p>
                <p>Communication: {interview.communication}</p>
                <p>Offer Letter: {interview.offerLetter}</p>
                <p>Rejection Reason: {interview.rejectionReason}</p>
                <p>Joining Date: {interview.joiningDate}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default InterviewPage;
