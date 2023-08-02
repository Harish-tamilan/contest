import React from 'react';
import ContestCard from './ContestCard';


const PreviousContestsPage = ({ contests, handleContestClick }) => {

  return (
    <div>
      <h2>Previous Contests</h2>
      <p>Check out the previous contests and their winners.</p>
      <div className="contest-list">
        {contests.map((contest) => (
          <ContestCard key={contest.id} contest={contest} handleContestClick={()=>handleContestClick(contest._id)} past={true}/>
        ))}
      </div>
      <a href="/contests" className="view-all-link">View All Contests</a>
    </div>
  );
};

export default PreviousContestsPage;
