import React from 'react';
import HeroSection from '../components/HomePageComp/HeroSection';
import Trustedby from '../components/HomePageComp/Trustedby';
import CustomHeader from '../components/CustomHeader/CustomHeader';
import HighlightSection from '../components/HomePageComp/HighlightSection';
import FeaturesSection from '../components/HomePageComp/FeaturesSection';
import CustomButoon from '../components/CustomHeader/CustomButoon';
import TrustPilot from '../components/HomePageComp/TrustPilot';
import CustomPlanCard from '../components/CustomHeader/CustomPlanCard';

const HomePgae = () => {
	return (
		<div>
			<HeroSection />
			<Trustedby />
			<CustomHeader
				title='We serve businesses of all sizes, from startups to enterprises.
'
			/>
			<HighlightSection />
			<CustomHeader
				title='Our Features That Are Simply Amazing

'
			/>
			<FeaturesSection />
			<CustomButoon />
			<TrustPilot />
			<CustomHeader
				title='Take the Next Step

'
			/>
			<CustomPlanCard />
		</div>
	);
};

export default HomePgae;
