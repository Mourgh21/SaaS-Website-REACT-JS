import React from 'react';
import styled from 'styled-components';

import Icon from '../../Assets/Icon.svg';

const Container = styled.section``;

const ItemsDiv = styled.div``;

const Textitem = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

const DivCard = styled.div`
	justify-content: center;
	align-items: center;
	overflow: hidden;
	box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
	display: flex;
	flex-direction: column;
	background-image: linear-gradient(to bottom, #fefdfc, #c1dffb, #c1dffb);
	height: 650px;
	max-width: 400px;
	border-radius: 29px;
	border: 1px solid #cbd5e1;
	justify-content: center;
`;

const Desc = styled.p`
	font-size: 20px;
	margin-top: 50px;
`;

const Text = styled.h1`
	margin-top: 15px;
`;

const DescTwo = styled.p`
	font-size: 19px;
	margin-bottom: 20px;
	max-width: 300px;
`;
const ButtonDiv = styled.div``;

const Button = styled.button`
	margin-right: 20px;
	font-size: 18px;
	font-weight: 500;
	width: 320px;
	height: 55px;
	border-radius: 10px;
	border: none;
	background-color: #0779d1;
	color: white;
	cursor: pointer;
	&:hover {
		background: #131825;
	}
`;

const DivIcon = styled.div`
	align-items: center;
	display: flex;
	align-items: center;
	margin-bottom: 12px;
`;

const ImageIcon = styled.img`
	width: 25px;
	margin-right: 10px;
`;

const TextDiv = styled.div`
	font-size: 19px;
	align-items: center;
	margin-bottom: 20px;
	margin-top: 20px;
`;

const Image = styled.img``;

const ImageCardDiv = styled.div`
	border-radius: 29px;
	overflow: hidden;
`;

const PriceNumber = styled.span`
	font-size: 45px;
	font-weight: bold;
`;

const PriceText = styled.span`
	font-size: 20px;
	font-weight: normal;
`;

const PlanCards = ({ data }) => {
	const { subtitle, price, desc, button, features, image } = data;
	// the index of the first space character in the price string
	const indexOfSpace = price.indexOf(' ');
	// the numeric part of the price (from the beginning to the index of the space)
	const priceNumber = price.slice(0, indexOfSpace);
	// the text part of the price (from the index of the space + 1 to the end)
	const priceText = price.slice(indexOfSpace + 1);
	return (
		<Container>
			<ItemsDiv>
				<DivCard>
					<Textitem>
						<Desc>{subtitle}</Desc>
						<Text>
							{' '}
							<PriceNumber>{priceNumber}</PriceNumber>{' '}
							<PriceText>{priceText}</PriceText>
						</Text>
						<DescTwo>{desc}</DescTwo>
						<ButtonDiv>
							<Button style={button.style}>{button.text}</Button>
						</ButtonDiv>
						<TextDiv>
							{features.map((feature) => (
								<DivIcon>
									<ImageIcon src={Icon} />
									{feature}
								</DivIcon>
							))}
						</TextDiv>
					</Textitem>
					<ImageCardDiv>
						<Image src={image} />
					</ImageCardDiv>
				</DivCard>
			</ItemsDiv>
		</Container>
	);
};

export default PlanCards;
