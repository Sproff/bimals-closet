import { Box, Button, Container, Heading, Image, Text } from "@chakra-ui/react";
// import VerifyEmailImage from "../../assets/images/verify-email-img.png";

const VerifyEmail = () => {
	return (
		<Container
			bg="#fff"
			maxW="1024px"
			h="100vh"
			fontFamily="Poppins"
			pos="relative"
			overflow="hidden"
		>
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
					py="2rem"
					color="brand.grey300"
					fontFamily="Poppins"
					fontWeight="600"
					fontSize="2rem"
					textAlign="center"
				>
					Verify Email
				</Heading>

				<Box textAlign="center">
					<Box w="100%" h="100%" mt="0rem">
						<Image
							w="310px"
							h="310px"
							m="0 auto"
							// src={VerifyEmailImage}
							alt="Verify Email Background"
						/>
					</Box>

					<Text m="2rem auto" w="450px" fontSize="1rem" fontWeight="400">
						We’ve sent a mail to <b>sproff.oluwaseun@gmail.com</b>. Please check
						your inbox to verify your email
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

				<Box>
					<Text
						color="#000"
						pos="absolute"
						bottom="10px"
						p="0 0 2rem .6rem"
						fontWeight="500"
					>
						Step 2 of 3
					</Text>
				</Box>
			</Box>
		</Container>
	);
};

export default VerifyEmail;
