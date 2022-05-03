import { Box, Button, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import HeroBg from "../../assets/images/hero-bg.png";

export const Hero = () => {
	return (
		<Box
			bgImage={`url(${HeroBg})`}
			bgPosition="center"
			bgRepeat="no-repeat"
			h="400px"
			px="3rem"
		>
			<Box w="50%" textAlign="left" pt="7rem" color="brand.green100">
				<Text color="brand.green100" fontSize="4rem" fontWeight="600">
					Fashion
				</Text>
				<Text fontWeight="300" fontSize="1rem" pb="1rem">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque soluta
					aliquam dicta explicabo placeat ea iure iste, quaerat laboriosam enim.
				</Text>
				<Link to="/auth/login">
					<Button
						bg="brand.green100"
						color="brand.white100"
						fontSize=".9rem"
						_hover={{
							bg: "brand.green200",
						}}
						_focus={{
							borderColor: "none",
							boxShadow: "none",
						}}
					>
						Join us now
					</Button>
				</Link>
			</Box>
		</Box>
	);
};
