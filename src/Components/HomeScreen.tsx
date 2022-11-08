import React from "react";
import AllOrganisation from "./AllOrganisationImage/AllOrganisation";
import HeroComp from "./HeroComp/HeroComp";
import KickOffComp from "./KickOffComp/KickOffComp";
import OnlineComp from "./OnlineComp/OnlineComp";
import SecureComp from "./SecureComp/SecureComp";

const HomeScreen = () => {
	return (
		<div
			style={{
				overflow: "hidden",
				justifyContent: "center",
				alignItems: "center",
				flexDirection: "column",
				display: "flex",
			}}>
			<HeroComp />
			<KickOffComp />
			<SecureComp />
			<OnlineComp />
			<AllOrganisation />
		</div>
	);
};

export default HomeScreen;
