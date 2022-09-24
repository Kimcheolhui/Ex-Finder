import React from 'react'

import { useNavigate } from 'react-router-dom'
import { useState} from 'react'

import styled from 'styled-components'

import MyButton from '../components/MyButton'
import LogoIcon from '../components/LogoIcon'

const LoginBox = () => {
	const [email, setEmail]=useState("");
	const [pwd,setPwd] =useState("");
	
	const navigate = useNavigate();

	const [showPassword, setShowPassword] = useState(false)
	const PwdIcon = <ToggleImg src={showPassword ? "assets/pwd-visible.png":"assets/pwd-invisible.png"} />

	const togglePwd = () => {
		setShowPassword(!showPassword);
	}

	const handleLogin = () => {
		if (email === '') {
			window.alert("이메일을 입력해주세요.");
      return;
    }
    // 비밀번호를 입력하지 않은 경우
    else if (pwd === '') {
			window.alert("비밀번호를 입력해주세요.");

    }
    // 이메일, 비번 둘 다 입력했을 경우
    else {
      window.alert("로그인 일단 성공");
    }
	}

	return <LoginContent>
	<IconLogo img={<LogoIcon wid="120px" />}
		name="Icon" onClick={()=>{
			navigate('/');
		}} />
	<DivLogin>로그인</DivLogin>
	<LoginInput>
		<DivInput>
			<Input
				type="text"
				onChange={(e) => {
					setEmail(e.target.value);
				}}
				placeholder="이메일을 입력하세요."
			/>
		</DivInput>
		<DivInput>
			<Input
				type={showPassword ? "text" :"password"}
				onChange={(e) => {
					setPwd(e.target.value);
				}}
				placeholder="비밀번호를 입력하세요."
			/>
			<MyButton name="togglepassword" img={PwdIcon} onClick={togglePwd} />
		</DivInput>
	</LoginInput>
	<DivQue>
		<div>비밀번호를 잊으셨나요?</div>
		<div>아직 회원이 아니신가요?</div>
	</DivQue>
	<LoginButton text="로그인" name="Login Button" onClick={handleLogin} />
</LoginContent>
}

export default LoginBox;


const LoginContent = styled.div`
	display:flex;
	flex-direction:column;

	align-items:center;
	justify-content:center;


	width: 745px;
	height: 938px;

	background:#ffffff;
	border:1px solid #000000;
	border-radius : 63px;
	opacity:0.77;
`

const IconLogo = styled(MyButton)`
	padding-bottom:45px;
`

const DivLogin = styled.div`
	font: normal normal bold 40px/54px Malgun Gothic;
	letter-spacing: 0.6px;
	color: #000000;
	opacity: 1;
	margin-bottom:70px;
`

const LoginInput = styled.div`
	display:flex;
	flex-direction:column;
`


const DivInput = styled.div`
	width:501px;

	border-bottom:1px solid grey;
	padding-bottom:23px;
	margin-bottom:20px;
	margin-top:20px;

	display:flex;
	justify-content: space-between;
`

const Input = styled.input`
	border:none;
	outline:none;

	margin-left:27px;

	font: normal normal bold 25px/33px Malgun Gothic;
	letter-spacing: 0.38px;
`


const ToggleImg = styled.img`
	width:34px;
	height:34px;
`

const DivQue = styled.div`
	width:501px;
	text-align:right;
	font: normal normal bold 25px/33px Malgun Gothic;
	letter-spacing: 0.38px;
	color: #7F7F7F;
	opacity: 1;
	margin-top:10px;
	margin-bottom:25px;
`

const LoginButton = styled(MyButton)`

	background-color: #8EAEE4;
	border: 1px solid #707070;
	border-radius:30px;
	opacity: 1;

	width:300px;
	height:85px;

	font: normal normal bold 30px/40px Malgun Gothic;
	letter-spacing: 0.45px;
	color: #000000;
`