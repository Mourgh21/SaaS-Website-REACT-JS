import React from 'react';
import styled from 'styled-components';
import TrustPolit from '../../Assets/TrustPolit.png';
import ImageOne from '../../Assets/ImageOne.png';
import ImageTwo from '../../Assets/ImageTwo.png';
import ImageThree from '../../Assets/ImageThree.png';

const Container = styled.section`
	background-color: #e7fbf4;
	margin-top: 60px;
`;

const HeadAndImage = styled.div`
	padding-top: 40px;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Text = styled.p`
	font-size: 45px;
`;

const Image = styled.img`
	max-width: 400px;
	margin-top: 30px;
`;

const ReviewsDv = styled.div`
	padding-top: 40px;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 20px;
	padding-bottom: 40px;
`;

const ImageIconOne = styled.img`
	max-width: 420px;
`;

const ImageIconTwo = styled.img`
	max-width: 420px;
`;

const ImageIconThree = styled.img`
	max-width: 420px;
`;

const TrustPilot = () => {
	return (
		<Container>
			<HeadAndImage>
				<Text>Nothing less than excellent</Text>
				<Image src={TrustPolit} />
			</HeadAndImage>
			<ReviewsDv>
				<ImageIconOne src={ImageOne} />
				<ImageIconTwo src={ImageTwo} />
				<ImageIconThree src={ImageThree} />
			</ReviewsDv>
		</Container>
	);
};

export default TrustPilot;
