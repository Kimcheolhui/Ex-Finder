import React from 'react';
import styled from 'styled-components';

import { useNavigate } from 'react-router-dom';

// Components
import MyButton from '../components/MyButton';
import MyHeader from '../components/MyHeader';
import MainLogo from './logo/MainLogo';

const MainHeader = () => {
  const navigate = useNavigate();

  const left = (
    <MyButton
      name="main-logo"
      img={<MainLogo wid="340px" />}
      onClick={() => {
        navigate('/');
      }}
    />
  );

  const right = [
    <NavButton
      key={'notice'}
      name="notice"
      text="NOTICE"
      onClick={() => {
        console.log('notice');
        // navigate('/notice')
      }}
    />,
    <NavButton
      key={'mypage'}
      name="mypage"
      text="MYPAGE"
      onClick={() => {
        console.log('mypage');
        // navigate('./mypage')
      }}
    />,
    <NavButton
      key={'login'}
      name="login"
      text="LOGIN"
      onClick={() => {
        console.log('login');
        navigate('/login');
      }}
    />,
  ];

  return <MyHeader left={left} right={right} />;
};

export default MainHeader;

const NavButton = styled(MyButton)`
  font: normal normal bold 22px/29px Malgun Gothic;
`;
