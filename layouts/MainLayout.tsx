import React from "react";
import { Box } from "@chakra-ui/react";

import { Header } from "./Header";
import { Footer } from "./Footer";

type childrenProps = {
	children: React.ReactNode;
	subHeaderName?: string;
};

const MainLayout = ({ children, subHeaderName }: childrenProps) => {
	return (
		<Box>
			<Header {...{ subHeaderName }} />
			{children}
			<Footer />
		</Box>
	);
};

export default MainLayout;
