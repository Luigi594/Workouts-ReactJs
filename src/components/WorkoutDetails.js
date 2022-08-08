import React, { forwardRef } from 'react';
import styled from 'styled-components';
import axios from '../axios';
import { useWorkoutsContext } from '../hooks/useWorkoutContext';
import { useAuthContext } from '../hooks/useAuthContext';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

const  WorkoutDetails = forwardRef(({ id, title, load, reps, createdAt }, ref) => {

  const { dispatch } = useWorkoutsContext();
  const { user } = useAuthContext();

  const handleClick = async () => {

    if(!user){
        return
    }

    await axios.delete(`/api/workouts/${id}`,{
        headers:{
            'Authorization': `Bearer ${user.token}`
        }
    })
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
    <WorkoutDetailsContainer ref={ref}>

        <h4>{title}</h4>
        <p><strong>Load (kg): </strong>{load}</p>
        <p><strong>Reps: </strong>{reps}</p>
        <p>{ formatDistanceToNow(new Date(createdAt), { addSuffix: true }) }</p>
        <span onClick={handleClick} className="material-symbols-outlined">
            Delete
        </span>

    </WorkoutDetailsContainer>
  )
})

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
