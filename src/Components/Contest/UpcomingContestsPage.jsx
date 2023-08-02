import React from 'react';
import ContestCard from './ContestCard';

const UpcomingContestsPage = ({ contests, handleContestClick }) => {

  return (
    <div>
      <h2>Upcoming Contests</h2>
      <p>Discover the upcoming contests and get ready to participate.</p>
      <div className="contest-list">
        {contests.map((contest) => (
          <ContestCard key={contest.id} contest={contest} handleContestClick={()=>handleContestClick(contest._id)} upcoming={true}/>
        ))}
      </div>
      <a href="/contests" className="view-all-link">View All Contests</a>
    </div>
  );
};

export default UpcomingContestsPage;
