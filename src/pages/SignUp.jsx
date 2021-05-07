import React, { useContext, useState } from "react";
import {
	Box,
	Button,
	Container,
	FormLabel,
	Input,
	Text,
} from "@chakra-ui/react";

import { Link, Redirect, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { signup } from "../queries/auth";
import { toast } from "react-toastify";
import { AuthContext } from "../contexts/auth";

export const SignUp = () => {
	const { register, handleSubmit } = useForm();
	const [loading, setLoading] = useState(false);
	const { authState } = useContext(AuthContext);

  const history = useHistory()

	if (authState) {
		return <Redirect to="/" />;
	}

	const handleSignup = async (data) => {
		try {
			setLoading(true);
			const res = await signup(data);
			// dispatch({ type: SIGNUP, payload: res.data });
      history.push("/login")
			setLoading(false);
			toast.success(res.message);
		} catch (error) {
			setLoading(false);
			toast.error(error.response?.data?.message || "Signup Failed");
		}
	};

	return (
		<Container
			maxW="container.sm"
			display="flex"
			justifyContent="center"
			alignItems="center"
			h="100vh"
		>
			<Box bg="#" p="2rem" borderRadius="10px" boxShadow="md">
				<Text fontSize="1.2rem" fontWeight="700" textAlign="center" p="2rem">
					SIGN UP
				</Text>
        <Box
          as="form"
					onSubmit={handleSubmit(handleSignup)}
					id="first-name"
					isRequired
				>
					<FormLabel>Full name</FormLabel>
					<Input
						id="full-name"
						placeholder="Full name"
            borderRadius="10px"
            mb="1rem"
						_focus={{ borderColor: "#000", boxShadow: "none" }}
						{...register("fullname", { required: true })}
					/>

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
					<Input
						id="password"
						placeholder="Password"
						borderRadius="10px"
            mb="1rem"
						_focus={{ borderColor: "#000", boxShadow: "none" }}
						{...register("password", { required: true })}
					/>
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
						isLoading={loading}
					>
						Sign Up
					</Button>
				</Box>
				<Text fontSize=".8rem" mt="1rem">
					Already have an account?
					<Link
						to="/login"
						style={{
							textDecoration: "underline",
						}}
					> Log In
					</Link>
				</Text>
			</Box>
		</Container>
	);
};
