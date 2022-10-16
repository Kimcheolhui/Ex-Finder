import React from 'react';

import styled from 'styled-components';

const TimeTable = () => {
  return (
    <Table>
      <thead>
        <tr>
          <Throw>빈공간</Throw>
          <Th>10/16</Th>
          <Th>10/17</Th>
          <Th>10/18</Th>
          <Th>10/19</Th>
          <Th>10/20</Th>
          <Th>10/21</Th>
          <Th>10/22</Th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <Tdrow></Tdrow>
          <Td></Td>
          <Td></Td>
          <Td></Td>
          <Td></Td>
          <Td></Td>
          <Td></Td>
          <Td></Td>
        </tr>
        <tr>
          <Tdrow></Tdrow>
          <Td></Td>
          <Td></Td>
          <Td></Td>
          <Td></Td>
          <Td></Td>
          <Td></Td>
          <Td></Td>
        </tr>
        <tr>
          <Tdrow></Tdrow>
          <Td></Td>
          <Td></Td>
          <Td></Td>
          <Td></Td>
          <Td></Td>
          <Td></Td>
          <Td></Td>
        </tr>
        <tr>
          <Tdrow></Tdrow>
          <Td></Td>
          <Td></Td>
          <Td></Td>
          <Td></Td>
          <Td></Td>
          <Td></Td>
          <Td></Td>
        </tr>
      </tbody>
    </Table>
  );
};

export default TimeTable;

const Table = styled.table`
  border-collapse: collapse;
  margin-top: 36px;
`;

const Throw = styled.th`
  background: none;
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

const Tdrow = styled.td``;

const Td = styled.td`
  width: 213px;
  height: 60px;
  text-align: center;

  border: 1px solid #707070;
  opacity: 1;
`;
