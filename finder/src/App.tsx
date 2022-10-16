import React from 'react';

// Pages
import Home from './pages/Home';
import Login from './pages/Login';
import ExpList from './pages/ExpList';
import ExpPost from './pages/ExpPost';

import styled from 'styled-components';

import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/list" element={<ExpList />} />
          <Route path="/post" element={<ExpPost />} />
        </Routes>
      </Div>
    </BrowserRouter>
  );
}

export default App;

const Div = styled.div`
  display: flex;
  justify-content: center;
`;
