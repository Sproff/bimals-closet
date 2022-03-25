import React from "react";
import { Container } from "@chakra-ui/react";

import { Header } from "./Header";
import { Footer } from "./Footer";

type childrenProps = {
	children: React.ReactNode;
};

const MainLayout = ({ children }: childrenProps) => {
	return (
		<Container maxW="1024px" p="0">
			<Header />
			{children}
			<Footer />
		</Container>
	);
};

export default MainLayout;
