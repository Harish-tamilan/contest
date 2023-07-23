import React from 'react';

const ContestCard = ({ contest, handleContestClick }) => {
  return (
    <div className="contest-card" onClick={() => handleContestClick(contest.id)}>
      <div className="contest-card-header">
        <h3>{contest.title}</h3>
        <p>Date: {contest.date}</p>
      </div>
      <p className="contest-card-description">{contest.description}</p>
    </div>
  );
};

export default ContestCard;
