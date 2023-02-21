import {
	Box,
	Button,
	Container,
	Flex,
	Heading,
	Image,
	Text,
} from "@chakra-ui/react";
import { SetStateAction, useState } from "react";
import OtpInput from "react-otp-input";
import VerifyPhoneImage from "../../assets/images/verify-phone-img.png";
const VerifyPhone = () => {
	const [otp, setOtp] = useState("");

	const handleChange = (e: SetStateAction<string>) => {
		setOtp(e);
	};

	return (
		<Container
			bg="brand.green100"
			color="#fff"
			maxW="1280px"
			pos="relative"
			overflow="hidden"
			p="0"
		>
			<Flex p="2rem" flexDir="column" h="100vh" justifyContent="space-between">
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
						pb="2rem"
						color="#fff"
						fontWeight="600"
						fontSize="2rem"
						textAlign="center"
					>
						Verify Phone
					</Heading>

					<Box textAlign="center">
						<Box w="100%" h="100%" mt="0rem">
							<Image
								w="200px"
								h="200px"
								m="0 auto"
								src={VerifyPhoneImage}
								alt="Verify Phone Background"
							/>
						</Box>

						<Text
							m="2rem auto"
							w="450px"
							fontSize="1rem"
							fontWeight="400"
							letterSpacing="0.02rem"
						>
							Please enter 4-digit code sent to <b>08144843697</b> to verify
							your phone number.
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
				</Box>

				<Box textAlign="left">
					<Text color="#fff" fontWeight="600" fontSize=".9rem">
						Step 3 of 3
					</Text>
				</Box>
			</Flex>
		</Container>
	);
};

export default VerifyPhone;
