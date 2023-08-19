import { CustomButton } from "@/components/ui/buttons/CustomButton";
import { useVerifyEmailToken } from "@/hooks/auth/useAuth";
import {
	Box,
	Center,
	Flex,
	Heading,
	Image,
	Text,
	useBoolean,
} from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { IoMdCheckmarkCircle } from "react-icons/io";
import withAuth from "../withAuth";

const VerifyEmail = () => {
	const router = useRouter();
	const { email, token } = router.query;
	const [status, setStatus] = useBoolean();

	const { data: tokenData } = useVerifyEmailToken(token as string);

	useEffect(() => {
		if (tokenData?.status === "success") {
			setStatus.on();
		}
	}, [tokenData]);

	return (
		<Box bg="brand.white100">
			<Flex
				maxW="1280px"
				mx="auto"
				p="2rem"
				flexDir="column"
				h="100vh"
				justifyContent="space-between"
			>
				<Box>
					<Box
						bg="brand.green100"
						borderRadius="50%"
						pos="absolute"
						h={["150px", "150px", "200px", "250px", "300px"]}
						w={["150px", "150px", "200px", "250px", "300px"]}
						top="-79px"
						left="-58px"
					/>
					<Heading
						py="4rem"
						color="brand.grey300"
						fontWeight="600"
						fontSize={["3rem", "2.5rem", "2.5rem", "3rem"]}
						textAlign="center"
					>
						Verify Email
					</Heading>

					<Box textAlign="center">
						<Box w="100%" h="100%" mt="0rem">
							<Image
								w={["200px", "200px", "300px", "400px"]}
								h={["200px", "200px", "300px", "400px"]}
								m="0 auto"
								src="/assets/images/verify-email-img.png"
								alt="Verify Email Background"
							/>
						</Box>

						{!status ? (
							<Text
								m="3rem auto"
								w={["100%", "100%", "450px"]}
								fontSize={["1.5rem", "1.5rem", "1.8rem", "2rem"]}
								fontWeight="400"
								letterSpacing="0.02rem"
							>
								We’ve sent an email to <b>{email}</b>. Please check your inbox
								to verify your email.
							</Text>
						) : (
							<Box>
								<Center fontSize="4rem" maxW="330px" mx="auto" mt="2rem">
									<Box as="span" color="brand.green100">
										<IoMdCheckmarkCircle />
									</Box>
									<Text
										m="1rem auto"
										w={["100%", "100%", "450px"]}
										fontSize={["1.5rem", "1.5rem", "1.8rem", "2rem"]}
										fontWeight="400"
										letterSpacing="0.02rem"
									>
										Email Verification Successful
									</Text>
								</Center>

								<Link href="/auth/verify-phone">
									<CustomButton
										{...{ w: "auto", px: "5rem", text: "Proceed" }}
									/>
								</Link>
							</Box>
						)}
					</Box>
				</Box>

				<Box>
					<Text
						textAlign="left"
						color="brand.green100"
						fontWeight="600"
						fontSize="1.5rem"
					>
						Step 2 of 3
					</Text>
				</Box>
			</Flex>
		</Box>
	);
};

export default  withAuth(VerifyEmail);
