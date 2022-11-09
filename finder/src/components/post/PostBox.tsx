import React from 'react';

import styled from 'styled-components';
import PostTitle from './PostTitle';
import PostContent from './PostContent';
import PostDetail from './PostDetail';
import TimeTable from './TimeTable';

interface PostBoxProps {
  period: {
    start: string;
    end: string;
  };
  onClickTable: any;
  onChange: React.ChangeEventHandler;
}

const PostBox = ({ period, onChange, onClickTable }: PostBoxProps) => {
  return (
    <InfoDiv>
      <PostTitle onChange={onChange} />
      <PostContent period={period} onChange={onChange} />
      <PostDetail onChange={onChange} />
      <TimeTable
        period={period}
        onChange={onChange}
        onClickTable={onClickTable}
      />
    </InfoDiv>
  );
};

export default React.memo(PostBox);

const InfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
