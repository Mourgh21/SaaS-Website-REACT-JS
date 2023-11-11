import React from 'react';
import styled from 'styled-components';
import SocialIcons from '../../Assets/SocialIcons.png';
import PaymentsIcons from '../../Assets/PaymentsIcons.png';

const Container = styled.section`
	background-color: #191d23;
	margin-top: 90px;
`;

const TopDiv = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 40px;
`;

const TextDiv = styled.div`
	display: flex;
	gap: 80px;
	color: #ffffff;
`;

const Desc = styled.p`
	max-width: 350px;
	cursor: pointer;
	font-size: 25px;
`;
const Span = styled.div`
	font-weight: bold;
	margin-bottom: 10px;
`;

const Text = styled.p`
	padding-bottom: 6px;
	cursor: pointer;
`;

const LinksText = styled.div``;

const LinksTextTwo = styled.div``;

const IconsText = styled.div`
	display: flex;
	flex-direction: column;
`;

const Icons = styled.div`
	margin-bottom: 30px;
	padding-left: 90px;
`;

const Socials = styled.p`
	padding-bottom: 15px;
	color: white;
	font-weight: bold;
`;

const Image = styled.img`
	cursor: pointer;
`;

const Imageicon = styled.div``;

const Payments = styled.img``;

const BelowDiv = styled.div`
	background-color: black;
`;

const DownDiv = styled.div`
	padding-left: 40px;
	padding-right: 40px;
	padding-top: 15px;
	padding-bottom: 15px;
	display: flex;
	justify-content: space-between;
`;

const CopyRightText = styled.p`
	color: white;
	font-size: 12px;
`;

const Footer = () => {
	return (
		<Container>
			<TopDiv>
				<TextDiv>
					<Desc>
						Empower your business with our software solutions, your catalyst for
						growth.
					</Desc>
					<LinksText>
						<Span>Company</Span>
						<Text>About Us</Text>
						<Text>Terms And conditions</Text>
						<Text>Privacy policy</Text>
						<Text>Contact Us</Text>
					</LinksText>
					<LinksTextTwo>
						<Span>Information</Span>
						<Text>FAQ</Text>
						<Text>Error 404</Text>
						<Text>Coming Soon</Text>
						<Text>Careers</Text>
					</LinksTextTwo>
				</TextDiv>
				<IconsText>
					<Icons>
						<Socials>Find us on</Socials>
						<Image src={SocialIcons} />
					</Icons>
					<Imageicon>
						<Payments src={PaymentsIcons} />
					</Imageicon>
				</IconsText>
			</TopDiv>
			<BelowDiv>
				<DownDiv>
					<CopyRightText>
						Copyright 2023 - Made By Abdessamad Mourgh
					</CopyRightText>
					<CopyRightText>Specific moments captured </CopyRightText>
				</DownDiv>
			</BelowDiv>
		</Container>
	);
};

export default Footer;
