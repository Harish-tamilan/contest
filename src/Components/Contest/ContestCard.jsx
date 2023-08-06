import React, { useEffect, useState } from 'react';
import { Button } from 'antd';

const ContestCard = ({ contest, handleContestClick, past, upcoming }) => {

  const [attempted, setAttempted] = useState(false);

  useEffect(()=>{
    console.log('Contest : ', contest);
    if(!past && !upcoming){
      fetchUserSubmissions();
    }
  }, []);

  const fetchUserSubmissions = async ()=>{
    let response = await fetch(`/api/user/contest/submissions?contestId=${contest._id}`);
    response = await response.json();
    console.log('response of fetchUserSubmissions, ', response);
    let user = JSON.parse(localStorage.getItem('user'));
    for(let submission of response.result){
      if(submission.user._id == user._id && submission.percentage){
        setAttempted(true);
        break;
      }
    }
  }

  const onClickListener = ()=>{
    if(!past && !attempted){
      handleContestClick(contest._id);
    }
  }


  const onRegisterHandler = ()=>{
    let user = localStorage.getItem('user');
    handleContestClick(contest, user._id);
  }


  return (
    <div className="contest-card" onClick={onClickListener} style={(!past && !upcoming && !attempted) ? {cursor: "pointer"}: {cursor:'default'}}>
      <div className="contest-card-header">
        {!!past && <h3>Contest ended</h3>}
        {attempted && <h3>Attempted</h3>}
        <h3>{contest.title}</h3>
        <p>Start Date: {contest.startDate}</p>
        <p>End Date: {contest.endDate}</p>
      </div>
      <p className="contest-card-description">{contest.description}</p>
      {!!upcoming && <Button onClick={handleContestClick}>Register</Button>}
    </div>
  );
};

export default ContestCard;
