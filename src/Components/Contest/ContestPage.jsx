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
    let codess=[]
    for(let i=0;i<n;i++){
      codess.push({
        code:"",
        language:""
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
    if(codes.length==0){
      codes.push({});
    }
    codes[ind].code = code;
    codes[ind].language = lang;
    setCodeResults(codes);
  }

  const handleRun = async(ind) => {
    console.log('inside handleRun in ContestPage');
    let body = {...codeResults[ind]};
    let commentIndex = codeResults[ind].code.indexOf("/*Do");
    body.code = codeResults[ind].code.substring(0, commentIndex);
    body.language = codeResults[ind].language;
    body.testCases = problem.testCases;
    body.testCaseAnswers = problem.testCaseAnswers;
    body.problemId = problem.problemId;
    console.log(body);
  }

  const handleSubmit = (ind) => {
    console.log('inside handleSubmit in ContestPage');
  }

  const fetchCode = ()=>{
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
      /> :
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
        </ProblemList>}
    </ContestContainer>
  );
};

export default ContestScreen;
