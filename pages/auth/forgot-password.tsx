import { Box, Stack, Image, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

// import { useDispatch } from "react-redux";
// import { getError, loginUser } from "../../redux/actions/authAction";
import axios from "axios";
import { useShowToast } from "@/hooks/toast/useShowToast";
import { useForgotPassword } from "@/hooks/auth/useAuth";
import Link from "next/link";
import { CustomInput } from "@/components/ui/forms/CustomInput";
import { IFormLoginInput } from "@/types/auth";
import { CustomButton } from "@/components/ui/buttons/CustomButton";
import { saveLocalStorage } from "@/utils/helpers";
import { useRouter } from "next/router";

const ForgotPawword = () => {
	const router = useRouter();
	const toast = useShowToast();
	const { mutateAsync, isLoading } = useForgotPassword();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IFormLoginInput>();

	const onSubmit: SubmitHandler<IFormLoginInput> = async (data) => {
		try {
			const res = await mutateAsync(data);
			console.log("res", res);
			// router.push("/auth/login");
		} catch (error) {
			if (axios.isAxiosError(error)) {
				toast({
					status: "error",
					title:
						error?.response?.data?.message ||
						"Erorr occurred! Please try again later",
				});
			}
		}
	};

	return (
		<Box>
			<Stack spacing="0" direction={["column", "column", "row"]}>
				<Box
					h="100vh"
					w={["100%", "100%", "50%"]}
					p="2rem"
					bg="brand.green100"
					pos="relative"
					display={["none", "none", "flex"]}
				>
					<Image
						w="460px"
						pos="absolute"
						right="-14px"
						top="102px"
						src="/assets/images/login-bg-one.png"
						alt="Login Background"
					/>
					<Image
						w="300px"
						pos="absolute"
						left="0"
						bottom="0"
						src="/assets/images/login-bg-two.png"
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
					<Text
						color="brand.grey300"
						fontWeight="600"
						fontSize={["3rem", "2.5rem", "2.5rem", "3rem"]}
					>
						Reset Password
					</Text>
					<Text
						color="brand.grey300"
						fontWeight="500"
						fontSize={["1.4rem", "1.15rem", "1.15rem", "1.4rem"]}
						letterSpacing="0.05rem"
						textAlign="center"
						px="4rem"
					>
						To reset your password, please provide your email address.
					</Text>

					<Box
						as="form"
						w={["100%", "100%", "100%", "80%", "56%"]}
						px="4rem"
						onSubmit={handleSubmit(onSubmit)}
					>
						<Box my="2rem">
							<CustomInput
								{...{
									id: "email",
									placeholder: "Email",
									type: "text",
									formHook: register("email", {
										required: "Please enter your email",
									}),
									errorMessage: errors.email?.message as string,
								}}
							/>
						</Box>

						<CustomButton {...{ text: "Reset Password", isLoading }} />

						<Link href="/auth/login">
							<Text
								mt=".7rem"
								color="brand.grey400"
								fontWeight="500"
								fontSize="1.3rem"
							>
								Already have an account?
								<span style={{ color: "#00AF54" }}> Login</span>
							</Text>
						</Link>
					</Box>
				</Box>
			</Stack>
		</Box>
	);
};

export default ForgotPawword;
