import React from 'react';

import styled from 'styled-components';

interface InputProps {
  type: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  placeholder: string;
  className?: string;
}

const MyInput = ({
  className,
  type,
  onChange,
  placeholder,
}: InputProps): JSX.Element => {
  return (
    <Input
      className={className}
      type={type}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

MyInput.displayName = 'Input';

export default MyInput;

const Input = styled.input`
  font: normal normal bold 25px/33px Malgun Gothic;
  letter-spacing: 0.38px;

  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`;
