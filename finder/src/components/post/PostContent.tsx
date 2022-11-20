import React from 'react';

import styled from 'styled-components';

import MyInput from '../mycomponent/MyInput';
import PostInputItem from './PostInputItem';

import { getDate } from '../util/getDate';

interface PostBoxProps {
  period: {
    start: string;
    end: string;
  };
  onChange: React.ChangeEventHandler;
}

const PostContent = ({ period, onChange }: PostBoxProps) => {
  // 작성 일자(현재 날짜) 다음 날부터 일정 설정 가능
  const today = new Date();
  today.setDate(today.getDate() + 1);
  const year = today.getFullYear();
  const month = ('0' + (today.getMonth() + 1)).slice(-2);
  const day = ('0' + today.getDate()).slice(-2);
  const currDate = year + '-' + month + '-' + day;

  // 실험 기간 제한하기 위한 과정
  const endlimit: Date = new Date(period.start);
  endlimit.setDate(endlimit.getDate() + 6);
  // 실험 시작일 기준 +6일, yyyy-mm-dd 형식 : string type
  const strEndLimit: string = getDate(endlimit);

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>,
  ) => {
    onChange(e);
  };
  return (
    <BasicInfo>
      <div>
        <PostInputItem
          inputname={'실험 분야'}
          type={'text'}
          name={'field'}
          placeholder={'ex) 심리학연구'}
          onChange={handleChange}
        />
        <PostInputItem
          inputname={'실험 위치'}
          type={'text'}
          name={'location'}
          placeholder={'ex) GIST 대학 A동 410호'}
          onChange={handleChange}
        />
        <ItemInfo>
          <div>실험 기간</div>
          <InputCover>
            <MyInput
              type="date"
              name="day"
              id="start"
              min={currDate}
              onChange={onChange}
            />
            <MyInput
              type="date"
              name="day"
              id="end"
              min={period.start}
              max={strEndLimit}
              onChange={onChange}
            />
          </InputCover>
        </ItemInfo>
      </div>
      <div>
        <PostInputItem
          inputname={'실험 보상'}
          type={'number'}
          name={'reward'}
          placeholder={'ex) 10,000'}
          onChange={handleChange}
        />
        <ItemInfo>
          <div>피실험자 성별</div>
          <InputCover>
            <DivGender>
              <GenderInput
                type="radio"
                name="gender"
                onChange={(
                  e:
                    | React.ChangeEvent<HTMLInputElement>
                    | React.ChangeEvent<HTMLSelectElement>,
                ) => {
                  onChange(e);
                }}
                value="전체"
                id="all"
              />
              <Label htmlFor="all">전체</Label>
            </DivGender>
            <DivGender>
              <GenderInput
                type="radio"
                name="gender"
                onChange={(
                  e:
                    | React.ChangeEvent<HTMLInputElement>
                    | React.ChangeEvent<HTMLSelectElement>,
                ) => {
                  onChange(e);
                }}
                value="남성"
                id="male"
              />

              <Label htmlFor="male">남성</Label>
            </DivGender>
            <DivGender>
              <GenderInput
                type="radio"
                name="gender"
                onChange={(
                  e:
                    | React.ChangeEvent<HTMLInputElement>
                    | React.ChangeEvent<HTMLSelectElement>,
                ) => {
                  onChange(e);
                }}
                value="여성"
              />
              <Label htmlFor="female">여성</Label>
            </DivGender>
          </InputCover>
        </ItemInfo>
        <ItemInfo>
          <div>피실험자 나이</div>
          <InputCover>
            <AgeFrom>
              <AgeInput
                type="number"
                name="age"
                id="ageFrom"
                min="1"
                max="100"
                placeholder="1"
                onChange={(
                  e:
                    | React.ChangeEvent<HTMLInputElement>
                    | React.ChangeEvent<HTMLSelectElement>,
                ) => {
                  onChange(e);
                }}
              />
              <div>세</div>
            </AgeFrom>
            <div>~</div>
            <AgeTo>
              <AgeInput
                type="number"
                name="age"
                id="ageTo"
                min="1"
                max="150"
                placeholder="100"
                onChange={(
                  e:
                    | React.ChangeEvent<HTMLInputElement>
                    | React.ChangeEvent<HTMLSelectElement>,
                ) => {
                  onChange(e);
                }}
              />
              <div>세</div>
            </AgeTo>
          </InputCover>
        </ItemInfo>
      </div>
    </BasicInfo>
  );
};

export default React.memo(PostContent);

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

const AgeInput = styled(MyInput)`
  border-radius: 5px;
  border: 1px solid grey;
  width: 100px;
  text-align: center;
`;

const AgeFrom = styled.div`
  display: flex;
  flex-direction: row;
  width: 200px;
  justify-content: space-evenly;
`;

const AgeTo = styled.div`
  display: flex;
  flex-direction: row;
  width: 200px;
  justify-content: space-evenly;
`;

const GenderInput = styled(MyInput)`
  width: 50px;
  height: 50px;
`;

const DivGender = styled.div`
  display: flex;
  flex-directioin: row;
  align-items: center;
  justify-content: space-evenly;
`;

const Label = styled.label`
  font-size: 30px;
  color: black;
  margin-right: 10px;
`;
