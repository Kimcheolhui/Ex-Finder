import React, { useState } from 'react';
import styled from 'styled-components';

import MyInput from '../mycomponent/MyInput';
import MyButton from '../mycomponent/MyButton';
import PwdIcon from '../logo/PwdIcon';

interface logininputboxProps {
  onChangeLogin: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const LoginInputBox = ({ onChangeLogin }: logininputboxProps) => {
  // 비밀번호 표시 or 숨김 처리
  const [showPassword, setShowPassword] = useState(false);
  const togglePwd = () => {
    setShowPassword(!showPassword);
  };

  return (
    <LoginInput>
      <DivInput>
        <Input
          type="email"
          name="id"
          onChange={(e) => {
            onChangeLogin(e);
          }}
          placeholder="이메일을 입력하세요."
        />
      </DivInput>
      <DivInput>
        <Input
          type={showPassword ? 'text' : 'password'}
          name="password"
          onChange={(e) => {
            onChangeLogin(e);
          }}
          placeholder="비밀번호를 입력하세요."
        />
        <MyButton
          name="togglepassword"
          img={<PwdIcon showPassword={showPassword} />}
          onClick={togglePwd}
        />
      </DivInput>
    </LoginInput>
  );
};

export default LoginInputBox;

const LoginInput = styled.div`
  display: flex;
  flex-direction: column;
`;

const DivInput = styled.div`
  width: 501px;

  border-bottom: 1px solid grey;
  padding-bottom: 23px;
  margin-bottom: 20px;
  margin-top: 20px;

  display: flex;
  justify-content: space-between;
`;

const Input = styled(MyInput)`
  border: none;
  outline: none;

  margin-left: 27px;

  font: normal normal bold 25px/33px Malgun Gothic;
  letter-spacing: 0.38px;
`;
