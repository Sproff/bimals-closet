import { AuthModalData } from "@/utils/modal";
import { Box, Flex, HStack, Icon, Text } from "@chakra-ui/react";
import Link from "next/link";
import { Fragment } from "react";

const MobileNavbar = ({
	handleLogout,
	token,
}: {
	handleLogout: () => void;
	token: string | null;
}) => {
	return (
		<Box
			bg="brand.dark100"
			h="100%"
			pos="fixed"
			top="7rem"
			left="0"
			w="100%"
			zIndex="99"
			display={["block", "none", "none", "none"]}
		>
			<Box
				bg="brand.white300"
				mt="0rem"
				p="1rem"
				w="100%"
				borderBottomLeftRadius=".6rem"
				borderBottomRightRadius=".6rem"
			>
				<HStack
					alignItems="left"
					display={["block", "block", "block", "none"]}
					justifyContent="space-between"
					fontSize="1.7rem"
					fontWeight="500"
					spacing={0}
				>
					{AuthModalData.map((item, idx) => {
						return (
							<Fragment key={idx}>
								{item.link ? (
									<Box w="max-content">
										<Link href={item.link}>
											<Flex
												alignItems="center"
												role="group"
												cursor="pointer"
												p=".9rem 1.5rem"
												_hover={{
													bg: "brand.green100",
													color: "brand.white100",
													borderRadius: ".4rem",
												}}
											>
												<Icon
													color="brand.green100"
													_groupHover={{
														color: "brand.white100",
													}}
													as={item.icon}
												/>

												<Text
													ml=".8rem"
													fontSize="1.4rem"
													display="flex"
													alignItems="center"
												>
													{item.text === "Logout" && token === null
														? "Login"
														: item.text}
												</Text>
											</Flex>
										</Link>
									</Box>
								) : (
									<Box w="max-content">
										<Flex
											alignItems="center"
											cursor="pointer"
											p=".9rem 1.5rem"
											onClick={handleLogout}
										>
											<Icon
												color="brand.green100"
												_groupHover={{
													color: "brand.white100",
												}}
												as={item.icon}
											/>

											<Text
												ml=".8rem"
												fontSize="1.4rem"
												display="flex"
												alignItems="center"
											>
												{item.text === "Logout" && token === null
													? "Login"
													: item.text}
											</Text>
										</Flex>
									</Box>
								)}
							</Fragment>
						);
					})}
				</HStack>
			</Box>
		</Box>
	);
};

export { MobileNavbar };
