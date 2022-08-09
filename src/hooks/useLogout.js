import { useAuthContext } from "./useAuthContext"
import { useWorkoutsContext } from "./useWorkoutContext";

export const useLogout = () => {

    const { dispatch } = useAuthContext();
    const { dispatch: workoutDispatch } = useWorkoutsContext();

    const logout = () => {

        // removin the user from localStorage
        localStorage.removeItem('user')

        // dispatch logout action
        dispatch({type: 'LOGOUT'})

        // now we need to clear the workouts from the global state
        // when I logout because when another user logs in 
        // for some seconds will see the workouts from another user
        // we don't want that
        workoutDispatch({ type: 'SET_WORKOUTS', payload: null })
    }

    return { logout }
}