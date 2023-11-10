import React from 'react';
import styled from 'styled-components';
import ImageHighlight1 from '../../Assets/ImageHighlight1.png';
import ImageHighlight2 from '../../Assets/ImageHighlight2.png';

const Container = styled.section`
	margin: 40px;
`;

const ItemDiv = styled.div`
	display: flex;
	align-items: center;
`;

const ImageDiv = styled.div``;

const Image = styled.img`
	max-width: 550px;
`;

const TextDiv = styled.div`
	padding-left: 20px;
`;

const Text = styled.h2`
	font-size: 41px;
	padding-bottom: 20px;
	max-width: 650px;
`;

const Desc = styled.p`
	font-size: 24px;
	max-width: 650px;
	padding-bottom: 40px;
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

const ItemDivTwo = styled.div`
	display: flex;
	align-items: center;
	padding-top: 95px;
	padding-bottom: 40px;
`;

const HighlightSection = () => {
	return (
		<Container>
			<ItemDiv>
				<ImageDiv>
					<Image src={ImageHighlight1} />
				</ImageDiv>
				<TextDiv>
					<Text>Enabling digital transformation and success for all.</Text>
					<Desc>
						Embark on your digital transformation journey with us. We'll explore
						the transformative power of technology, share inspiring success
						stories, and guide you every step of the way.
					</Desc>
					<Button>Get started </Button>
				</TextDiv>
			</ItemDiv>
			<ItemDivTwo>
				<TextDiv>
					<Text>
						Digital transformation reports reveal insights for business growth.
					</Text>
					<Desc>
						Our research, case studies, and expert insights reveal the paths to
						enhanced efficiency, customer engagement, and innovation, so you can
						transform your business.
					</Desc>
					<Button>Get started </Button>
				</TextDiv>
				<ImageDiv>
					<Image src={ImageHighlight2} />
				</ImageDiv>
			</ItemDivTwo>
		</Container>
	);
};

export default HighlightSection;
