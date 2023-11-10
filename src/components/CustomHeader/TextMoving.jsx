import React from 'react';
import styled, { keyframes } from 'styled-components';
import trustedimage from '../../Assets/trustedimage.png';

const moveRight = keyframes`
100% {
    transform: translateX(100%); 
  }

  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%); 
  }
`;

const MovingTextContainer = styled.div`
	white-space: nowrap;
	overflow: hidden;
	margin-top: 20px;
	margin-bottom: 20px;
`;

const MovingText = styled.div`
	animation: ${moveRight} 50s linear infinite;
	text-align: center;
	font-size: 30px;
	font-weight: bold;
	white-space: nowrap;
`;

const Image = styled.img`
	margin-left: 60px;
`;

const MovingTextComponent = () => {
	return (
		<MovingTextContainer>
			<MovingText>
				<Image src={trustedimage} />
				<Image src={trustedimage} />
				<Image src={trustedimage} />
				<Image src={trustedimage} />
				<Image src={trustedimage} />
				<Image src={trustedimage} />
				<Image src={trustedimage} />
				<Image src={trustedimage} />
				<Image src={trustedimage} />
				<Image src={trustedimage} />
				<Image src={trustedimage} />
				<Image src={trustedimage} />
				<Image src={trustedimage} />
				<Image src={trustedimage} />
				<Image src={trustedimage} />
				<Image src={trustedimage} />
				<Image src={trustedimage} />
				<Image src={trustedimage} />
				<Image src={trustedimage} />
				<Image src={trustedimage} />
			</MovingText>
		</MovingTextContainer>
	);
};

export default MovingTextComponent;
