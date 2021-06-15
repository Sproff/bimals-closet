import { Box } from "@chakra-ui/react";
import React from "react";
import loadingIndicator from "../../assets/images/loader.svg";

export const Loader = () => {
	return (
		<Box display="flex" alignItems="center" justifyContent="center" h="100vh">
			<img height="25%" src={loadingIndicator} alt="Loading" />
		</Box>
	);
};
