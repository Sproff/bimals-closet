import { Box, Container } from "@chakra-ui/react";
import React from "react";
import { Hero } from "../components/main/Hero";
import MainLayout from "../layouts/MainLayout";

const Home = () => {
	return (
		<Container>
			<Box>
				<MainLayout>
					<Hero />
				</MainLayout>
			</Box>
		</Container>
	);
};

export default Home;
