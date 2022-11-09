import React from 'react';

import styled from 'styled-components';

const TableHead = () => {
  return (
    <TableHeader>
      <OrderHead>번호</OrderHead>
      <TitleHead>제목</TitleHead>
      <RewardHead>보상</RewardHead>
      <LocationHead>장소</LocationHead>
      <PeriodHead>기간</PeriodHead>
    </TableHeader>
  );
};

export default TableHead;

const TableHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  width: 100%;

  border-bottom: 1px solid #707070;

  margin: 50px 0px 20px 0px;
  padding-bottom: 20px;
`;

const HeadText = styled.div`
  font: normal normal bold 30px/40px Malgun Gothic;
  letter-spacing: 1.5px;
  text-align: center;
`;

const OrderHead = styled(HeadText)`
  width: 100px;
  font-weight: bold;
`;

const TitleHead = styled(HeadText)`
  width: 600px;
  font-weight: bold;
`;

const RewardHead = styled(HeadText)`
  width: 200px;
  font-weight: bold;
`;

const LocationHead = styled(HeadText)`
  width: 400px;
  font-weight: bold;
`;

const PeriodHead = styled(HeadText)`
  width: 400px;
  font-weight: bold;
`;
