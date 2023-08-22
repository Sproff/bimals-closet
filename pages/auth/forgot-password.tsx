import { Box, Stack, Image, Text, useBoolean, Icon } from "@chakra-ui/react";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import { useShowToast } from "@/hooks/toast/useShowToast";
import { useForgotPassword } from "@/hooks/auth/useAuth";
import Link from "next/link";
import { CustomInput } from "@/components/ui/forms/CustomInput";
import { IFormLoginInput } from "@/types/auth";
import { CustomButton } from "@/components/ui/buttons/CustomButton";
import withAuth from "../withAuth";
import { IoMdCheckmarkCircle } from "react-icons/io";

const ForgotPassword = () => {
	const [status, setStatus] = useBoolean();
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
					h="100vh"
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
						{!status ? "Reset Password" : "	Reset Password Link Sent"}
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
							? "To reset your password, please provide your email address."
							: "A link has been sent to your email to reset your password. Click the link to reset your password."}
					</Text>

					{!status && (
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
					)}
				</Box>
			</Stack>
		</Box>
	);
};

export default withAuth(ForgotPassword);
