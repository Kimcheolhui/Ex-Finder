import React, { useState, createContext } from 'react';
import styled from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Page Componets
import Home from './pages/Home';
import Login from './pages/Login';
import ExpList from './pages/ExpList';
import ExpPost from './pages/ExpPost';
import MyPage from './pages/MyPage';

import { useLoginState } from './components/loginstate';

interface LoginContextProps {
  login: boolean;
  toggleLogin: () => void;
}

export const LoginStateContext = createContext<LoginContextProps>({
  login: false,
  toggleLogin: () => {
    return null;
  },
});

function App() {
  const { login, toggleLogin } = useLoginState();
  return (
    <LoginStateContext.Provider value={{ login, toggleLogin }}>
      <BrowserRouter>
        <Div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/list" element={<ExpList />} />
            <Route path="/post" element={<ExpPost />} />
            <Route path="/mypage" element={<MyPage />} />
          </Routes>
        </Div>
      </BrowserRouter>
    </LoginStateContext.Provider>
  );
}

export default App;

const Div = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
`;
