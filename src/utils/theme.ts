import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
	colors: {
		brand: {
			green100: "#00AF54",
			green200: "#006631",
			grey300: "#3F3F3F",
			grey400: "#8F8F8F",
			green500:
				"linear-gradient(183.58deg, #00AF54 74.64%, rgba(0, 175, 84, 0) 201.35%)",
		},
	},
});

export default theme;
