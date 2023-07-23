import React from 'react';
import ContestCard from './ContestCard';

const LiveContestsPage = ({ contests, handleContestClick }) => {
  const liveContests = contests.filter((contest) => {
    const contestDate = new Date(contest.date);
    const currentDate = new Date();
    return contestDate >= currentDate;
  });

  return (
    <div>
      <h2>Live Contests</h2>
      <p>Explore the ongoing contests and showcase your skills.</p>
      <div className="contest-list">
        {liveContests.map((contest) => (
          <ContestCard key={contest.id} contest={contest} handleContestClick={handleContestClick} />
        ))}
      </div>
      <a href="/contests" className="view-all-link">View All Contests</a>
    </div>
  );
};

export default LiveContestsPage;
