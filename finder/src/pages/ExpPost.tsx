import React, { useState } from 'react';

import styled from 'styled-components';
import MyInput from '../components/MyInput';

// Components
import MainHeader from '../components/MainHeader';
import TimeTable from '../components/TimeTable';
import SelectYear from '../components/SelectYear';

const ExpPost = () => {
  type InfoType = {
    title: string;
    author: string;
    lab: string;
    field: string;
    location: string;
    reward: number;
    birthyear: object;
    sex: string;
  };

  const [expInfo, setExpInfo] = useState<InfoType>({
    title: '',
    author: '',
    lab: '',
    field: '',
    location: '',
    reward: 0,
    birthyear: {
      from: '전체',
      to: '전체',
    },
    sex: '',
  });

  const onChangeInfo = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setExpInfo({
      ...expInfo,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Div>
      <MainHeader />
      <InfoDiv>
        <Title>
          <InputTitle
            type="text"
            onChange={(e) => {
              onChangeInfo(e);
            }}
            placeholder="실험 제목"
          />
        </Title>
        <BasicInfo>
          <div>
            <ItemInfo>
              <div>작성자</div>
              <ItemInput
                type="text"
                placeholder="ex) 홍길동"
                onChange={(e) => {
                  onChangeInfo(e);
                }}
              />
            </ItemInfo>
            <ItemInfo>
              <div>실험 위치</div>
              <ItemInput
                type="text"
                placeholder="ex) GIST 대학 A동 410호"
                onChange={(e) => {
                  onChangeInfo(e);
                }}
              />
            </ItemInfo>
            <ItemInfo>
              <div>피실험자 생년</div>
              <SelectYear />
            </ItemInfo>
          </div>
          <div>
            <ItemInfo>
              <div>연구실/분야</div>
              <ItemInput
                type="text"
                placeholder="ex) 심리학연구"
                onChange={(e) => {
                  onChangeInfo(e);
                }}
              />
            </ItemInfo>
            <ItemInfo>
              <div>실험 보상</div>
              <ItemInput
                type="number"
                placeholder="ex) 10,000"
                onChange={(e) => {
                  onChangeInfo(e);
                }}
              />
            </ItemInfo>
            <ItemInfo>
              <div>피실험자 성별</div>
              <select
                onChange={(e) => {
                  onChangeInfo(e);
                }}
              >
                <option value="all">전체</option>
                <option value="male">남성</option>
                <option value="female">여성</option>
              </select>
            </ItemInfo>
          </div>
        </BasicInfo>
        <DetailInfo placeholder="자세한 내용을 입력하세요." />
        <TimeTable />
      </InfoDiv>
    </Div>
  );
};

export default ExpPost;

const Div = styled.div`
  width: 1920px;
  display: flex;
  flex-direction: column;
`;
const InfoDiv = styled.div`
  height: 2000px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  width: 1650px;

  border-bottom: 1px solid grey;
  padding: 20px 18px;

  font: normal normal bold 30px/40px Malgun Gothic;
  letter-spacing: 1.5px;
  color: #000000;
  opacity: 1;
`;

const InputTitle = styled(MyInput)`
  border: none;
  outline: none;
  ::placeholder {
    font: normal normal bold 30px/40px Malgun Gothic;
    letter-spacing: 1.5px;
    color: #000000;
    opacity: 1;
  }
`;

// 실험과 관련된 기본 정보
const BasicInfo = styled.div`
  width: 1600px;
  margin: 20px;
  display: flex;
  justify-content: space-between;
`;

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

const ItemInput = styled(MyInput)`
  width: 450px;
  height: 40px;
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
