import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// Components
import PostBox from '../components/post/PostBox';
import styled from 'styled-components';
import MainHeader from '../components/MainHeader';
import MyButton from '../components/mycomponent/MyButton';

import { makeperiodArr } from '../components/util/makePeriodArr';

import '../post.css';

interface InfoType {
  title: string;
  field: string;
  location: string;
  reward: number;
  age: {
    ageFrom?: number;
    ageTo?: number;
  };
  gender: string;
  day: {
    start: string;
    end: string;
  };
  detail: string;
}

interface timeDictType {
  [key: string]: string[];
}

const ExpPost = () => {
  const navigate = useNavigate();

  const [expInfo, setExpInfo] = useState<InfoType>({
    title: '',
    field: '',
    location: '',
    reward: 0,
    age: {
      ageFrom: 1,
      ageTo: 150,
    },
    gender: '모두',
    day: {
      start: '',
      end: '',
    },
    detail: '',
  });

  // 사용자가 선택한 날짜 배열
  // ex) ['10/11','10/12', '10/13']
  const periodArr: string[] = makeperiodArr(expInfo.day);
  // 위 배열을 토대로 object 생성
  const initDict = () => {
    const tempDict: timeDictType = {};
    for (let i = 0; i < periodArr.length; i++) {
      tempDict[periodArr[i]] = [];
    }
    return tempDict;
  };

  // TimeTable state
  const [timeDict, setTimeDict] = useState<timeDictType>(initDict);
  useEffect(() => {
    setTimeDict(initDict);
  }, [expInfo.day]);

  // TimeTable Cell 클릭 시 실행하는 함수
  // cell 색 변환 및 state 반영
  const handleTableClick = (day: string, time: string) => {
    console.log(day, time, 'is clicked');

    // 사용자가 클릭한 cell
    const element = document.getElementById(day + '-' + time);

    // 만약 이미 클릭했던 셀이라면
    // state에서 제거 + className 제거
    if (timeDict[day].includes(time)) {
      for (let i = 0; i < timeDict[day].length; i++) {
        if (timeDict[day][i] === time) {
          setTimeDict((prevState) => {
            return {
              ...prevState,
              [day]: timeDict[day]
                .slice(0, i)
                .concat(timeDict[day].slice(i + 1, timeDict[day].length)),
            };
          });
          // timeDict[day].splice(i, 1);
        }
      }
      if (element != null) {
        element.classList.remove('selected');
      }
    }
    // 클릭하지 않은 셀이라면
    // state에 추가 + className 추가
    else {
      setTimeDict({
        ...timeDict,
        [day]: timeDict[day].concat(time),
      });

      const element = document.getElementById(day + '-' + time);
      if (element != null) {
        element.classList.add('selected');
      }
    }
  };

  // 로그인 버튼 클릭 시 실행하는 함수
  // 로그인 입력값 확인 후
  // 서버로 data 전달
  const handleSubmit = () => {
    if (
      (expInfo.field == '' ||
        expInfo.location == '' ||
        expInfo.day.start == '' ||
        expInfo.day.end == '',
      expInfo.detail == '')
    ) {
      window.alert('필요한 정보를 모두 입력해주세요.');
    } else if (JSON.stringify(timeDict) == '{}') {
      window.alert('실험 시각을 입력해주세요.');
    } else {
      // 서버로 데이터 전송...서버가 없어요ㅠㅠ
      // axios
      //   .post('#', {
      //     data: expInfo,
      //   })
      //   .then((Response) => {
      //     console.log(Response.data);
      //   })
      //   .catch((Error) => {
      //     console.log(Error);
      //   });
      navigate('/list');
    }
  };

  // input 입력 시 state에 반영해주는 함수
  const onChangeInfo = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>,
  ) => {
    if (e.target.name == 'day') {
      setExpInfo((prevState) => ({
        ...prevState,
        day: {
          ...expInfo.day,
          [e.target.id]: e.target.value,
        },
      }));
    } else if (e.target.name == 'age') {
      setExpInfo((prevState) => ({
        ...prevState,
        age: {
          ...expInfo.age,
          [e.target.id]: e.target.value,
        },
      }));
    } else {
      setExpInfo((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
    }
  };

  return (
    <Div>
      <MainHeader />
      <PostBox
        onClickTable={handleTableClick}
        onChange={onChangeInfo}
        period={expInfo.day}
      />
      <SubmitButton
        name="submit_post"
        onClick={handleSubmit}
        text="게시글 올리기"
      />
    </Div>
  );
};

export default ExpPost;

const Div = styled.div`
  width: 1920px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SubmitButton = styled(MyButton)`
  width: 200px;
  height: 50px;
  border: 1px solid gre;
  border-radius: 15px;
  background-color: #8ecae4;
  font-size: 20px;
  font-weight: Bold;
  margin-bottom: 36px;
`;
