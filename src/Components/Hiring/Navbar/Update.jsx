// frontend/components/SubmissionList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SubmissionList = () => {
  const [contests, setContests] = useState([]);
  const [selectedContest, setSelectedContest] = useState(null);

  useEffect(() => {
    // Fetch all submissions from the backend API
    axios.get('/api/user/contest/getAllSubmissions').then((response) => {
      console.log('response of getAllSubmissions, ', response.data);
      setContests(response.data);
    });
  }, []);

  const handleContestClick = (contestId) => {
    console.log('inside handleContestClick, contestId is ', contestId);
    setSelectedContest(contestId);
  };

  // Function to filter registered users
  const getRegisteredUsers = () => {
    console.log('inside getRegisteredUsers, selectedContest is ', selectedContest);
    let registeredUsers = contests.filter((contest) => {
      console.log('contest, ', contest);
      return contest.contest._id === selectedContest && !contest.percentage
    });
    console.log('registeredUsers, ', registeredUsers);
    return registeredUsers;
  };

  // Function to filter attempted users
  const getAttemptedUsers = () => {
    console.log('inside getAttemptedUsers, selectedContest is ', selectedContest);
    let attemptedUsers = contests.filter((contest) => { console.log('contest, ', contest); return contest.contest._id === selectedContest && contest.percentage });
    console.log('attemptedUsers, ', attemptedUsers);
    return attemptedUsers;
  };

  // Function to filter passed users
  const getPassedUsers = () => {
    console.log('inside getPassedUsers, selectedContest is ', selectedContest);
    let passedUsers = contests.filter(
      (contest) => {
        console.log('contest, ', contest);
        return contest.contest._id === selectedContest && contest.percentage && contest.percentage >= 50
      });
    console.log('passedUsers, ', passedUsers);
    return passedUsers;
  };

  return (
    <div>
      <h2 style={{ marginBottom: '1rem' }}>List of Contests</h2>
      <ul className="contest-list">
        {contests.map((contest) => (
          <li
            key={contest._id}
            onClick={() => handleContestClick(contest.contest._id)}
            className={selectedContest === contest._id ? 'active' : ''}
          >
            {contest.contest.title}
          </li>
        ))}
      </ul>

      {selectedContest && (
        <div>
          <h3 style={{ marginTop: '1.5rem', marginBottom: '1rem' }}>
            Selected Contest: {contests.find((c) => c.contest._id === selectedContest).contest.title}
          </h3>
          <div className="user-details">
            <div className="user-group">
              <h4>Registered Users:</h4>
              <ul>
                {getRegisteredUsers().map((contest) =>
                  <li key={contest.user._id}>
                    {contest.user.name} (Percentage: {contest.percentage || 'Not attempted'})
                  </li>

                )}
              </ul>
            </div>
            <div className="user-group">
              <h4>Attempted Users:</h4>
              <ul>
                {getAttemptedUsers().map((contest) =>
                  <li key={contest.user._id}>
                    {contest.user.name} (Percentage: {contest.percentage || 'Not attempted'})
                  </li>
                )}
              </ul>
            </div>
            <div className="user-group">
              <h4>Passed Users:</h4>
              <ul>
                {getPassedUsers().map((contest) =>
                  <li key={contest.user._id}>
                    {contest.user.name} (Percentage: {contest.percentage})
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .contest-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .contest-list li {
          cursor: pointer;
          padding: 0.5rem;
          border: 1px solid #ddd;
          border-radius: 4px;
          margin-bottom: 0.5rem;
          background-color: #f9f9f9;
          transition: background-color 0.2s;
        }

        .contest-list li.active {
          background-color: #007bff;
          color: #fff;
        }

        .user-details {
          display: flex;
          margin-top: 1rem;
        }

        .user-group {
          flex: 1;
          padding: 1rem;
          border: 1px solid #ddd;
          border-radius: 4px;
          margin-right: 1rem;
          background-color: #f9f9f9;
        }

        .user-group ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .user-group li {
          margin-bottom: 0.5rem;
        }
      `}</style>
    </div>
  );
};

export default SubmissionList;
