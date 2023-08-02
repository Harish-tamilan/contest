import React, { useEffect } from 'react';
import { Button } from 'antd';

const ContestCard = ({ contest, handleContestClick, past, upcoming }) => {

  useEffect(()=>{
    console.log('Contest : ', contest);
  }, []);

  const onClickListener = ()=>{
    if(!past){
      handleContestClick(contest._id);
    }
  }


  const onRegisterHandler = ()=>{
    let user = localStorage.getItem('user');
    handleContestClick(contest, user._id);
  }


  return (
    <div className="contest-card" onClick={onClickListener} style={!past & !upcoming ? {cursor: "pointer"}: {cursor:'default'}}>
      <div className="contest-card-header">
        {!!past && <h3>Contest ended</h3>}
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
