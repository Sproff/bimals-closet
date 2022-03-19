import {
	Box,
	Button,
	Container,
	Flex,
	FormControl,
	Heading,
	Image,
	Input,
	InputGroup,
	InputRightElement,
	Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

import RegisterBg from "../assets/images/register-bg.png";

const Register = () => {
	const [phoneInput, setPhoneInput] = useState("");
	const [showPassword, setShowPassword] = useState(false);

	const handleClick = () => setShowPassword(!showPassword);

	return (
		<Container maxW="1024px" fontFamily="Poppins">
			<Box>
				<Flex>
					<Box
						display="flex"
						flexDir="column"
						justifyContent="space-between"
						h="100vh"
						w="50%"
						bg="brand.green100"
						p="2rem"
					>
						<Box>
							<Image w="100%" src={RegisterBg} alt="Register Background" />
						</Box>
						<Box>
							<Text color="#fff" pl=".6rem" fontWeight="500">
								Step 1 of 3
							</Text>
						</Box>
					</Box>
					<Box
						h="100vh"
						w="50%"
						bg="#fff"
						display="flex"
						alignItems="center"
						justifyContent="center"
						flexDir="column"
					>
						<Heading
							color="brand.grey300"
							fontFamily="Poppins"
							fontWeight="600"
							fontSize="2rem"
						>
							Create account
						</Heading>

						<Box as="form" w="56%">
							<FormControl my="2rem" isRequired>
								<Input
									id="full-name"
									border="1px solid #EAEAEA"
									borderRadius="10px"
									placeholder="Full name"
									cursor="pointer"
									_placeholder={{
										fontWeight: 500,
										fontSize: ".9rem",
										color: "brand.grey300",
									}}
									_focus={{
										borderColor: "brand.green100",
										boxShadow: "none",
									}}
									_hover={{
										borderColor: "none",
									}}
									py="1.3rem"
								/>
							</FormControl>

							<FormControl my="2rem" isRequired>
								<Input
									id="email"
									border="1px solid #EAEAEA"
									borderRadius="10px"
									type="email"
									placeholder="Email"
									cursor="pointer"
									_placeholder={{
										fontWeight: 500,
										fontSize: ".9rem",
										color: "brand.grey300",
									}}
									_focus={{
										borderColor: "brand.green100",
										boxShadow: "none",
									}}
									_hover={{
										borderColor: "none",
									}}
									py="1.3rem"
								/>
							</FormControl>

							<PhoneInput
								country="ng"
								value={phoneInput}
								onChange={setPhoneInput}
								inputProps={{
									placeholder: "Phone Number",
								}}
								inputStyle={{
									border: "1px solid #EAEAEA",
									borderRadius: "10px",
									cursor: "pointer",
									margin: "2rem 0",
									padding: "1.3rem 3rem",
									width: "100%",
								}}
							/>

							<FormControl my="2rem" isRequired>
								<InputGroup>
									<Input
										id="password"
										border="1px solid #EAEAEA"
										borderRadius="10px"
										type={showPassword ? "text" : "password"}
										placeholder="Password"
										cursor="pointer"
										_placeholder={{
											fontWeight: 500,
											fontSize: ".9rem",
											color: "brand.grey300",
										}}
										_focus={{
											borderColor: "brand.green100",
											boxShadow: "none",
										}}
										_hover={{
											borderColor: "none",
										}}
										py="1.3rem"
									/>
									<InputRightElement onClick={handleClick} cursor="pointer">
										{showPassword ? (
											<AiOutlineEye />
										) : (
											<AiOutlineEyeInvisible />
										)}
									</InputRightElement>
								</InputGroup>
							</FormControl>

							<Link to="/verifyEmail">
								<Button
									w="100%"
									py="1.45rem"
									color="#fff"
									bg="brand.green100"
									borderRadius="10px"
									type="submit"
									cursor="pointer"
									fontSize="0.9rem"
									_hover={{
										bg: "brand.green200",
									}}
									_focus={{
										borderColor: "none",
										boxShadow: "none",
									}}
								>
									Create Account
								</Button>
							</Link>

							<Box>
								<Link to="/login">
									<Text
										mt=".7rem"
										color="brand.grey400"
										fontWeight="500"
										fontSize=".8rem"
									>
										Already have an account?
										<span style={{ color: "#00AF54" }}> Login</span>
									</Text>
								</Link>
							</Box>
						</Box>
					</Box>
				</Flex>
			</Box>
		</Container>
	);
};

export default Register;
