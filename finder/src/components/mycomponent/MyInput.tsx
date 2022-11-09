import React from 'react';

import styled from 'styled-components';

interface InputProps {
  type: string;
  name: string;
  value?: any;
  id?: string;
  text?: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  className?: string;
  min?: string;
  max?: string;
}

const MyInput = ({
  className,
  name,
  value,
  type,
  id,
  onChange,
  placeholder,
  min,
  max,
}: InputProps): JSX.Element => {
  return (
    <Input
      className={className}
      value={value}
      name={name}
      type={type}
      id={id}
      onChange={onChange}
      placeholder={placeholder}
      min={min}
      max={max}
    />
  );
};

MyInput.displayName = 'Input';

export default React.memo(MyInput);

const Input = styled.input`
  font: normal normal bold 25px/33px Malgun Gothic;
  letter-spacing: 0.38px;

  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`;
