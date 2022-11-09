import React from 'react';

import styled from 'styled-components';

interface PostBoxProps {
  onChange: React.ChangeEventHandler;
}

const PostDetail = ({ onChange }: PostBoxProps) => {
  return (
    <DetailInfo
      name="detail"
      onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
        onChange(e);
      }}
      placeholder="자세한 내용을 입력하세요."
    />
  );
};

export default PostDetail;

const DetailInfo = styled.textarea`
  width: 1550px;
  height: 260px;
  padding: 25px;

  font: normal normal normal 30px/40px Malgun Gothic;
  letter-spacing: 1.5px;

  ::placeholder {
    font: normal normal normal 30px/40px Malgun Gothic;
    letter-spacing: 1.5px;
    color: #ababab;
  }
  resize: none;

  border-radius: 10px;
`;
