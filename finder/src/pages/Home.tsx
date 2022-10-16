import React from 'react';
import styled from 'styled-components';

// Components
import MyButton from '../components/MyButton';
import MainHeader from '../components/MainHeader';
import { useNavigate } from 'react-router-dom';
import LogoIcon from '../components/logo/Icon';

const Home = () => {
  const navigate = useNavigate();

  return (
    <Div>
      <MainHeader />
      <Content>
        <LeftContent>
          <DivText>
            오늘 업로드 된
            <br />
            1,340개의 실험을
            <br />
            확인해보세요!
          </DivText>
          <BtnToList
            text="확인하러 가기"
            name="btn-explist"
            onClick={() => {
              navigate('/list');
            }}
          />
          <IsExper
            text="실험자이신가요?"
            name="IsExperimenter"
            onClick={() => {
              navigate('/post');
            }}
          />
        </LeftContent>
        <LogoIcon wid="425px" />
      </Content>
    </Div>
  );
};

export default Home;

const Div = styled.div`
  width:1920px;
  min-width:1190px
  display:flex;
  flex-direction:column;
`;

const Content = styled.div`
  display: flex;
  height: 700px;
  align-items: center;
  justify-content: center;
`;
const LeftContent = styled.div`
  margin-right: 580px;
  display: flex;
  flex-direction: column;
  align-items: start;
`;

const DivText = styled.div`
  font: normal normal bold 60px/120px Malgun Gothic;
  margin-bottom: 25px;
`;

const BtnToList = styled(MyButton)`
  width: 307px;
  height: 72px;

  background: #8ecae4 0% 0% no-repeat padding-box;
  border-radius: 20px;
  opacity: 1;
  font: normal normal bold 30px/40px Malgun Gothic;
  letter-spacing: 0.45px;
  color: #000000;
`;

const IsExper = styled(MyButton)`
  background: none;
  margin-top: 24px;
  margin-left: 20px;
  font: normal normal bold 23px/31px Malgun Gothic;
  letter-spacing: 0.34px;
  color: #000000;
  opacity: 1;
`;
