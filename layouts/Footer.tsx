import { CustomInput } from "@/components/ui/forms/CustomInput";
import { IFormRegisterInput } from "@/types/auth";
import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

export const Footer = () => {
	const getYear = new Date().getFullYear();

	const {
		register,
		// handleSubmit,
		// control,
		formState: { errors },
	} = useForm<IFormRegisterInput>();

	return (
		<Box bg="brand.dark200">
			<Box maxW="1280px" mx="auto" p="1.5rem 3rem">
				<Flex
					flexDir={["column", "row"]}
					justify="space-between"
					w="100%"
					py="3rem"
				>
					<Box w={["30%", "15%"]}>
						<Text color="brand.white100" fontSize="1.6rem" fontWeight="700">
							Follow Us
						</Text>
						<Flex
							mt="1rem"
							w="100%"
							color="brand.white400"
							fontSize="2.5rem"
							justifyContent="space-between"
						>
							<Icon cursor="pointer" as={FaFacebookF} />
							<Icon cursor="pointer" as={FaInstagram} />
							<Icon cursor="pointer" as={FaWhatsapp} />
						</Flex>
					</Box>

					<Box mt={["4rem", 0]}>
						<Text color="brand.white100" fontSize="1.6rem" fontWeight="700">
							About
						</Text>
						<Box
							color="brand.white400"
							fontSize="1.4rem"
							mt="1rem"
							lineHeight="3rem"
						>
							<Text>About Us</Text>
							<Text>FAQs</Text>
						</Box>
					</Box>

					<Box mt={["4rem", 0]}>
						<Text color="brand.white100" fontSize="1.6rem" fontWeight="700">
							Subscribe for Updates
						</Text>
						<Box color="brand.white400" fontSize="1.4rem" mt="1rem">
							<Box>
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
						</Box>
					</Box>
				</Flex>

				<Text
					fontWeight="600"
					fontSize="1.5rem"
					color="brand.white100"
					textAlign="center"
					mt="5rem"
				>
					Copyright {getYear} | Bimal&apos;s Closet
				</Text>
			</Box>
		</Box>
	);
};
