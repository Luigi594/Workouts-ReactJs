import React, { useEffect } from 'react';
import styled from 'styled-components';
import axios from '../axios';
import WorkoutDetails from '../components/WorkoutDetails';
import WorkoutForm from '../components/WorkoutForm';
import { useWorkoutsContext } from '../hooks/useWorkoutContext';
import { useAuthContext } from '../hooks/useAuthContext';
import FlipMove from 'react-flip-move';

function Home() {

  const { workouts, dispatch } = useWorkoutsContext();
  const { user } = useAuthContext();

  useEffect(() => {

    async function getWorkouts(){

        await axios.get("/api/workouts", {
          headers: {
            'Authorization': `Bearer ${user.token}`
          }
        })
        .then((response) => {

          if(response.status === 200){

            dispatch({
              type: 'SET_WORKOUTS',
              payload: response.data
            })
          }
        })
    }

    // if we have a user fetch all the workouts
    // if it's not, don't execute the function
    if(user){
      getWorkouts();
    }

  }, [dispatch, user]) 
  
  
  return (
    <Container>
        <WorkoutsContainer>
            
            <FlipMove>

              {/** if we have workouts map through  it */}
              {workouts && workouts.map((workout) => (

                  <WorkoutDetails
                    key={workout._id} 
                    id={workout._id}
                    title={workout.title}
                    load={workout.load}
                    reps={workout.reps}
                    createdAt={workout.createdAt} />
              ))}
            </FlipMove>
        </WorkoutsContainer>

        <WorkoutForm />
    </Container>
  )
}

export default Home;

const Container = styled.div`

    display: grid;
    grid-template-columns: 3fr 1fr;
    gap: 100px;
`;



const WorkoutsContainer = styled.div``;