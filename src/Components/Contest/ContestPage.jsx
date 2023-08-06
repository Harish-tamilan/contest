import { Button } from 'antd';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import CodeEditorMonaco from '../CodeEditorMonaco';

const ContestContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

const ContestHeader = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const ProblemList = styled.ul`
  list-style: none;
  padding: 0;
`;

const ProblemItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;
  border: 1px solid #ccc;
  margin-bottom: 0.5rem;
`;

const ProblemTitle = styled.span`
  font-weight: bold;
`;

const ProblemStatus = styled.span`
  font-size: 0.8rem;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  background-color: ${(props) =>
    props.submitted ? '#5cb85c' : props.attempted ? '#f0ad4e' : '#d9534f'};
  color: #fff;
`;

const ContestScreen = (props) => {
  // Sample data (replace this with your actual data)
  const [problems, setProblems] = useState([]);
  const [codeResults, setCodeResults] = useState([]);
  const [showEditor, setShowEditor] = useState(false);
  const [problem, setProblem] = useState({});
  const [index, setIndex] = useState(0);

  useEffect(() => {
    console.log('props of ContestScreen, ', props);
    let probs = [];
    let n = props?.contest?.questions;
    for (let problem of props?.contest?.questions) {
      let prob = { ...problem, submitted: false, attempted: false };
      probs.push(prob);
    }
    let codess = []
    for (let i = 0; i < n; i++) {
      codess.push({
        code: "",
        language: "",
        score: 0
      })
    }
    setCodeResults(codess);
    setProblems(probs);
  }, [])

  const onClickHandler = (problem, ind) => {
    console.log('inside onClickHandler, ind is ', ind);
    setProblem(problem);
    setShowEditor(true);
    setIndex(ind);
  }

  const fetchComponent = (problem, ind) => {
    if (problem.submitted) {
      return <Button type='primary' danger disabled={true}>Submitted</Button>
    } else if (problem.attempted) {
      return <Button color='primary' onClick={() => onClickHandler(problem, ind)}>Continue</Button>
    } else {
      return <Button color='primary' onClick={() => onClickHandler(problem, ind)}>Start</Button>
    }
  }

  const onCodeChange = (code, ind, lang) => {
    let codes = [...codeResults];
    if (codes.length <= ind) {
      for (let i = codes.length; i <= ind; i++) {
        codes.push({
          code: "",
          language: "",
          score: 0
        })
      }
    }
    codes[ind].code = code;
    codes[ind].language = lang;
    codes[ind].score = codes[ind].score || 0;
    setCodeResults(codes);
  }

  const handleRun = async (ind) => {
    console.log('inside handleRun in ContestPage');
    let body = { ...codeResults[ind] };
    let commentIndex = codeResults[ind].code.indexOf("/*Do");
    body.code = codeResults[ind].code.substring(0, commentIndex);
    body.language = codeResults[ind].language;
    body.testCases = problem.testCases;
    body.testCaseAnswers = problem.testCaseAnswers;
    body.problemId = problem.problemId;
    console.log(body);
    let response = await fetch('/api/problem/run', {
      method: 'POST',
      body: JSON.stringify(body)
    });
    response = await response.json();
    console.log('response of handleRun, ', response);
    if (response.status == 'success') {
      alert('Sample test cases passed');
    } else {
      let responseString = response?.result.toString();
      let str = "";
      for (let key of Object.keys(response.result)) {
        str += `${key}:${response.result[key]}\n`;
      }
      console.log('responseString, ', str);
      alert(str);
    }
  }

  const handleBackButtonClick = () => {
    setShowEditor(false);
  }

  const handleSubmit = async (ind) => {
    console.log('inside handleSubmit in ContestPage');
    let body = {
      problemId: problem.problemId,
      language: codeResults[ind].language
    };
    let commentIndex = codeResults[ind].code.indexOf("/*Do");
    body.code = codeResults[ind].code.substring(0, commentIndex);
    console.log('body is ', body);
    let response = await fetch('/api/problem/submit', {
      method: 'POST',
      body: JSON.stringify(body)
    });
    response = await response.json();
    console.log('response of handleSubmit, ', response);
    let score = response.passCount / (response.passCount + response.failCount) * 100;
    if (response.status == 'success') {
      score = 100;
      alert("All test cases passed successfully");
    } else {
      alert(`${response.passCount} test cases passed out of ${response.failCount + response.passCount}`);
    }
    console.log('score is ', score, ', codeResults[ind].score', codeResults[ind].score);
    if (score > codeResults[ind].score) {
      let codess = [...codeResults];
      codeResults[ind].score = score;
      setCodeResults(codess);
    }
  }

  const handleFinalSubmit = async () => {
    let user = JSON.parse(localStorage.getItem("user"));
    let scores = [], n = props.contest?.questions?.length;
    for (let i = 0; i < n; i++) {
      let obj = {
        problem: props.contest?.questions[i]._id,
        problemId: props.contest?.questions[i].problemId
      }
      if (codeResults[i] && codeResults[i].score) {
        obj.score = codeResults[i].score;
      } else {
        obj.score = 0;
      }
      scores.push(obj);
    }
    let body = {
      user: user._id,
      contest: props.contest._id,
      scores
    }
    let scoresSum = 0;
    for(let score of scores){
      scoresSum += score.score;
    }
    let percentage = scoresSum/(scores.length);
    body.percentage = percentage;
    console.log('finalSubmission body is ', body);
    let response = await fetch('/api/user/submitTest', {
      method:'POST',
      body: JSON.stringify(body)
    });
    response = await response.json();
    console.log('response of contestSubmit, ', response);
    if(response.status=='success'){
      alert('Contest submitted successfully');
      props.onContestSubmit();
    }else{
      alert(response.error);
    }
  }

  const fetchCode = () => {
    console.log('inside fetchCode, index is ', index);
    console.log('codeResults[index] is, ', codeResults[index]);
    return codeResults[index]?.code || "";
  }

  return (
    <ContestContainer>
      <ContestHeader>Contest Title</ContestHeader>
      {showEditor ? <CodeEditorMonaco
        problem={problem.problem}
        testCases={problem.testCases}
        testCasesAnswers={problem.testCaseAnswers}
        ind={index}
        onCodeChange={onCodeChange}
        handleRun={handleRun}
        handleSubmit={handleSubmit}
        code={fetchCode()}
        id={problem._id}
        onBackClick={handleBackButtonClick}
      /> :
        <div>
          <ProblemList>
            {problems?.map((problem, ind) => (
              <ProblemItem key={problem.problemId}>
                <ProblemTitle>{problem.problem}</ProblemTitle>
                <ProblemStatus
                  submitted={problem.submitted}
                  attempted={problem.attempted}
                >
                  {fetchComponent(problem, ind)}
                </ProblemStatus>
              </ProblemItem>
            ))}
          </ProblemList>
          <Button onClick={handleFinalSubmit}>Submit</Button>
        </div>}
    </ContestContainer>
  );
};

export default ContestScreen;
