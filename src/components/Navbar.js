import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    
    <Header>
        <Container>
            <Link to={"/"}>
                <h1>Workouts Body</h1>
            </Link>
        </Container>
    </Header>
  )
}

export default Navbar;

const Header = styled.header`
    background: #fff;
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