import React from 'react';

import styled from 'styled-components';

interface ListType {
  title: string;
  field: string;
  reward: string;
  location: string;
  period: string;
}

const TableBody = ({ explist }: { explist: ListType[] }) => {
  return (
    <TableContents>
      {explist.map((exp, idx) => (
        <TableItem key={idx}>
          <Order>{idx + 1}</Order>
          <Title>{exp.title}</Title>
          <Reward>{exp.reward}</Reward>
          <Location>{exp.location}</Location>
          <Period>{exp.period}</Period>
        </TableItem>
      ))}
    </TableContents>
  );
};

export default TableBody;

const TableContents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
`;

const TableItem = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px 0px;
`;

const ItemText = styled.div`
  font: normal normal normal 27px/36px Malgun Gothic;
  letter-spacing: 1.35px;
  text-align: center;
`;

const Order = styled(ItemText)`
  width: 100px;
`;
const Title = styled(ItemText)`
  width: 600px;
`;
const Reward = styled(ItemText)`
  width: 200px;
`;

const Location = styled(ItemText)`
  width: 400px;
`;

const Period = styled(ItemText)`
  width: 400px;
`;
