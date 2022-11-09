import React, { useContext } from 'react';
import styled from 'styled-components';
import { LoginStateContext } from '../App';

import { useNavigate } from 'react-router-dom';

// Components
import MyButton from './mycomponent/MyButton';
import MyHeader from './mycomponent/MyHeader';
import MainLogo from './logo/MainLogo';

const MainHeader = () => {
  const navigate = useNavigate();

  const { login, toggleLogin } = useContext(LoginStateContext);
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
      key={'experiment'}
      name="experiment"
      text="EXPERIMENT LIST"
      onClick={() => {
        navigate('/list');
      }}
    />,
    <NavButton
      key={'mypage'}
      name="mypage"
      text="MYPAGE"
      onClick={() => {
        if (login) {
          navigate('/mypage');
        } else {
          const wannalogin = window.confirm(
            '로그인이 필요한 서비스 입니다. 로그인 하시겠습니까?',
          );
          if (wannalogin) {
            navigate('/login');
          }
        }
      }}
    />,
  ];
  if (login) {
    right.push(
      <NavButton
        key={'logout'}
        name="logout"
        text="LOG OUT"
        onClick={() => {
          toggleLogin();
          navigate('/');
        }}
      />,
    );
  } else {
    right.push(
      <NavButton
        key={'login'}
        name="login"
        text="LOGIN"
        onClick={() => {
          navigate('/login');
        }}
      />,
    );
  }

  return <MyHeader left={left} right={right} />;
};

export default MainHeader;

const NavButton = styled(MyButton)`
  font: normal normal bold 22px/29px Malgun Gothic;
  margin: 0px 35px;
`;
