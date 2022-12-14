import React from "react";
import styled from "styled-components";

const AllOrganisation = () => {
	return (
		<Container>
			<Cont>
				{" "}
				<h1>
					Join over 55+ <span>Organisations</span> taken <br />
					part in the Election .
				</h1>
				{/* <Button>Sign Up and Try it Free</Button> */}
			</Cont>
		</Container>
	);
};

export default AllOrganisation;

const Cont = styled.div`
	position: absolute;
	color: white;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	text-align: center;

	span {
		color: #fbaf1b;
	}
`;

const Container = styled.div`
	height: 400px;
	width: 100%;
	background-image: url("https://www.utiva.io/static/media/grow.9a0141eb.webp");
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;

	@media screen and (max-width: 960px) {
		height: 300px;
	}

	:before {
		content: "";
		position: absolute;
		/* background-color: #ff8a4e; */
		height: 100%;
		width: 100%;
		opacity: 0.8;
	}
`;
const Wrapper = styled.div``;
