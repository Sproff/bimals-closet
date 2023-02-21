import {
	Box,
	Button,
	Container,
	FormControl,
	Image,
	Input,
	InputGroup,
	InputRightElement,
	Stack,
	Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm, SubmitHandler, Controller } from "react-hook-form";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

import RegisterBg from "../../assets/images/register-bg.png";
import { useDispatch } from "react-redux";
import { axiosPost } from "../../queries/auth";
import { getError, registerUser } from "../../redux/actions/authAction";
import { toast } from "react-toastify";
import axios from "axios";
import { handleError } from "../../utils/toastError";

interface IFormInput {
	fullName: string;
	email: string;
	phoneNumber: number;
	password: string;
}

const Register = () => {
	const [phoneInput, setPhoneInput] = useState("");
	const [showPassword, setShowPassword] = useState(false);
	const [loading, setLoading] = useState(false);
	const { register, handleSubmit, control } = useForm<IFormInput>();
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleClick = () => setShowPassword(!showPassword);

	const onSubmit: SubmitHandler<IFormInput> = async (data) => {
		try {
			setLoading(true);
			const res = await axiosPost("/user/register", data);
			dispatch(registerUser(data));
			setLoading(false);
			toast.success(res.message, {
				position: toast.POSITION.TOP_CENTER,
			});
			navigate("/auth/login");
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
		<Container maxW="1280px" p="0">
			<Box>
				<Stack spacing="0" direction={["column", "column", "row"]}>
					<Box
						h="100vh"
						w={["100%", "100%", "50%"]}
						bg="brand.green100"
						p="2rem"
						display="flex"
						flexDir="column"
						justifyContent="space-between"
					>
						<Box>
							<Image w="100%" src={RegisterBg} alt="Register Background" />
						</Box>
						<Box>
							<Text
								color="#fff"
								pl=".6rem"
								fontWeight="600"
								textAlign="left"
								fontSize=".9rem"
							>
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
						<Text color="brand.grey300" fontWeight="600" fontSize="2rem">
							Create account
						</Text>

						<Box as="form" w="56%" onSubmit={handleSubmit(onSubmit)}>
							<FormControl my="2rem" isRequired>
								<Input
									id="fullName"
									border="1px solid #EAEAEA"
									borderRadius="10px"
									placeholder="Full name"
									cursor="pointer"
									{...register("fullName", { required: true })}
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
									{...register("email", { required: true })}
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

							<Controller
								name="phoneNumber"
								control={control}
								rules={{ required: true, minLength: 13, maxLength: 13 }}
								render={({ field }) => {
									return (
										<PhoneInput
											country="ng"
											value={phoneInput}
											autoFormat={true}
											onChange={(e) => {
												setPhoneInput(e);
												field.onChange(e);
											}}
											inputClass="phone-input"
											inputProps={{
												id: "phoneNumber",
												placeholder: "Phone Number",
												required: true,
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
									);
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

							{/* <Link to="/auth/verifyEmail"> */}
							<Button
								w="100%"
								py="1.45rem"
								color="#fff"
								bg="brand.green100"
								borderRadius="10px"
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
								Create Account
							</Button>
							{/* </Link> */}

							<Box>
								<Link to="/auth/login">
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
				</Stack>
			</Box>
		</Container>
	);
};

export default Register;
