import React from 'react';

import styled from 'styled-components';

interface LogoProps {
	wid:string;
}

const MainLogo = ({wid}:LogoProps):JSX.Element => {
	const source = 'assets/ex-finder-logo.png';
	const LogoImg = styled.img`
	width:${wid};
	`
	return <LogoImg src={source} />
}

export default MainLogo;

