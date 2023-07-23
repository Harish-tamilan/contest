import React, { useState } from 'react';
import './HomePage.css';
import ContestDetailsPage from '../Contest/ContestDetailsPage';
import UpcomingContestsPage from '../Contest/UpcomingContestsPage';
import PreviousContestsPage from '../Contest/PreviousContestsPage';
import LiveContestsPage from '../Contest/LiveContestPage';
import ProfilePage from './ProfilePage';

const HomePage = ({ handleLogout }) => {
  const contests = [
    {
      id: 1,
      title: 'Contest 1',
      date: 'August 15, 2023',
      description: 'Join this contest to showcase your skills and win exciting prizes!',
      details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam semper ex eget sem venenatis, id lacinia velit vestibulum.',
      timeline: 'Submission Deadline: August 30, 2023',
      prizes: '1st Prize: $1000, 2nd Prize: $500, 3rd Prize: $250',
      submissions: 'Total Submissions: 50',
      leaderboard: 'Rank 1: John Doe, Rank 2: Jane Smith, Rank 3: David Johnson',
      updates: 'You have a new Update',
      updateDetails: 'Announcement: Due to high demand, the submission deadline has been extended by one week.',
    },
    {
      id: 2,
      title: 'Contest 2',
      date: 'September 1, 2023',
      description: 'Test your abilities and compete against other talented participants.',
      details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam semper ex eget sem venenatis, id lacinia velit vestibulum.',
      timeline: 'Submission Deadline: September 15, 2023',
      prizes: '1st Prize: $1500, 2nd Prize: $750, 3rd Prize: $400',
      submissions: 'Total Submissions: 30',
      leaderboard: 'Rank 1: Sarah Johnson, Rank 2: Michael Brown, Rank 3: Emily Davis',
      updates: 'No new Updates',
      updateDetails: 'Announcement: The contest date has been rescheduled to September 10th.',
    },
    {
      id: 3,
      title: 'Contest 3',
      date: 'October 10, 2023',
      description: 'Participate in this exciting contest to challenge your knowledge.',
      details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam semper ex eget sem venenatis, id lacinia velit vestibulum.',
      timeline: 'Submission Deadline: October 31, 2023',
      prizes: '1st Prize: $2000, 2nd Prize: $1000, 3rd Prize: $500',
      submissions: 'Total Submissions: 20',
      leaderboard: 'Rank 1: Robert Wilson, Rank 2: Olivia Clark, Rank 3: Daniel Lee',
      updates: 'You have a new Update',
      updateDetails: 'Announcement: The challenge details have been updated. Please review the changes.',
    },
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [activePage, setActivePage] = useState('live');
  const [selectedContestId, setSelectedContestId] = useState(null);
  const [profilePageVisible, setProfilePageVisible] = useState(false);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleBack = () => {
    setSelectedContestId(null);
  };

  const handleContestClick = (contestId) => {
    setSelectedContestId(contestId);
  };

  const handlePageClick = (page) => {
    setActivePage(page);
    setSelectedContestId(null);
  };

  const handleProfileClick = () => {
    setProfilePageVisible(true);
  };

  const handleProfileBack = () => {
    setProfilePageVisible(false);
  };

  const filteredContests = contests.filter((contest) =>
    contest.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  let pageContent;
  if (profilePageVisible) {
    pageContent = <ProfilePage handleBack={handleProfileBack} />;
  } else if (selectedContestId) {
    const selectedContest = contests.find((contest) => contest.id === selectedContestId);
    pageContent = (
      <ContestDetailsPage
        contest={selectedContest}
        handleBack={handleBack}
        contests={contests}
      />
    );
  } else if (activePage === 'upcoming') {
    pageContent = (
      <UpcomingContestsPage
        contests={filteredContests}
        handleContestClick={handleContestClick}
      />
    );
  } else if (activePage === 'previous') {
    pageContent = (
      <PreviousContestsPage
        contests={filteredContests}
        handleContestClick={handleContestClick}
      />
    );
  } else {
    pageContent = (
      <LiveContestsPage contests={filteredContests} handleContestClick={handleContestClick} />
    );
  }

  return (
    <div className="homepage-container">
      <nav className="navbar">
        <div
          className={`nav-item ${activePage === 'live' ? 'active' : ''}`}
          onClick={() => handlePageClick('live')}
        >
          Live
        </div>
        <div
          className={`nav-item ${activePage === 'upcoming' ? 'active' : ''}`}
          onClick={() => handlePageClick('upcoming')}
        >
          Upcoming
        </div>
        <div
          className={`nav-item ${activePage === 'previous' ? 'active' : ''}`}
          onClick={() => handlePageClick('previous')}
        >
          Previous
        </div>
        <div className="menu-item">
          <div className="menu-icon"></div>
          <div className="menu-dropdown">
            <div className="dropdown-item" onClick={handleProfileClick}>
              Profile
            </div>
            <div className="dropdown-item">Settings</div>
            <div className="dropdown-item" onClick={handleLogout}>
              Logout
            </div>
          </div>
        </div>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search contests"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
      </nav>

      <section className="homepage-section">{pageContent}</section>
    </div>
  );
};

export default HomePage;
