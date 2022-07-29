import { useContext } from 'react';
import { WorkoutsContext } from '../context/WorkoutContext';

export const useWorkoutsContext = () => {

    // this will help to consume my context whether the action is
    const context = useContext(WorkoutsContext);

    if(!context){
        throw Error("UseWorkoutsContext must be used inside on WorkoutProvider")
    }

    return context;
}