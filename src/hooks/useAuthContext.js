import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

export const useAuthContext = () => {

    // this will help to consume my context whether the action is
    const context = useContext(AuthContext);

    if(!context){
        throw Error("UseAuthContext must be used inside on AuthProvider")
    }

    return context;
}