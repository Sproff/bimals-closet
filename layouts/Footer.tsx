import { Box, Container, Flex, Stack, Text } from "@chakra-ui/react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

export const Footer = () => {
	const getYear = new Date().getFullYear();

	return (
		<Box bg="brand.grey300">
			<Box maxW="1280px" mx="auto" p="1.5rem 3rem" >
				<Box
					color="brand.white100"
					fontSize="2rem"
					mt="2rem"
					justifyContent="space-between"
				>
					<Flex w={["30%", "10%"]} justifyContent="space-between">
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

					<Box fontSize="1.5rem" mt="3rem" color="brand.white100">
						<Text cursor="pointer">About Us</Text>
						<Text mt=".5rem" cursor="pointer">
							FAQs
						</Text>
					</Box>
				</Box>
				<Text
					fontWeight="700"
					fontSize="1.3rem"
					color="brand.white100"
					textAlign="center"
					mt="5rem"
				>
					Copyright {getYear} | Bimal&apos;s Closet
				</Text>
			</Box>
		</Box>
	);
};
