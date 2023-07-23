import React from 'react';
import ContestCard from './ContestCard';

const UpcomingContestsPage = ({ contests, handleContestClick }) => {
  const upcomingContests = contests.filter((contest) => {
    const contestDate = new Date(contest.date);
    const currentDate = new Date();
    return contestDate > currentDate;
  });

  return (
    <div>
      <h2>Upcoming Contests</h2>
      <p>Discover the upcoming contests and get ready to participate.</p>
      <div className="contest-list">
        {upcomingContests.map((contest) => (
          <ContestCard key={contest.id} contest={contest} handleContestClick={handleContestClick} />
        ))}
      </div>
      <a href="/contests" className="view-all-link">View All Contests</a>
    </div>
  );
};

export default UpcomingContestsPage;
