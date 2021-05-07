import React from "react";
import { HStack, Tag } from "@chakra-ui/react";

export const Tags = () => {
	return (
		<HStack spacing={6} mt="2rem">
			<Tag
				variant="subtle"
				colorScheme="red"
				p=".2rem 1rem"
				fontSize={["1rem", "1.1rem", "1.1rem", "1.1rem"]}
			>
				Latest
			</Tag>
			<Tag
				variant="subtle"
				colorScheme="green"
				p=".2rem 1rem"
				fontSize={["1rem", "1.1rem", "1.1rem", "1.1rem"]}
			>
				Trending
			</Tag>
			<Tag
				variant="subtle"
				colorScheme="yellow"
				p=".2rem 1rem"
				fontSize={["1rem", "1.1rem", "1.1rem", "1.1rem"]}
			>
				Old
			</Tag>
			<Tag
				variant="subtle"
				colorScheme="blue"
				p=".2rem 1rem"
				fontSize={["1rem", "1.1rem", "1.1rem", "1.1rem"]}
			>
				New
			</Tag>
		</HStack>
	);
};
