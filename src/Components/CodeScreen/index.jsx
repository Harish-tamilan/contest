import React, { useEffect, useState } from 'react';
import Editor from "@monaco-editor/react";
import styled from 'styled-components';

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
  }
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

function CodeEditorPage() {
  const [code, setCode] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('python');
  const [customTestCase, setCustomTestCase] = useState('');
  // Replace these with your actual problem description, test cases, and constraints
  const problemDescription = `Write a function that returns the sum of two numbers.`;
  const exampleTestCases = `Example 1:
Input: 2, 3
Output: 5

Example 2:
Input: -5, 10
Output: 5`;
  const constraints = `Constraints:
- The input numbers are integers.
- The output should be an integer.`;

  useEffect(() => {
    console.log('code: ', code);
  }, [code]);

  const handleChange = (data, options) => {
    setCode(data);
  };

  const handleLanguageChange = (e) => {
    setSelectedLanguage(e.target.value);
  };

  const handleCustomTestCaseChange = (e) => {
    setCustomTestCase(e.target.value);
  };

  const handleRunSubmit = () => {
    // Add the logic to execute the code or submit the solution here
    console.log('Running/Submitting code...');
  };

  return (
    <FlexContainer>
      {/* Left Side */}
      <LeftSide>
        <Heading1>Problem Description</Heading1>
        <Paragraph>{problemDescription}</Paragraph>

        <Heading2>Example Test Cases</Heading2>
        <Pre>{exampleTestCases}</Pre>

        <Heading3>Constraints</Heading3>
        <PreConstraints>{constraints}</PreConstraints>
      </LeftSide>

      {/* Right Side */}
      <RightSide>
        <Editor
          height="70vh"
          width="100%"
          language={selectedLanguage}
          value={code}
          theme="cobalt"
          defaultValue="// some comment"
          onChange={handleChange}
        />

        <Select onChange={handleLanguageChange} value={selectedLanguage}>
          <option value="python">Python</option>
          <option value="javascript">JavaScript</option>
          {/* Add more language options here */}
        </Select>

        <TextArea
          placeholder="Enter custom test case..."
          value={customTestCase}
          onChange={handleCustomTestCaseChange}
        />

        <Button onClick={handleRunSubmit}>Run/Submit</Button>
      </RightSide>
    </FlexContainer>
  );
}

export default CodeEditorPage;
