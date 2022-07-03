import React, { useState } from 'react';
import styled from 'styled-components';
import axios from '../axios';
import { UseWorkoutsContext } from '../hooks/UseWorkoutContext';

function WorkoutForm() {

  const { dispatch } = UseWorkoutsContext();
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

      dispatch({
        type: 'CREATE_WORKOUTS',
        payload: response.data
      })
    })
    .catch((err) => {
      
      if(err.response.status === 400){

        if(err.response.data.error.length === 4){

          setError("All fields are required");
        }
        else{
          setError(err.response.data.error);
        }

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
              placeholder='Add the title workout'
              value={title}
              onChange={(e) => setTitle(e.target.value)} />

          <label>Load (in Kg): </label>
          <input 
              type="number"
              placeholder='Add the amount of load'
              value={load}
              min="0"
              onChange={(e) => setLoad(e.target.value)} />

          <label>Reps: </label>
          <input 
              type="number"
              placeholder='Add the amount of reps'
              value={reps}
              min="0"
              onChange={(e) => setReps(e.target.value)} />

          <button onClick={CreateWorkout}>Add Workout</button>

          {error && (
            <ErrorContainer>
              <p>{error}</p>
            </ErrorContainer>
          )}
      </form>
    </FormContainer>
  )
}

export default WorkoutForm;

const FormContainer = styled.div`

  background-color: #E5E7EB;
  max-height: 400px;
  padding: 20px;
  border-radius: 5px;
  height: 540px;

  > form > input{

    padding: 10px;
    margin-top: 10px;
    margin-bottom: 20px;
    width: 100%;
    border: 1px solid #ddd;
    border-radius: 4px;
    box-sizing: border-box;
    outline: none;
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
  margin-top: 30px;

  > p{

    font-size: 14px;
    text-align: center;
  }
`;