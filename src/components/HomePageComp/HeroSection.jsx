import React from 'react';
import styled from 'styled-components';
import Herosection from '../../Assets/Herosection.png';
import Ai from '../../Assets/Ai.png';
import Expenses from '../../Assets/Expenses.png';
import Message from '../../Assets/Message.png';

const Container = styled.div`
	width: 100%;
	max-width: 100%;
	height: 100vh;
	overflow: hidden;
`;

const ItemDiv = styled.div`
	position: relative;
`;

const Image = styled.img`
	width: 100%;
	height: 100%;
`;

const TextDiv = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-95%, -450px);
	z-index: 1;
`;

const Title = styled.h1`
	font-size: 50px;
	line-height: 1.2em;
`;

const Span = styled.span`
	color: #0779d1;
`;

const Desc = styled.p`
	max-width: 650px;
	font-size: 25px;
	padding-top: 15px;
	padding-bottom: 35px;
	color: #334155;
`;

const Button = styled.button`
	margin-right: 20px;
	width: 180px;
	height: 60px;
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

const ButtonDemo = styled.button`
	width: 180px;
	height: 60px;
	border-radius: 5px;
	border: 1px solid black;
	background-color: transparent;

	color: black;
	cursor: pointer;

	font-size: 18px;
	font-weight: 500;
	&:hover {
		background-color: #c4ddf0;
	}
`;

const ImagesDiv = styled.div``;

const ImageAi = styled.img`
	max-width: 650px;
	position: absolute;
	top: 100%;
	left: 82%;
	transform: translate(-50%, -440px);
	z-index: 1;
`;

const ImageAii = styled.img`
	max-width: 260px;
	position: absolute;
	top: 100%;
	left: 82%;
	transform: translate(-50%, -440px);
	z-index: 1;
`;

const ImageAiii = styled.img`
	max-width: 280px;
	position: absolute;
	top: 100%;
	left: 82%;
	transform: translate(-380px, -200px);
	z-index: 1;
`;

const HeroSection = () => {
	return (
		<Container>
			<Image src={Herosection} />
			<ItemDiv>
				<TextDiv>
					<Title>
						Make Smarter Business Decisions with <Span>StratifyPro</Span>{' '}
						Insights
					</Title>
					<Desc>
						Our transformative world of cloud software solutions, where
						innovation sparks growth and propels businesses forward.
					</Desc>
					<Button>Get started free</Button>
					<ButtonDemo>Book a demo</ButtonDemo>
				</TextDiv>
				<ImagesDiv>
					<ImageAi src={Ai} />
					<ImageAii src={Expenses} />
					<ImageAiii src={Message} />
				</ImagesDiv>
			</ItemDiv>
		</Container>
	);
};

export default HeroSection;
