import React from 'react';
import styled from 'styled-components';
import StratifyPro from '../../Assets/StratifyPro.png';

const Container = styled.section`
	position: relative;
`;

const Itemdiv = styled.div`
	margin: 40px;

	display: flex;
	align-items: center;
	justify-content: space-between;
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
`;

const LogoDiv = styled.div``;

const Image = styled.img`
	cursor: pointer;
`;

const TextDiv = styled.div`
	display: flex;
	text-align: center;
	gap: 40px;
	align-items: center;
`;

const Text = styled.p`
	font-size: 20px;
	font-weight: 500;
	&:hover {
		color: #0779d1;
	}
	cursor: pointer;
`;

const Button = styled.button`
	width: 160px;
	height: 50px;
	border-radius: 5px;
	border: none;
	background-color: black;
	color: white;
	cursor: pointer;
	&:hover {
		background: #131825;
	}
	font-size: 18px;
	font-weight: 500;
`;

const Header = () => {
	return (
		<Container>
			<Itemdiv>
				<LogoDiv>
					<Image src={StratifyPro} />
				</LogoDiv>
				<TextDiv>
					<Text>Features</Text>
					<Text>Pricing</Text>
					<Text>Blog</Text>
					<Text>About us</Text>
					<Text>Contact</Text>
					<Button>Get Started</Button>
				</TextDiv>
			</Itemdiv>
		</Container>
	);
};

export default Header;
