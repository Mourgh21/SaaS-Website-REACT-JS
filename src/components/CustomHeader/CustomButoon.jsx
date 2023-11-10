import React from 'react';
import styled from 'styled-components';

const ButtonDiv = styled.div`
	margin-top: 60px;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Button = styled.button`
	margin-right: 20px;
	width: 200px;
	height: 50px;
	border-radius: 5px;
	border: none;
	background-color: black;
	color: white;
	cursor: pointer;
	&:hover {
		background: #131825;
	}
	font-size: 16px;
	font-weight: 500;
`;

const CustomButoon = () => {
	return (
		<ButtonDiv>
			<Button>View All Features</Button>
		</ButtonDiv>
	);
};

export default CustomButoon;
