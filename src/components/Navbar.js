import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';

function Navbar() {
  
  const { logout } = useLogout();

  const handleClick = () => {
    logout()
  } 

  return (
    <Header>
        <Container>
            <Link to={"/"}>
                <h1>My Workouts</h1>
            </Link>
            <NavContainer>
                <LogoutButton>
                    <button onClick={handleClick}>Logout</button>
                </LogoutButton>
                <Link to={"/login"}>Login</Link>
                <Link to={"/signup"}>Signup</Link>
            </NavContainer>
        </Container>
    </Header>
  )
}

export default Navbar;

const Header = styled.header`
    
    background: #fff;
    position: sticky;
    top: 0;
    z-index: 1000;
`;


const Container = styled.div`

    max-width: 1400px;
    margin: 0 auto;
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    > a{

        color: #333;
        text-decoration: none;
    }
`;

const NavContainer = styled.nav`

    display: flex;
    align-items: center;

    > a{
        margin-left: 10px;
        text-decoration: none;
        color: var(--primary);
    }
`

const LogoutButton = styled.div`

    > button{

        background: #fff;
        color: var(--primary);
        border: 2px solid var(--primary);
        padding: 6px 10px;
        border-radius: 4px;
        cursor: pointer;
        font-size: 1em;
    }
`