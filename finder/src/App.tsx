import React from 'react';
import Home from './pages/Home';
import Login from './pages/Login';

import styled from 'styled-components';

import './App.css';
import  {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Div>
    </BrowserRouter>
  );
}

export default App;

const Div = styled.div`
  display: flex;
  justify-content:center;
`
