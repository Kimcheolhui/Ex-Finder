import React from 'react';

import styled from 'styled-components';

interface ButtonProps {
  className?: string;
  text?: string;
  img?: JSX.Element;
  name: string;
  onClick(): void;
}

const MyButton = ({
  className,
  text,
  img,
  name,
  onClick,
}: ButtonProps): JSX.Element => {
  return (
    <Button className={className} type="button" onClick={onClick} name={name}>
      {text ? text : img ? img : 'Error'}
    </Button>
  );
};

export default MyButton;

const Button = styled.button`
  border: none;
  background: none;
  padding: 0;
  cursor: pointer;
`;
