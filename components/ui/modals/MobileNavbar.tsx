import { AuthModalData } from "@/utils/modal";
import { Box, Flex, HStack, Icon, Text } from "@chakra-ui/react";

const MobileNavbar = () => {
	return (
		<Box
			bg="brand.dark100"
			h="100%"
			pos="fixed"
			top="7rem"
			left="0"
			w="100%"
			zIndex="99"
			display={["block", "none", "none", "none"]}
		>
			<Box
				bg="brand.white300"
				mt="0rem"
				p="1rem"
				w="100%"
				borderBottomLeftRadius=".6rem"
				borderBottomRightRadius=".6rem"
			>
				<HStack
					alignItems="left"
					display={["block", "block", "block", "none"]}
					justifyContent="space-between"
					fontSize="1.7rem"
					fontWeight="500"
					spacing={0}
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
				</HStack>
			</Box>
		</Box>
	);
};

export { MobileNavbar };
