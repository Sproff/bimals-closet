import { Box, Container, Flex, Stack, Text } from "@chakra-ui/react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

export const Footer = () => {
	const getYear = new Date().getFullYear();

	return (
		<Container maxW="1024px" p="0">
			<Box p="1.5rem 3rem" bg="brand.grey300">
				<Stack direction="row" justifyContent="space-between">
					<Box>
						<Text fontWeight="500" fontSize="1.1rem" color="brand.white100">
							Follow Us
						</Text>
						<Flex
							color="brand.white400"
							fontSize="1rem"
							mt="1rem"
							justifyContent="space-between"
						>
							<Box cursor="pointer">
								<FaFacebookF />
							</Box>
							<Box cursor="pointer">
								<FaInstagram />
							</Box>
							<Box cursor="pointer">
								<FaWhatsapp />
							</Box>
						</Flex>
					</Box>

					<Box>
						<Text fontWeight="500" fontSize="1.1rem" color="brand.white100">
							About
						</Text>
						<Box fontSize=".9rem" mt="1rem">
							<Text color="brand.white400" cursor="pointer">
								About Us
							</Text>
							<Text color="brand.white400" mt=".5rem" cursor="pointer">
								FAQs
							</Text>
						</Box>
					</Box>
				</Stack>
				<Text
					fontWeight="500"
					fontSize="1rem"
					color="brand.white100"
					textAlign="center"
				>
					Copyright {getYear} | Bimal&apos;s Closet
				</Text>
			</Box>
		</Container>
	);
};
