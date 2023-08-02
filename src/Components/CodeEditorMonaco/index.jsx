import React, { useEffect, useState } from 'react';
import Editor from "@monaco-editor/react";
import styled from 'styled-components';

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const LeftSide = styled.div`
  flex: 2;
  padding: 1rem;
`;

const Heading1 = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const Paragraph = styled.p`
  margin-bottom: 1.5rem;
`;

const Heading2 = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const Pre = styled.pre`
  margin-bottom: 1.5rem;
  white-space: pre-wrap;
`;

const Heading3 = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const PreConstraints = styled.pre`
  white-space: pre-wrap;
`;

const RightSide = styled.div`
  flex: 1;
  padding: 1rem;
  min-width: 45rem;
`;

const Select = styled.select`
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  padding: 0.5rem;
  width: 100%;
  background-color: #f1f1f1;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 8rem;
  padding: 0.5rem;
  resize: none;
  margin-bottom: 1rem;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 0.25rem;
  margin-right: 0.5rem;
  cursor: pointer;
`;

function CodeEditorMonaco(props) {
  const [code, setCode] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('python');
  const [customTestCase, setCustomTestCase] = useState('');
  // Replace these with your actual problem description, test cases, and constraints
  const problemDescription = props.problem || `Write a function that returns the sum of two numbers.`;
  const exampleTestCases = props.testCases;
  const constraints = `Constraints:
- The input numbers are integers.
- The output should be an integer.`;

  useEffect(() => {
    console.log('inside CodeEditorMonaco, props are ', props);
  }, []);

  useEffect(() => {
    console.log('code: ', code);
  }, [code]);

  const handleChange = (data, options) => {
    props.onCodeChange(data, props.ind, selectedLanguage);
  };

  const handleLanguageChange = async (e) => {
    let lang = e.target.value;
    console.log('selected language is ', lang);
    let response = await fetch(`/api/problem/getBoilerPlateCode?problemId=${props.id}&language=${lang}`);
    response = await response.json();
    console.log('inside handleLanguageChange in CodeEditorMonaco, response is ', response);
    props.onCodeChange("/*Do not modify this code, it's for the reference\n"+response?.result?.result?.code+"*/", props.ind, lang);
    setSelectedLanguage(lang);
  };

  const handleCustomTestCaseChange = (e) => {
    setCustomTestCase(e.target.value);
  };

  const handleRunSubmit = () => {
    // Add the logic to execute the code or submit the solution here
    console.log('Running/Submitting code...');
  };

  const fetchKeyValue = (testCase)=>{
    return <div>
      {Object.keys(testCase).map((key)=><div>
        <span>{key}:{testCase[key]}</span>
      </div>)}
    </div>
  }

  return (
    <FlexContainer>
      {/* Left Side */}
      <LeftSide>
        <Heading1>Problem Description</Heading1>
        <Paragraph>{props.problem}</Paragraph>

        <Heading2>Example Test Cases</Heading2>
        <Pre>{
          props.testCases.map((testCase, ind) => {
            return(<div>
              <h3>{`TestCase ${ind+1}`}</h3>
              {fetchKeyValue(testCase)}
              <h3>Answer</h3>
              <span>{props.testCasesAnswers[ind]}</span>
            </div>)
          })
        }</Pre>
      </LeftSide>

      {/* Right Side */}
      <RightSide>
        <Editor
          height="70vh"
          width="100%"
          language={selectedLanguage}
          value={props.code}
          theme="cobalt"
          defaultValue="// some comment"
          onChange={handleChange}
        />

        <Select onChange={handleLanguageChange} value={selectedLanguage}>
          <option value="python">Python</option>
          <option value="javascript">JavaScript</option>
          <option value="java">Java</option>
          {/* Add more language options here */}
        </Select>

        <TextArea
          placeholder="Enter custom test case..."
          value={customTestCase}
          onChange={handleCustomTestCaseChange}
        />

        <Button onClick={()=>props.handleRun(props.ind)}>Run</Button>
        <Button onClick={()=>props.handleSubmit(props.ind)}>Submit</Button>
      </RightSide>
    </FlexContainer>
  );
}

export default CodeEditorMonaco;
