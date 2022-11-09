import React, { useState } from 'react';

import styled from 'styled-components';
import MainHeader from '../components/MainHeader';

const MyPage = () => {
  const imgSource = 'assets/cat.jpg';

  const [joinList, setJoinList] = useState<object[]>([]);
  const [postList, setPostList] = useState<object[]>([]);

  return (
    <Div>
      <MainHeader />
      <DivContent>
        <UserInfo>
          <Bold>개인정보</Bold>
          <ImgCover>
            <Img src={imgSource} alt="사진" />
          </ImgCover>
          <Bold>김개발</Bold>
          <Else>
            <ElseItem>exfinder1234@gist.ac.kr</ElseItem>
            <ElseItem>010-1234-5678</ElseItem>
            <ElseItem>2001.01.01</ElseItem>
          </Else>
        </UserInfo>
        <DivsitionCenter></DivsitionCenter>
        <UserExp>
          <UserJoin>
            <Bold>참여한 실험 목록</Bold>
            <Division></Division>
            <ExpItem>
              <ExpTitle>심리학 실험 뇌인지 피실험자 모집</ExpTitle>
              <ExpDay>2022.05.23</ExpDay>
              {joinList.map((item, idx) => {
                return (
                  <>
                    <ExpTitle>item.title</ExpTitle>
                    <ExpDay>item.day</ExpDay>
                  </>
                );
              })}
            </ExpItem>
          </UserJoin>
          <UserPost>
            <Bold>작성한 실험 목록</Bold>
            <Division></Division>
            <ExpItem>
              <ExpTitle>VR 방식에 따른 게임 몰입도 피실험자 모집</ExpTitle>
              <ExpDay>2022.05.25</ExpDay>
              {postList.map((item, idx) => {
                return (
                  <>
                    <ExpTitle>item.title</ExpTitle>
                    <ExpDay>item.day</ExpDay>
                  </>
                );
              })}
            </ExpItem>
          </UserPost>
        </UserExp>
      </DivContent>
    </Div>
  );
};

export default MyPage;

const Div = styled.div`
  width: 1920px;
  min-width: 1190px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Bold = styled.div`
  font: normal normal bold 30px/40px Malgun Gothic;
  letter-spacing: 1.5px;
`;

// content
const DivContent = styled.div`
  width: 1600px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

// 왼쪽 content
const UserInfo = styled.div`
  width: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImgCover = styled.div`
  width: 180px;
  height: 180px;

  border: 1px solid black;
  border-radius: 70%;
  overflow: hidden;

  margin: 44px 0px;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Else = styled.div`
  margin: 40px 0px;
`;

const ElseItem = styled.div`
  text-align: left;
  width: 450px;

  font: normal normal normal 30px/40px Malgun Gothic;
  letter-spacing: 1.5px;

  border-bottom: 1px solid #707070;

  margin-bottom: 29px;
  padding-bottom: 5px;
`;

// 가운데 구분선
const DivsitionCenter = styled.div`
  height: 700px;
  width: 0px;
  margin: 0px 80px;
  box-shadow: 0px 10px 6px #00000029;
  border: 0.5px solid #707070;
  flex-grow: 0;
`;

// 오른쪽 content
const UserExp = styled.div`
  width: 900px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// 참여한 실험
const UserJoin = styled.div`
  width: 900px;
  height: 330px;
`;

const Division = styled.hr`
  width: 900px;
`;

// 게시한 실험
const UserPost = styled.div`
  width: 900px;
  height: 330px;
`;

const ExpItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const ExpTitle = styled.div`
  font: normal normal normal 27px/36px Malgun Gothic;
  letter-spacing: 1.35px;
`;

const ExpDay = styled.div`
  font: normal normal normal 27px/36px Malgun Gothic;
  letter-spacing: 1.35px;
`;
