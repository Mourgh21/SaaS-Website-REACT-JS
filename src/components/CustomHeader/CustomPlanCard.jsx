import React from 'react';
import CardPrices from '../../CardPrices';
import PlanCards from '../HomePageComp/PlanCards';
import styled from 'styled-components';

const Container = styled.section`
	display: flex;
	justify-content: center;
	margin: 40px;
	gap: 30px;
`;

const CustomPlanCard = () => {
	return (
		<Container>
			{CardPrices.map((data, index) => (
				<PlanCards
					key={index}
					data={data}
					features={data.features}
				/>
			))}
		</Container>
	);
};

export default CustomPlanCard;
