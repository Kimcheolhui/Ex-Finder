import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';

import MyButton from '../mycomponent/MyButton';
import TableHead from './TableHead';
import TableBody from './TabelBody';

const ListBox = () => {
  const navigate = useNavigate();

  interface ListType {
    title: string;
    field: string;
    reward: string;
    location: string;
    period: string;
  }

  const templist = [
    {
      title: '심리학 실험 뇌인지 피실험자 모집',
      field: '심리학',
      reward: '10,000원/시간',
      location: 'GIST 대학A 410호',
      period: '2022.05.23. ~ 2022.05.29.',
    },
    {
      title: 'VR 방식에 따른 게임 몰입도 피실험자 모집',
      field: '심리학',
      reward: '15,000원/시간',
      location: 'GIST 대학A 412호',
      period: '2022.05.30. ~ 2022.06.05.',
    },
  ];
  const [explist, setExpList] = useState<ListType[]>(templist);

  useEffect(() => {
    setExpList(templist);
  });

  return (
    <Div>
      <TableHead />
      <TableBody explist={explist} />

      <NewPostButton
        name="newpost"
        text="실험글 작성"
        onClick={() => {
          navigate('/post');
        }}
      />
    </Div>
  );
};

export default ListBox;

const Div = styled.div`
  width: 1700px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const NewPostButton = styled(MyButton)`
  width: 270px;
  height: 70px;

  font: normal normal bold 30px/40px Malgun Gothic;
  letter-spacing: 0.45px;

  margin-top: 50px;

  background: #8ecae4 0% 0% no-repeat padding-box;
  border: 1px solid black;
  border-radius: 20px;
`;
