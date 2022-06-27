import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from '../axios';
import WorkoutDetails from '../components/WorkoutDetails';

function Home() {

  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {

    async function getWorkouts(){

        const request = await axios.get("/api/workouts");
        setWorkouts(request.data);
    }

    getWorkouts();

  }, [])  
  return (
    <Container>
        <WorkoutsContainer>
            
            {/** if we have workouts map through  it */}
            {workouts && workouts.map((workout) => (

                <WorkoutDetails
                 key={workout._id} 
                 title={workout.title}
                 load={workout.load}
                 reps={workout.reps}
                 createdAt={workout.createdAt} />
            ))}
        </WorkoutsContainer>
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