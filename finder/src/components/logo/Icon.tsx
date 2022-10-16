import React from 'react';

import styled from 'styled-components';

interface LogoProps {
  wid: string;
}

const LogoIcon = ({ wid }: LogoProps): JSX.Element => {
  const source = 'assets/logo-icon.png';
  const Logo = styled.img`
    width: ${wid};
  `;
  return <Logo src={source} />;
};

export default LogoIcon;
