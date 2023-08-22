import { CustomButton } from "@/components/ui/buttons/CustomButton";
import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import Link from "next/link";
import { SetStateAction, useState } from "react";
import OtpInput from "react-otp-input";
import withAuth from "../withAuth";

const VerifyPhone = () => {
	const [otp, setOtp] = useState("");

	const handleChange = (e: SetStateAction<string>) => {
		setOtp(e);
	};

	return (
		<Box bg="brand.green100">
			<Flex
				maxW="1280px"
				mx="auto"
				p="2rem"
				flexDir="column"
				h={["90vh", "100vh"]}
				justifyContent="space-between"
			>
				<Box>
					<Box
						bg="#fff"
						borderRadius="50%"
						pos="absolute"
						h={["350px", "400px", "400px", "450px"]}
						w={["350px", "400px", "400px", "450px"]}
						top="-285px"
						left="-197px"
					/>
					<Heading
						py="4rem"
						color="#fff"
						fontWeight="600"
						fontSize={["3rem", "2.5rem", "2.5rem", "3rem"]}
						textAlign="center"
					>
						Verify Phone
					</Heading>

					<Box textAlign="center">
						<Box w="100%" h="100%" mt="0rem">
							<Image
								w={["200px", "200px", "300px", "400px"]}
								h={["200px", "200px", "300px", "400px"]}
								m="0 auto"
								src="/assets/images/verify-phone-img.png"
								alt="Verify Phone Background"
							/>
						</Box>

						<Text
							m="2rem auto"
							w={["100%", "100%", "450px"]}
							fontSize={["1.5rem", "1.5rem", "1.8rem", "2rem"]}
							fontWeight="400"
							letterSpacing="0.02rem"
							color="brand.white100"
						>
							Please enter 4-digit code sent to <b>08144843697</b> to verify
							your phone number.
						</Text>

						<OtpInput
							value={otp}
							onChange={handleChange}
							numInputs={4}
							renderSeparator="&nbsp;&nbsp;&nbsp;&nbsp;"
							renderInput={(props) => <input {...props} />}
							// isInputNum
							// hasErrored
							containerStyle={{
								justifyContent: "center",
							}}
							// focusStyle={{
							// 	outline: "none",
							// }}
							inputStyle={{
								backgroundColor: "transparent",
								color: "#fff",
								border: "1px solid #EAEAEA",
								borderRadius: "10px",
								height: "54px",
								width: "54px",
								outline: "none",
							}}
							inputType="number"
						/>

						<Box mt="2rem">
							<CustomButton
								{...{
									w: "auto",
									px: "5rem",
									bg: "brand.white100",
									color: "brand.green100",
									text: "Verify Phone",
								}}
							/>
						</Box>
						<Link href="/auth/login">
							<Text
								mt="1.5rem"
								textDecoration="underline"
								color="brand.white100"
								fontWeight="600"
								fontSize="1.5rem"
							>
								Skip for now
							</Text>
						</Link>
					</Box>
				</Box>

				<Box>
					<Text
						textAlign="left"
						color="brand.white100"
						fontWeight="600"
						fontSize="1.5rem"
					>
						Step 3 of 3
					</Text>
				</Box>
			</Flex>
		</Box>
	);
};

export default withAuth(VerifyPhone);
