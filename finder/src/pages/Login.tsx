import React from 'react'

import MyButton from '../components/MyButton'
import MainLogo from '../components/MainLogo'
import LoginBox from '../components/LoginBox'

import { useNavigate } from 'react-router-dom'

import styled from 'styled-components'

const Login = ():JSX.Element => {
	const navigate = useNavigate();

	return <Div>
		<DivContent>
			<MainLogoBtn name='mainlogo'  img={<MainLogo wid="825px" />} onClick={()=>{
				navigate('/');
			}}/>
			<LoginBox />
		</DivContent>
	</Div>
}


export default Login

const Div = styled.div`
	background: transparent url('assets/login-background.png') 0% 0% no-repeat padding-box;
	background-size: cover;
	position:absolute;
	opacity:1;
	
	height:100vh;
	width:100vw;
	
	display: flex;
  justify-content:center;
`

const DivContent = styled.div`
	width:1920px;
	
	display:flex;
	align-items:center;
	justify-content:center; 
`

const MainLogoBtn = styled(MyButton)`
	margin-right:161px;
`

