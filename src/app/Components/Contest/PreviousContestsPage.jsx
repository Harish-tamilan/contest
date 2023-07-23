import React from 'react';
import ContestCard from './ContestCard';


const PreviousContestsPage = ({ contests, handleContestClick }) => {
  const previousContests = contests.filter((contest) => {
    const contestDate = new Date(contest.date);
    const currentDate = new Date();
    return contestDate < currentDate;
  });

  return (
    <div>
      <h2>Previous Contests</h2>
      <p>Check out the previous contests and their winners.</p>
      <div className="contest-list">
        {previousContests.map((contest) => (
          <ContestCard key={contest.id} contest={contest} handleContestClick={handleContestClick} />
        ))}
      </div>
      <a href="/contests" className="view-all-link">View All Contests</a>
    </div>
  );
};

export default PreviousContestsPage;
