import React from 'react';
import styled from 'styled-components';

interface pwdiconProps {
  showPassword: boolean;
}

// 로그인 페이지에서 비밀번호 입력 시 비밀번호 숨김 or 보임 처리할 때 사용되는 Icon
const PwdIcon = ({ showPassword }: pwdiconProps) => {
  return (
    <ToggleImg
      src={showPassword ? 'assets/pwd-visible.png' : 'assets/pwd-invisible.png'}
    />
  );
};

export default PwdIcon;

const ToggleImg = styled.img`
  width: 34px;
  height: 34px;
`;
