import { ChakraProvider, Box } from "@chakra-ui/react";
import Routes from "./routes/Routes";
import theme from "./theme/global";
import "./theme/index.css";

export const App = () => (
	<ChakraProvider theme={theme}>
		{/* <Box textAlign="center" fontSize="xl"> */}
		<Box>
			<Routes />
		</Box>
	</ChakraProvider>
);
