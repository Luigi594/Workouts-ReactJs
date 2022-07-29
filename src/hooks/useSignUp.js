import { useState } from 'react'
import { UseAuthContext } from './useAuthContext'
import axios from '../axios';

export const UserSignUp = ()  => {

    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const { dispatch } = UseAuthContext();

    const signup = async (email, password) => {

        setIsLoading(true);
        setError('');

        await axios.post('/api/user/signup', {
            email: email,
            password: password
        })
        .then((response) => {
            
            if(response.status === 200){

                dispatch({
                    type: 'LOGIN',
                    payload: response.data
                })

                setError('');
                setIsLoading(false);
            }
        })
        .catch((err) => {

            if(err.response.status === 400){

                setIsLoading(false);
                setError(err.response.data.error);
            }
        })
    }

    return { signup, isLoading, error }
}