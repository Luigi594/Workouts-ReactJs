import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import styled from 'styled-components';

function App() {
  return (
    <div className="App">
      <Navbar />

      <PagesContainer>
        <Routes>  
          <Route path='/' element={<Home />} />
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