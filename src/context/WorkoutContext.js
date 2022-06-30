import { createContext, useReducer } from 'react';

export const WorkoutsContext = createContext();

// my reducer function
// the state is the previous state value 
export const workoutsReducer = (state, action) => {

    // depends on the action we want to do
    switch(action.type){

        case 'SET_WORKOUTS':
            return {
                workouts: action.payload
            }
        
            case 'CREATE_WORKOUTS':
                return {

                    // add the new workout and
                    // keep the previous state (the old workouts)
                    workouts: [action.payload, ...state.workouts]
                }

                case 'DELETE_WORKOUT':
                    return {

                        // I filter the state of workouts to see what is the one I want
                        // to delete, if the id I pass isn't equal to the rest keep them all
                        // but if it matches one delete it
                        workouts: state.workouts.filter((w) => w._id !== action.payload._id)
                    }

                    default:
                        return state
    }
}

/** children it's whatever the component or template
 * this provider is wrapping, the children here is the
 * App.js the entire application
 * 
 * That allow to our other components access to the context
 */
export const WorkoutProvider = ({ children }) => {

    /** this is pretty much like redux */
    const [state, dispatch] = useReducer(workoutsReducer, {
        workouts: null // initial value
    })

    return(

        /** value prop in the provider will be available 
         * to the other components, to provid values
         */
        <WorkoutsContext.Provider value={{...state, dispatch}}>
            { children }
        </WorkoutsContext.Provider>
    )
}