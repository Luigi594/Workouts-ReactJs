import React, { useState } from 'react';
import styled from 'styled-components';
import axios from '../axios';

function WorkoutForm() {

  const [title, setTitle] = useState('');
  const [load, setLoad] = useState('');
  const [reps, setReps] = useState('');
  const [error, setError] = useState('');

  const CreateWorkout = async (e) => {

    e.preventDefault();

    await axios.post("/api/workouts", {

        title: title,
        load: load,
        reps: reps
    })
    .then((response) => {
      
      setTitle('');
      setLoad('');
      setReps('');
      setError('');
    })
    .catch((err) => {
      
      if(err.response.status === 400){

        setError(err.response.data.error);
      }
    })
    
  }

  return (
    <FormContainer>

      <form>
          <h3>Add a new workout</h3>
          <label>Exercise Title: </label>
          <input 
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)} />

          <label>Load (in Kg): </label>
          <input 
              type="number"
              value={load}
              onChange={(e) => setLoad(e.target.value)} />

          <label>Reps: </label>
          <input 
              type="number"
              value={reps}
              onChange={(e) => setReps(e.target.value)} />

          <button onClick={CreateWorkout}>Create Workout</button>

          {error && (
            <ErrorContainer>
              <h4>{error}</h4>
            </ErrorContainer>
          )}
      </form>
    </FormContainer>
  )
}

export default WorkoutForm;

const FormContainer = styled.div`

  background-color: #E5E7EB;
  padding: 20px;
  border-radius: 5px;

  > form > input{

    padding: 10px;
    margin-top: 10px;
    margin-bottom: 20px;
    width: 100%;
    border: 1px solid #ddd;
    border-radius: 4px;
    box-sizing: border-box;

  }  

  > form > label, input{
    display: block;
  }

  > form > button{

    background-color: var(--primary);
    border: 0;
    color: #fff;
    padding: 10px;
    font-family: 'Poppins';
    border-radius: 4px;
    cursor: pointer;
    margin: 10px auto;
  }
`;

const ErrorContainer = styled.div`

  padding: 10px;
  background: #ffefef;
  border: 1px solid var(--error);
  color: var(--error);
  border-radius: 4px;
  margin: 20px 0;

  > h4{
    text-align: center;
  }
`;