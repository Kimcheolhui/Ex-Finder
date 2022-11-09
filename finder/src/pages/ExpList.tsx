import React from 'react';
import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';
import ListBox from '../components/list/ListBox';
import MainHeader from '../components/MainHeader';

const ExpList = () => {
  return (
    <Div>
      <MainHeader />
      <ListBox />
    </Div>
  );
};

export default ExpList;

const Div = styled.div`
  width: 1920px;
  min-width: 1190px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
