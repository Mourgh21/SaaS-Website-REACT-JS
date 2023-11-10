import React from 'react';
import styled from 'styled-components';
import TextMoving from '../../components/CustomHeader/TextMoving';

const Container = styled.section``;

const Trusteddiv = styled.div`
	background-color: black;
	padding: 20px;
	padding-left: 0;
	padding-right: 0;
`;
const Text = styled.p`
	font-size: 31px;
	color: #94a3b8;
	text-align: center;
	margin-top: 20px;
`;

const Trustedby = () => {
	return (
		<Container>
			<Trusteddiv>
				<Text>Trusted By</Text>
				<TextMoving />
			</Trusteddiv>
		</Container>
	);
};

export default Trustedby;
