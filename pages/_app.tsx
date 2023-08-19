import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { customTheme } from "@/styles/themes";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { useState } from "react";

const App = ({ Component, pageProps }: AppProps) => {
	const [queryClient] = useState(() => new QueryClient());

	return (
		<QueryClientProvider client={queryClient}>
			<Hydrate state={pageProps?.dehydratedState}>
				<ChakraProvider theme={customTheme}>
					<Component {...pageProps} />
				</ChakraProvider>
			</Hydrate>
		</QueryClientProvider>
	);
};
export default App;
