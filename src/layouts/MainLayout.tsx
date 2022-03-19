import React from "react";
import { Box, HStack, Text } from "@chakra-ui/react";
// import { Link } from "react-router-dom";

import { Header } from "./Header";
import { Footer } from "./Footer";

type childrenProps = {
	children: React.ReactNode;
};

const MainLayout = ({ children }: childrenProps) => {
	return (
		<Box maxW="1024px" bg="#00AF54">
			<Header />
			<HStack>
				<Text>Main</Text>
			</HStack>

			{children}

			<Footer />
		</Box>
	);
};

export default MainLayout;
