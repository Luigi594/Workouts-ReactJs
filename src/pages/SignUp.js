import React from 'react'
import styled from 'styled-components';
import { useState } from 'react';
import { useSignup } from '../hooks/useSignUp'

function SignUp() {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signup, isLoading, error } = useSignup();

  const handleSubmit = async (e) => {

    e.preventDefault();
    
    // using my hook to signup the user
    await signup(email, password)

    setEmail('');
    setPassword('');
  }

  return (
    <SignupContainer>
        
        <form>
            <h3>Sign Up</h3>
            <label>Email: </label>
            <input 
                placeholder='example@gmail.com'
                type="text" 
                onChange={(e) => setEmail(e.target.value)}
                value={email}
            />

            <label>Password: </label>
            <input 
                placeholder='********'
                type="password" 
                onChange={(e) => setPassword(e.target.value)}
                value={password}
            />

            <button disabled={isLoading} onClick={handleSubmit}>Sign up</button>

            {error && (
                <ErrorContainer>
                    <p>{error}</p>
                </ErrorContainer>
            )}
        </form>
    
        
    </SignupContainer>
  )
}

export default SignUp

const SignupContainer = styled.div`

    display: flex;
    margin: 20px auto;
    max-width: 500px;
    height: 450px;

    > form{

        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        margin: 40px auto;
        padding: 20px;
        background: #fff;
        border-radius: 4px;
    }

    > form > input{

        width: 250px;
        height: 30px;
        font-size: 16px;
        padding-left: 10px;
        margin-bottom: 20px;
        border-radius: 5px;
        outline: none;
        border: 1px solid var(--primary);
    }

    > form > button{

        width: 262px;
        height: 50px;
        color: white;
        font-size: medium;
        padding: 10px;
        background-color: var(--primary);
        border-radius: 5px;
        cursor: pointer;
        border: 1px solid var(--primary);
    }
`

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