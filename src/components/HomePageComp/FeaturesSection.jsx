import React from 'react';
import styled from 'styled-components';
import Image3D from '../../Assets/Image3D.png';
import Image3D2 from '../../Assets/Image3D2.png';
import Image3D1 from '../../Assets/Image3D1.png';

const Container = styled.section`
	margin: 40px;
	display: flex;
	gap: 30px;
`;

const ItemDiv = styled.div``;

const Items = styled.div`
	box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
	padding-left: 25px;
	display: flex;
	flex-direction: column;
	background-image: linear-gradient(to bottom, #e6fbf4, #ffffff);
	max-width: 400px;
	height: 500px;
	border-radius: 25px;
	border: 1px solid #cbd5e1;
	justify-content: center;
`;

const Text = styled.h3`
	font-size: 31px;
	padding-bottom: 15px;
`;

const TextButton = styled.h3`
	font-size: 23px;
	text-decoration: underline;
	&:hover {
		color: #0779d1;
	}
	cursor: pointer;
`;

const Desc = styled.p`
	padding-bottom: 60px;
	max-width: 400px;
	font-size: 22px;
	color: #334155;
`;

const ImageDiv = styled.div``;

const Image = styled.img`
	padding-top: 20px;
	max-width: 350px;
`;

const FeaturesSection = () => {
	return (
		<Container>
			<ItemDiv>
				<Items>
					<Text>Analyze your Data</Text>
					<Desc>
						It can be overwhelming and time-consuming to try to analyze large
						amounts of data on your own.
					</Desc>
					<TextButton>Learn more</TextButton>
					<ImageDiv>
						<Image src={Image3D} />
					</ImageDiv>
				</Items>
			</ItemDiv>
			<ItemDiv>
				<Items>
					<Text>Collaborate Securely</Text>
					<Desc>
						At StratifyPro, we understand the importance of secure collaboration
						in the modern business world.
					</Desc>
					<TextButton>Learn more</TextButton>
					<ImageDiv>
						<Image src={Image3D2} />
					</ImageDiv>
				</Items>
			</ItemDiv>
			<ItemDiv>
				<Items>
					<Text>Easy and Intuitive</Text>
					<Desc>
						At StratifyPro, we believe that data analytics should be accessible
						to everyone, not just data experts.
					</Desc>
					<TextButton>Learn more</TextButton>
					<ImageDiv>
						<Image src={Image3D1} />
					</ImageDiv>
				</Items>
			</ItemDiv>
		</Container>
	);
};

export default FeaturesSection;
