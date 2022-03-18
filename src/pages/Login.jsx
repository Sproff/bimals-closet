import React, { useContext, useState } from "react";
import {
	Box,
	Button,
	Container,
	// FormControl,
	FormLabel,
	Input,
	InputGroup,
	InputRightElement,
	Text,
} from "@chakra-ui/react";

import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { login } from "../queries/auth";
import { toast } from "react-toastify";
import { AuthContext, LOGIN } from "../contexts/auth";
import { AuthLayout } from "../layouts/AuthLayout";

export const Login = () => {
	const { register, handleSubmit } = useForm();
	const { authState, dispatch } = useContext(AuthContext);
	const [loading, setLoading] = useState(false);
	const [showPassword, setShowPassword] = useState(false);
	// const history = useHistory();

  if (authState) {
    window.location = "/"
		// return <Redirect to="/" />;
	}

	const handleLogin = async (data) => {
		try {
			setLoading(true);
			const res = await login(data);
			dispatch({ type: LOGIN, payload: res.data });
			setLoading(false);
			toast.success(res.message);
      localStorage.setItem("data", JSON.stringify({
        fullname: res.data.user.fullname,
        email: res.data.user.email
      }));
      // history.go("/");
		} catch (error) {
			setLoading(false);
			toast.error(error.response?.data?.message || "Login Failed");
		}
	};

	const handleClick = () => setShowPassword(!showPassword);

	return (
		<Box>
			<AuthLayout>
				<Container maxW="container.xl">
					<Box
						display="flex"
						justifyContent="center"
						alignItems="center"
						h="100vh"
						mt="1rem"
					>
						<Box bg="#" p="2rem" borderRadius="10px" boxShadow="md">
							<Text
								fontSize="1.2rem"
								fontWeight="700"
								textAlign="center"
								p="2rem"
							>
								LOGIN
							</Text>
							<Box
								as="form"
								id="first-name"
								isrequired
								onSubmit={handleSubmit(handleLogin)}
							>
								<FormLabel>Email Address</FormLabel>
								<Input
									id="email"
									placeholder="Email Address"
									borderRadius="10px"
									mb="1rem"
									_focus={{ borderColor: "#000", boxShadow: "none" }}
									{...register("email", { required: true })}
								/>

								<FormLabel>Password</FormLabel>
								<InputGroup>
									<Input
										id="password"
										placeholder="Password"
										borderRadius="10px"
										mb="1rem"
										type={showPassword ? "text" : "password"}
										_focus={{ borderColor: "#000", boxShadow: "none" }}
										{...register("password", { required: true })}
									/>
									<InputRightElement width="4.5rem">
										<Button
											h="1.75rem"
											size="sm"
											onClick={handleClick}
											_focus={{ boxShadow: "none" }}
										>
											{showPassword ? "Hide" : "Show"}
										</Button>
									</InputRightElement>
								</InputGroup>
								<Button
									type="submit"
									bg="#000"
									color="#fff"
									borderRadius="10px"
									mt="1rem"
									cursor="pointer"
									boxShadow="none"
									width="100%"
									_hover={{ background: "#000", opacity: "0.8" }}
									_focus={{ boxShadow: "none" }}
									isLoading={loading}
								>
									Log In
								</Button>
							</Box>
							<Text fontSize=".8rem" mt="1rem">
								New User?
								<Link
									to="/sign-up"
									style={{
										textDecoration: "underline",
									}}
								>
									{" "}
									Sign Up
								</Link>
							</Text>
						</Box>
					</Box>
				</Container>
			</AuthLayout>
		</Box>
	);
};
