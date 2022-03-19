import {
	Box,
	Button,
	Container,
	FormControl,
	Heading,
	Stack,
	Image,
	Input,
	InputGroup,
	InputRightElement,
	Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

// import LoginBgOne from "../../assets/images/login-bg-one.png";
// import LoginBgTwo from "../../assets/images/login-bg-two.png";

const Login = () => {
	const [showPassword, setShowPassword] = useState(false);

	const handleClick = () => setShowPassword(!showPassword);

	return (
		<Container maxW="1024px" fontFamily="Poppins">
			<Box>
				<Stack direction={["column", "column", "row"]}>
					<Box
						// display="flex"
						// flexDir="column"
						// justifyContent="space-between"
						h="100vh"
						w={["100%", "100%", "50%"]}
						bg="brand.green100"
						p="2rem"
						pos="relative"
						display={["none", "none", "flex"]}
					>
						<Image
							w="460px"
							pos="absolute"
							right="-14px"
							top="102px"
							// src={LoginBgOne}
							alt="Login Background"
						/>
						<Image
							w="300px"
							pos="absolute"
							left="0"
							bottom="0"
							// src={LoginBgTwo}
							alt="Login Background"
						/>
					</Box>
					<Box
						h="100vh"
						w={["100%", "100%", "50%"]}
						bg={["#fff"]}
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
							Let’s sign you in
						</Heading>
						<Text color="brand.grey300" fontWeight="500" fontSize="1rem">
							Welcome back. We’ve missed you!
						</Text>

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
									py="1.4rem"
								/>
							</FormControl>

							<FormControl mt="2rem" isRequired>
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

							<Text
								mt=".5rem"
								color="brand.grey400"
								fontWeight="500"
								fontSize=".8rem"
								float="right"
							>
								Forgot password?
							</Text>

							<Link to="/">
								<Button
									w="100%"
									mt="2rem"
									py="1.45rem"
									color="#fff"
									bg="brand.green100"
									borderRadius="10px"
									boxShadow="0px 4px 20px rgba(0, 175, 84, 0.25)"
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
									Login
								</Button>
							</Link>

							<Box>
								<Link to="/register">
									<Text
										mt=".7rem"
										color="brand.grey400"
										fontWeight="500"
										fontSize=".8rem"
									>
										Don’t have an account?
										<span style={{ color: "#00AF54" }}> Register</span>
									</Text>
								</Link>
							</Box>
						</Box>
					</Box>
				</Stack>
			</Box>
		</Container>
	);
};

export default Login;
