import { Box, Stack, Image, Text, useBoolean, Icon } from "@chakra-ui/react";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import { useShowToast } from "@/hooks/toast/useShowToast";
import { useResetPassword } from "@/hooks/auth/useAuth";
import { CustomInput } from "@/components/ui/forms/CustomInput";
import { IFormLoginInput } from "@/types/auth";
import { CustomButton } from "@/components/ui/buttons/CustomButton";
import withAuth from "../withAuth";
import { Fragment, useState } from "react";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useRouter } from "next/router";
import Link from "next/link";

const ResetPassword = () => {
	const [showPassword, setShowPassword] = useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);
	const [status, setStatus] = useBoolean();
	const toast = useShowToast();
	const { mutateAsync, isLoading } = useResetPassword();
	const router = useRouter();
	const { code } = router.query;

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IFormLoginInput>();

	const onSubmit: SubmitHandler<IFormLoginInput> = async (data) => {
		const { newPassword, confirmPassword } = data;

		if (newPassword !== confirmPassword) {
			return toast({
				status: "error",
				title: "Passwords do not match. Please double-check and try again.",
			});
		}

		const payload = {
			newPassword,
			resetToken: code,
		};

		try {
			const res = await mutateAsync(payload);
			if (res?.status === "success") {
				setStatus.on();
			}
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
					h={["90vh", "100vh"]}
					w={["100%", "100%", "50%"]}
					bg={["#fff"]}
					display="flex"
					alignItems="center"
					justifyContent="center"
					flexDir="column"
					ms="0rem"
				>
					{status && (
						<Icon
							fontSize="4rem"
							color="brand.green100"
							as={IoMdCheckmarkCircle}
							mb="1rem"
						/>
					)}
					<Text
						color="brand.grey300"
						fontWeight="600"
						fontSize={["3rem", "2.5rem", "2.5rem", "3rem"]}
						textAlign="center"
						px="4rem"
					>
						{!status ? "Reset Password" : "Password Reset Successful"}
					</Text>
					<Text
						color="brand.grey300"
						fontWeight="500"
						fontSize={["1.4rem", "1.15rem", "1.15rem", "1.4rem"]}
						letterSpacing="0.05rem"
						textAlign="center"
						px="4rem"
					>
						{!status
							? "Good job, you clicked the link to reset your password. Enter the new password you would like to use."
							: "Congratulations! Your password has been successfully reset. You now have a new password. Click the button below to log in to your account"}
					</Text>

					<Box
						as="form"
						w={["100%", "100%", "100%", "80%", "56%"]}
						px="4rem"
						onSubmit={handleSubmit(onSubmit)}
					>
						{!status && (
							<Fragment>
								<Box my="2rem">
									<CustomInput
										{...{
											id: "newPassword",
											placeholder: "New Password",
											type: showPassword ? "text" : "password",
											formHook: register("newPassword", {
												required: "Please enter your new password",
												pattern: {
													value: /^(?=.*[A-Z])(?=.*\d)[^\s]{8,}$/,
													message:
														"'Password' should have a minimum of eight characters, at least one capital letter, and one number. Spaces are not allowed.",
												},
											}),
											handlePasswordClick: () => setShowPassword(!showPassword),
											passwordIcon: (
												<Box onClick={() => setShowPassword(!showPassword)}>
													{showPassword ? (
														<AiOutlineEye />
													) : (
														<AiOutlineEyeInvisible />
													)}
												</Box>
											),

											errorMessage: errors.newPassword?.message as string,
										}}
									/>
								</Box>

								<Box my="2rem">
									<CustomInput
										{...{
											id: "confirmPassword",
											placeholder: "Confirm New Password",
											type: showConfirmPassword ? "text" : "password",
											formHook: register("confirmPassword", {
												required: "Please confirm your password",
												pattern: {
													value: /^(?=.*[A-Z])(?=.*\d)[^\s]{8,}$/,
													message:
														"'Password' should have a minimum of eight characters, at least one capital letter, and one number. Spaces are not allowed.",
												},
											}),
											handlePasswordClick: () =>
												setShowConfirmPassword(!showConfirmPassword),
											passwordIcon: (
												<Box
													onClick={() =>
														setShowConfirmPassword(!showConfirmPassword)
													}
												>
													{showConfirmPassword ? (
														<AiOutlineEye />
													) : (
														<AiOutlineEyeInvisible />
													)}
												</Box>
											),

											errorMessage: errors.confirmPassword?.message as string,
										}}
									/>
								</Box>
							</Fragment>
						)}

						{!status ? (
							<CustomButton {...{ text: "Reset Password", isLoading }} />
						) : (
							<Box>
								<Link href="/auth/login">
									<CustomButton {...{ text: "Login" }} />
								</Link>
							</Box>
						)}
					</Box>
				</Box>
			</Stack>
		</Box>
	);
};

export default withAuth(ResetPassword);
