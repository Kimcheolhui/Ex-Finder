import React from 'react';

import styled from 'styled-components';

interface HeaderProps {
  left: JSX.Element;
  right: JSX.Element[];
}

const MyHeader = ({ left, right }: HeaderProps) => {
  return (
    <Header>
      <div>{left}</div>
      <DivRight>{right}</DivRight>
    </Header>
  );
};

export default React.memo(MyHeader);

const Header = styled.header`
  height: 100px;
  width: 1816px;
  padding: 29px 52px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const DivRight = styled.div`
  display: flex;
  justify-content: space-between;
`;
