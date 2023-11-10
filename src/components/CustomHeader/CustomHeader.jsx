import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
	text-align: ${(props) => props.textAlign || 'center'};
	margin-top: 40px;
`;

const HeaderTitles = styled.p`
	font-size: 45px;
	padding-top: 40px;
	padding-bottom: 30px;
	text-align: center;
	max-width: 800px;
	margin: 0 auto;
`;

const HeaderDescription = styled.p`
	font-size: 2rem;
	color: #777e90;
`;

const CustomHeader = ({ title, description, textAlign }) => {
	return (
		<HeaderContainer textAlign={textAlign}>
			<HeaderTitles>{title}</HeaderTitles>
			<HeaderDescription>{description}</HeaderDescription>
		</HeaderContainer>
	);
};

export default CustomHeader;
