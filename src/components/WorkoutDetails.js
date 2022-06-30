import React from 'react';
import styled from 'styled-components';
import axios from '../axios';
import { UseWorkoutsContext } from '../hooks/UseWorkoutContext';

function WorkoutDetails({ id, title, load, reps, createdAt }) {

  const { dispatch } = UseWorkoutsContext();

  const handleClick = async () => {

    await axios.delete(`/api/workouts/${id}`)
    .then((response) => {

        if(response.status === 200){

            dispatch({
                type: "DELETE_WORKOUT",
                payload: response.data
            })
        }
    })
  } 
  
  return (
    <WorkoutDetailsContainer>

        <h4>{title}</h4>
        <p><strong>Load (kg): </strong>{load}</p>
        <p><strong>Reps: </strong>{reps}</p>
        <p>{ new Date(createdAt).toDateString() }</p>
        <span onClick={handleClick}>Delete</span>

    </WorkoutDetailsContainer>
  )
}

export default WorkoutDetails;

const WorkoutDetailsContainer = styled.div`

    background: #fff;
    border-radius: 4px;
    margin: 20px auto;
    padding: 20px;
    position: relative;
    box-shadow: 2px 2px 5px rgba(0,0,0,0.05);

    > h4{

        margin: 0 0 10px 0;
        font-size: 1.2em;
        color: var(--primary);
    }

    > p {

        margin: 3px;
        font-size: 0.9em;
        color: #555;
    }

    > span {

        position: absolute;
        top: 20px;
        right: 20px;        
        background: #f1f1f1;
        padding: 10px;
        border-radius: 50%;
        color: #333;
        transition: 0.5s ease-in;

        :hover{
            cursor: pointer;
            background: #ddd;
            transition: 0.5s ease-out;
        }
    }
`;
