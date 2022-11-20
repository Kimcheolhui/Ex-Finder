import React from 'react';

import styled from 'styled-components';

import MyInput from '../mycomponent/MyInput';

interface PostBoxProps {
  onChange: React.ChangeEventHandler;
}

const PostTitle = ({ onChange }: PostBoxProps) => {
  return (
    <Title>
      <InputTitle
        type="text"
        name="title"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          onChange(e);
        }}
        placeholder="실험 제목"
      />
    </Title>
  );
};

export default React.memo(PostTitle);

const Title = styled.div`
  width: 1650px;
  height: 50px;
  border-bottom: 1px solid grey;
  padding: 20px 18px;

  font: normal normal bold 30px/40px Malgun Gothic;
  letter-spacing: 1.5px;
  color: #000000;
  opacity: 1;
`;

const InputTitle = styled(MyInput)`
  width: 100%;
  border: none;
  outline: none;
  padding: 0px 25px;
  ::placeholder {
    font: normal normal bold 30px/40px Malgun Gothic;
    letter-spacing: 1.5px;
    color: #ababab;
    opacity: 1;
  }
`;
