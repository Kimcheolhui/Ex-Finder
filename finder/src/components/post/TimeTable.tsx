import React from 'react';

import styled from 'styled-components';

import { makeperiodArr } from '../util/makePeriodArr';
import { makeTimes } from '../util/makeTimes';

interface PostBoxProps {
  period: {
    start: string;
    end: string;
  };
  onClickTable: any;
  onChange: React.ChangeEventHandler;
}

const TimeTable = ({ period, onChange, onClickTable }: PostBoxProps) => {
  // 선택한 날짜들에 대한 "월/일" 형식의 string 배열
  const periodArr: string[] = makeperiodArr(period);

  // 00시 ~ 24시 배열
  const times = makeTimes();

  return (
    <Div>
      {period.start != '' && period.end != '' && (
        <Table>
          <thead>
            <tr>
              <Throw />
              {periodArr.map((day) => (
                <Th key={day}>{day}</Th>
              ))}
            </tr>
          </thead>
          <tbody>
            {times.map((time) => (
              <tr key={time}>
                <Tdrow>{time}시</Tdrow>
                {periodArr.map((day) => (
                  <Td
                    key={day}
                    id={day + '-' + time}
                    onClick={() => {
                      onClickTable(day, time);
                    }}
                  ></Td>
                ))}
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </Div>
  );
};

export default TimeTable;

const Div = styled.div`
  margin: 36px;
`;

const Table = styled.table`
  border-collapse: collapse;
`;

const Throw = styled.th`
  background: none;
  width: 50px;
  text-align: left;
  padding-right: 3px;
`;

const Th = styled.th`
  width: 213px;
  height: 60px;

  background-color: #d4d4d4;
  opacity: 1;

  border-color: #d4d4d4;

  text-align: center;
  font: normal normal bold 30px/40px Malgun Gothic;
  letter-spacing: 1.5px;
  color: #000000;
  opacity: 1;
`;

const Tdrow = styled.td`
  background: none;
  width: 50px;
  font: normal normal normal 20px/27px Malgun Gothic;
  letter-spacing: 1px;
  text-align: left;

  vertical-align: top;

  padding-right: 3px;
`;

const Td = styled.td`
  width: 213px;
  height: 60px;
  text-align: center;

  border: 1px solid #707070;
  opacity: 1;

  &.active {
    background-color: #8ecae4;
  }
`;
