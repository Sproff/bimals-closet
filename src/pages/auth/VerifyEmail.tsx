import {
	Box,
	Button,
	Container,
	Flex,
	Heading,
	Image,
	Text,
} from "@chakra-ui/react";
import VerifyEmailImage from "../../assets/images/verify-email-img.png";

const VerifyEmail = () => {
	return (
		<Container bg="#fff" maxW="1280px" pos="relative" overflow="hidden" p="0">
			<Flex p="2rem" flexDir="column" h="100vh" justifyContent="space-between">
				<Box>
					<Box
						bg="brand.green100"
						borderRadius="50%"
						pos="absolute"
						h="200px"
						w="200px"
						top="-79px"
						left="-58px"
					/>
					<Heading
						pb="2rem"
						color="brand.grey300"
						fontWeight="600"
						fontSize="2rem"
						textAlign="center"
					>
						Verify Email
					</Heading>

					<Box textAlign="center">
						<Box w="100%" h="100%" mt="0rem">
							<Image
								w="300px"
								h="300px"
								m="0 auto"
								src={VerifyEmailImage}
								alt="Verify Email Background"
							/>
						</Box>

						<Text
							m="2rem auto"
							w="450px"
							fontSize="1rem"
							fontWeight="400"
							letterSpacing="0.02rem"
						>
							We’ve sent a mail to <b>sproff.oluwaseun@gmail.com</b>. Please
							check your inbox to verify your email
						</Text>

						<Button
							p="1.5rem 4rem"
							color="#fff"
							bg="brand.green100"
							borderRadius="10px"
							type="submit"
							cursor="pointer"
							fontSize="0.9rem"
							boxShadow="0px 4px 20px rgba(0, 175, 84, 0.25)"
							_hover={{
								bg: "brand.green200",
							}}
							_focus={{
								borderColor: "none",
								boxShadow: "none",
							}}
						>
							Open Email
						</Button>
					</Box>
				</Box>

				<Box textAlign="left">
					<Text color="brand.green100" fontWeight="600" fontSize=".9rem">
						Step 2 of 3
					</Text>
				</Box>
			</Flex>
		</Container>
	);
};

export default VerifyEmail;
