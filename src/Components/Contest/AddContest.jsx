import React, { useState, useEffect } from 'react';
import { Select } from 'antd';

const AddContest = () => {
  const [title, setTitle] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [questions, setQuestions] = useState([]);
  const [selectedQuestions, setSelectedQuestions] = useState([]);

  // Fetch questions from API on component mount
  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    try {
      const response = await fetch('/api/problem/getAll'); // Replace with your API endpoint
      const data = await response.json();
      if (data.status === 'success') setQuestions(data.result);
      else setQuestions([]);
    } catch (error) {
      console.error('Error fetching questions:', error);
    }
  };

  const handleAddContest = async () => {
    try {
      // Validate inputs before making the API call
      if (!title || !startDate || !endDate || selectedQuestions.length === 0) {
        alert('Please fill in all the fields and select at least one question.');
        return;
      }

      let questions = [];
      for(let ques of selectedQuestions){
        let arr = ques.split(":");
        let obj = {
          problem: arr[0],
          problemId: arr[1]
        }
        questions.push(obj);
      }

      let body = {
        title: title,
        startDate: startDate,
        endDate: endDate,
        questions: questions,
      };

      console.log('body is ', body);

      // Make the API call to add the contest
        let response = await fetch('/api/contest/add', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(body),
        });
        response = response.json();
        if (response.status === 200) {
          alert('Contest added successfully!');
          // Reset the form after successful addition
          setTitle('');
          setStartDate('');
          setEndDate('');
          setSelectedQuestions([]);
        } else {
          const data = await response.json();
          alert('Failed to add contest. Error: ' + data.error);
        }
    } catch (error) {
      console.error('Error adding contest:', error);
    }
  };

  const onChangeHandler = (e) => {
    console.log('inside onChangeHandler, ', JSON.parse(e.target.value));
    console.log('keys, ', Object.keys(e.target));
  }

  const handleChange = (ev)=>{
    console.log('ev, ', ev);
    setSelectedQuestions(ev);
  }

  const fetchOptions = ()=>{
    let options = [];
    for(let question of questions){
      options.push({
        label: question.problem,
        value: question._id+":"+question.problemId
      })
    }
    return options;
  }

  return (
    <div>
      <h2>Add Contest</h2>
      <label>
        Title:
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </label>
      <br />
      <label>
        Start Date:
        <input type="text" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
      </label>
      <br />
      <label>
        End Date:
        <input type="text" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
      </label>
      <br />
      <div>
      Questions:
        <Select
          mode="multiple"
          allowClear
          style={{
            width: '100%',
          }}
          placeholder="Please select"
          defaultValue={[]}
          onChange={handleChange}
          options={fetchOptions()}
        />
      </div>
      <br />
      <button onClick={handleAddContest}>Add Contest</button>
    </div>
  );
};

export default AddContest;
