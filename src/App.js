import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import styled from 'styled-components';
import { useAuthContext } from './hooks/useAuthContext'

function App() {

  const { user } = useAuthContext();

  return (
    <div className="App">
      <Navbar />

      <PagesContainer>
        <Routes>  

          {/** if we have an user redirect to the home page, if it's not go to the login 
           * 
           * The same logic to the other ones to protect the routes in react
          */}

          <Route path='/' element={ user ? <Home /> : <Navigate to={"/login"} /> } /> 
          <Route path='/login' element={ !user ? <Login /> : <Navigate to={"/"} /> } />
          <Route path='/signup' element={ !user ? <SignUp /> : <Navigate to={"/"} /> } />
        </Routes>
      </PagesContainer>
    </div>
  );
}

export default App;

const PagesContainer = styled.div`

  max-width: 1400px;
  padding: 20px;
  margin: 0 auto;
`;