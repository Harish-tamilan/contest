import React from 'react';
import ContestCard from './ContestCard';

const LiveContestsPage = ({ contests, handleContestClick }) => {
  return (
    <div>
      <h2>Live Contests</h2>
      <p>Explore the ongoing contests and showcase your skills.</p>
      <div className="contest-list">
        {contests.map((contest) => (
          <ContestCard key={contest.id} contest={contest} handleContestClick={()=>handleContestClick(contest._id)} />
        ))}
      </div>
      <a href="/contests" className="view-all-link">View All Contests</a>
    </div>
  );
};

export default LiveContestsPage;
