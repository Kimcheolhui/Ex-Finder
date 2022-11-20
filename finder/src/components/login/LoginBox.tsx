import React, { useContext } from 'react';

import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { LoginStateContext } from '../../App';

import styled from 'styled-components';

import MyButton from '../mycomponent/MyButton';
import LogoIcon from '../logo/Icon';
import LoginInputBox from './LoginInputBox';

const LoginBox = () => {
  const navigate = useNavigate();
  const { toggleLogin } = useContext(LoginStateContext);

  // 로그인 입력 정보 state
  const [login, setLogin] = useState({
    id: '',
    password: '',
  });

  // login state 변경 시 반영 함수
  const onChangeLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value,
    });
  };

  // 로그인 버튼 클릭 함수
  const handleLogin = () => {
    if (login.id === '') {
      window.alert('이메일을 입력해주세요.');
      return;
    }
    // 비밀번호를 입력하지 않은 경우
    else if (login.password === '') {
      window.alert('비밀번호를 입력해주세요.');
    }
    // 이메일, 비번 둘 다 입력했을 경우
    else {
      toggleLogin();
      navigate('/');
    }
  };

  return (
    <LoginContent>
      <IconLogo
        img={<LogoIcon wid="120px" />}
        name="Icon"
        onClick={() => {
          navigate('/');
        }}
      />
      <DivLogin>로그인</DivLogin>
      <LoginInputBox onChangeLogin={onChangeLogin} />
      <DivQuestion>
        <div>아이디 ・ 비밀번호 찾기</div>
        <div>회원 가입하기</div>
      </DivQuestion>
      <LoginButton text="로그인" name="Login Button" onClick={handleLogin} />
    </LoginContent>
  );
};

export default LoginBox;

const LoginContent = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  width: 680px;
  height: 850px;

  background: #ffffff;
  border: 1px solid #000000;
  border-radius: 63px;
  opacity: 0.77;
`;

const IconLogo = styled(MyButton)`
  padding-bottom: 45px;
`;

const DivLogin = styled.div`
  font: normal normal bold 40px/54px Malgun Gothic;
  letter-spacing: 0.6px;
  color: #000000;
  opacity: 1;
  margin-bottom: 70px;
`;

const DivQuestion = styled.div`
  width: 501px;
  text-align: right;
  font: normal normal bold 25px/33px Malgun Gothic;
  letter-spacing: 0.38px;
  color: #7f7f7f;
  opacity: 1;
  margin-top: 10px;
  margin-bottom: 25px;
`;

const LoginButton = styled(MyButton)`
  background-color: #8eaee4;
  border: 1px solid #707070;
  border-radius: 30px;
  opacity: 1;

  width: 300px;
  height: 85px;

  font: normal normal bold 30px/40px Malgun Gothic;
  letter-spacing: 0.45px;
  color: #000000;
`;
