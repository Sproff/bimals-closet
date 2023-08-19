import { Box, Flex, Icon, Stack, Text } from "@chakra-ui/react";
import { AuthModalData } from "@/utils/modal";

const AuthModal = () => {
	return (
		<Box>
			<Stack
				bg="brand.white100"
				w="13rem"
				justifyContent="center"
				borderRadius="1rem"
				position="absolute"
				top="8rem"
				right="10.5rem"
				zIndex="2"
				overflow="hidden"
			>
				{AuthModalData.map((item, idx) => (
					<Flex
						key={idx}
						role="group"
						alignItems="center"
						cursor="pointer"
						p=".9rem 1.5rem"
						_hover={{
							bg: "brand.green100",
							color: "brand.white100",
							borderRadius: ".4rem",
						}}
					>
						<Icon
							color="brand.green100"
							_groupHover={{
								color: "brand.white100",
							}}
							as={item.icon}
						/>

						<Text
							ml=".8rem"
							fontSize="1.4rem"
							display="flex"
							alignItems="center"
						>
							{item.text}
						</Text>
					</Flex>
				))}
			</Stack>
		</Box>
	);
};

export { AuthModal };
