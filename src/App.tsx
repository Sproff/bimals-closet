import * as React from "react";
import { ChakraProvider, Box, theme } from "@chakra-ui/react";

export const App = () => (
	<ChakraProvider resetCSS theme={theme}>
		<Box textAlign="center" fontSize="xl">
			Hello
		</Box>
	</ChakraProvider>
);
