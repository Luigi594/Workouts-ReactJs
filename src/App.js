import './App.css';
import { Routes, Route } from 'react-router-dom';
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
          {user && (
            <Route path='/' element={<Home />} />
          )}
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
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