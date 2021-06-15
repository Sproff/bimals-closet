import React from "react";
import { Box, Text, Stack, Image } from "@chakra-ui/react";

import BannerImage from "../../assets/images/pr1.jpg";

export const Banner = () => {
	return (
		<Box
			bg="linear-gradient(to right, #000, #968b8b)"
			mt="1rem"
			h="100%"
			w="100%"
			borderRadius="10px"
			overflow="hidden"
		>
			<Stack direction={["column", "column", "row", "row"]}>
				<Box
					w="100%"
					// h="auto"
					d="flex"
					justifyContent="center"
					alignItems="center"
				>
					<Text color="#fff" fontSize="2rem" fontWeight="bold">
						HOT SALE
						<br />
						80% OFF
					</Text>
				</Box>
				<Box w="100%" h="100%">
					<Image
						boxSize="100px"
						objectFit="cover"
						w="100%"
						h="350px"
						src={BannerImage}
						alt="Banner Image"
						backgroundSize="cover"
						backgroundPosition="center"
					/>
				</Box>
			</Stack>
		</Box>
	);
};
