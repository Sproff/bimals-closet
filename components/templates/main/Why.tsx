import { Box, Flex, Icon, SimpleGrid, Text } from "@chakra-ui/react";
import { FiTruck } from "react-icons/fi";
import { MdSecurity } from "react-icons/md";
import { RiCustomerService2Fill } from "react-icons/ri";
import { HiOutlineBadgeCheck } from "react-icons/hi";

const Why = () => {
	const data = [
		{
			icon: FiTruck,
			text: "Speed Delivery",
		},
		{
			icon: MdSecurity,
			text: "Secure Payment",
		},
		{
			icon: RiCustomerService2Fill,
			text: "24 hours customer service",
		},

		{
			icon: HiOutlineBadgeCheck,
			text: "Quality Products",
		},
	];
	return (
		<Box maxW="1280px" mx="auto" my="10rem" px="3rem">
			<Text
				color="brand.grey300"
				fontWeight="600"
				fontSize={["2rem", "2rem", "2.5rem", "2.5rem"]}
				textAlign="center"
			>
				Why Choose Us?
			</Text>

			<SimpleGrid gap="2rem" mt="3rem" columns={[2, 4]}>
				{data.map((item, idx) => (
					<Flex
						mt="1rem"
						key={idx}
						color="brand.gold100"
						flexDir="column"
						alignItems="center"
					>
						<Icon fontSize="5rem" as={item.icon} />

						<Text
							color="brand.grey400"
							fontSize="1.5rem"
							mt="1rem"
							textAlign="center"
						>
							{item.text}
						</Text>
					</Flex>
				))}
			</SimpleGrid>
		</Box>
	);
};

export { Why };
