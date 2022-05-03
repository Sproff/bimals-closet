import {
	Box,
	Button,
	Container,
	FormControl,
	Stack,
	Image,
	Input,
	InputGroup,
	InputRightElement,
	Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";

import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

import LoginBgOne from "../../assets/images/login-bg-one.png";
import LoginBgTwo from "../../assets/images/login-bg-two.png";
import { axiosPost } from "../../queries/auth";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { getError, loginUser } from "../../redux/actions/authAction";
import axios from "axios";
interface IFormInput {
	email: string;
	password: string;
}

const Login = () => {
	const [showPassword, setShowPassword] = useState(false);
	const [loading, setLoading] = useState(false);
	const { register, handleSubmit } = useForm<IFormInput>();
	const dispatch = useDispatch();

	const handleClick = () => setShowPassword(!showPassword);

	const onSubmit: SubmitHandler<IFormInput> = async (data) => {
		try {
			const res = await axiosPost("/user/login", data);
			dispatch(loginUser(data));
			setLoading(true);
			toast.success(res.message, {
				position: toast.POSITION.TOP_CENTER,
			});
			localStorage.setItem("data", JSON.stringify(res.data.user.fullName));
			window.location.href = "/";
		} catch (error) {
			setLoading(false);
			if (axios.isAxiosError(error)) {
				dispatch(getError(error));
				toast.error(
					error?.response?.data?.message ||
						"Erorr occurred! Please try again later",
					{
						position: toast.POSITION.TOP_CENTER,
					}
				);
			}
		}
	};

	return (
		<Container maxW="1024px" p="0">
			<Box>
				<Stack spacing="0" direction={["column", "column", "row"]}>
					<Box
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
							src={LoginBgOne}
							alt="Login Background"
						/>
						<Image
							w="300px"
							pos="absolute"
							left="0"
							bottom="0"
							src={LoginBgTwo}
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
						ms="0rem"
					>
						<Text color="brand.grey300" fontWeight="600" fontSize="2rem">
							Let’s sign you in
						</Text>
						<Text
							color="brand.grey300"
							fontWeight="500"
							fontSize="1rem"
							letterSpacing="0.05rem"
						>
							Welcome back. We’ve missed you!
						</Text>

						<Box as="form" w="56%" onSubmit={handleSubmit(onSubmit)}>
							<FormControl my="2rem" isRequired>
								<Input
									id="email"
									border="1px solid #EAEAEA"
									borderRadius="10px"
									placeholder="Email"
									cursor="pointer"
									{...register("email", {
										required: true,
									})}
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
										{...register("password", { required: true })}
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

							{/* <Link to="/"> */}
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
								isLoading={loading}
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
							{/* </Link> */}

							<Box>
								<Link to="/auth/register">
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
