import React from "react";
import { Box } from "@chakra-ui/react";

import { Header } from "./Header";
import { Footer } from "./Footer";

type childrenProps = {
	children: React.ReactNode;
};

const MainLayout = ({ children }: childrenProps) => {
	return (
		<Box p="0">
			<Header />
			{children}
			<Footer />
		</Box>
	);
};

export default MainLayout;
