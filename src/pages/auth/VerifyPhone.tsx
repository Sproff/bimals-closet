import { Box, Button, Container, Heading, Image, Text } from "@chakra-ui/react";
import { SetStateAction, useState } from "react";
import OtpInput from "react-otp-input";
// import VerifyPhoneImage from "../../assets/images/verify-phone-img.png"
const VerifyPhone = () => {
	const [otp, setOtp] = useState("");

	const handleChange = (e: SetStateAction<string>) => {
		setOtp(e);
	};

	return (
		<Container
			bg="brand.green100"
			color="#fff"
			maxW="1024px"
			h="100vh"
			fontFamily="Poppins"
			pos="relative"
			overflow="hidden"
		>
			<Box>
				<Box
					bg="#fff"
					borderRadius="50%"
					pos="absolute"
					h="450px"
					w="450px"
					top="-285px"
					left="-197px"
				/>
				<Heading
					py="2rem"
					color="#fff"
					fontFamily="Poppins"
					fontWeight="600"
					fontSize="2rem"
					textAlign="center"
				>
					Verify Phone
				</Heading>

				<Box textAlign="center">
					<Box w="100%" h="100%" mt="0rem">
						<Image
							w="290px"
							h="290px"
							m="0 auto"
							// src={VerifyPhoneImage}
							alt="Verify Phone Background"
						/>
					</Box>

					<Text m="2rem auto" w="450px" fontSize="1rem" fontWeight="400">
						Please enter 4-digit code sent to <b>08144843697</b> to verify your
						phone number.
					</Text>

					<OtpInput
						value={otp}
						onChange={handleChange}
						numInputs={4}
						separator="&nbsp;&nbsp;&nbsp;&nbsp;"
						isInputNum
						// hasErrored
						containerStyle={{
							justifyContent: "center",
						}}
						focusStyle={{
							outline: "none",
						}}
						inputStyle={{
							backgroundColor: "transparent",
							border: "1px solid #EAEAEA",
							borderRadius: "10px",
							height: "54px",
							width: "54px",
						}}
					/>

					<Button
						mt="2rem"
						p="1.5rem 5rem"
						color="brand.green100"
						bg="#fff"
						borderRadius="10px"
						type="submit"
						cursor="pointer"
						fontSize="0.9rem"
						boxShadow="0px 4px 20px rgba(0, 175, 84, 0.25)"
						_hover={{
							bg: "#fafafa",
						}}
						_focus={{
							borderColor: "none",
							boxShadow: "none",
						}}
					>
						Verify Phone
					</Button>
				</Box>

				<Box>
					<Text
						color="#fff"
						pos="absolute"
						bottom="10px"
						p="0 0 2rem .6rem"
						fontWeight="500"
					>
						Step 3 of 3
					</Text>
				</Box>
			</Box>
		</Container>
	);
};

export default VerifyPhone;
