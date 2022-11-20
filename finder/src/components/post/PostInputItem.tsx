import React from 'react';
import styled from 'styled-components';

import MyInput from '../mycomponent/MyInput';

interface postinputitemProps {
  inputname: string;
  type: string;
  name: string;
  placeholder: string;
  onChange: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>,
  ) => void;
}

const PostInputItem = ({
  inputname,
  type,
  name,
  placeholder,
  onChange,
}: postinputitemProps) => {
  return (
    <ItemInfo>
      <div>{inputname}</div>
      <InputCover>
        <ItemInput
          type={type}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
        />
      </InputCover>
    </ItemInfo>
  );
};

export default PostInputItem;

const ItemInfo = styled.div`
  width: 720px;
  font: normal normal bold 30px/40px Malgun Gothic;
  letter-spacing: 1.5px;
  color: #000000;
  opacity: 1;

  margin-top: 15px;
  margin-bottom: 30px;

  display: flex;
  justify-content: space-between;
`;

const InputCover = styled.div`
  width: 450px;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const ItemInput = styled(MyInput)`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  border: 1px solid grey;
  padding: 0px 10px;

  ::placeholder {
    font: normal normal normal 30px/40px Malgun Gothic;
    letter-spacing: 1.5px;
    color: #ababab;
    opacity: 1;
  }
`;
