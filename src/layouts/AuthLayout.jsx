import React from "react";
import { Link } from "react-router-dom";

import { Box, HStack, Text } from "@chakra-ui/react";

import { Footer } from "./Footer";

export const AuthLayout = ({ children }) => {
	return (
		<Box>
			<HStack
				px="1rem"
				h="50px"
				alignItems="center"
				// position="fixed"
				top="0"
				w="100%"
				bgColor="#fff"
				zIndex="99"
				borderBottom="1px solid rgba(0, 0, 0, 0.2)"
			>
				<Box w="100%">
					<Link to="/">
						<Text
							textAlign="center"
							fontSize={["1.2rem", "1.2rem", "1.3rem", "1.5rem"]}
							fontWeight="700"
							cursor="pointer"
						>
							BIMAL&apos;S CLOSET
						</Text>
					</Link>
				</Box>
			</HStack>

			{children}
			<Box mx="2rem">
				<Footer />
			</Box>
		</Box>
	);
};
