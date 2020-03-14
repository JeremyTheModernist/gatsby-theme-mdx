import React from "react";
import { Container } from "theme-ui";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const Index = props => {
	return (
		<Container variant="large">
			<Navigation />
			{props.children}
			<Footer />
		</Container>
	);
};

export default Index;
