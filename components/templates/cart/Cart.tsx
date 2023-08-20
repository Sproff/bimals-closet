import { CustomButton } from "@/components/ui/buttons/CustomButton";
import { useHydratedCartState } from "@/hooks/state/hydrated";
import { useCartState } from "@/hooks/state/storage";
import { Box, Flex, Icon, Img, Stack, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { AiFillPlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import { BiChevronLeft } from "react-icons/bi";
import { RiDeleteBinLine } from "react-icons/ri";

const CartItems = () => {
	const cart = useHydratedCartState("cart");
	const { quantityCount } = useCartState((state) => state);
	const router = useRouter();

	return (
		<Box pt="15rem" pb="5rem">
			<Box maxW="880px" mx="auto" px="3rem">
				<Box as="span" mb="2rem" onClick={() => router.back()}>
					<Icon as={BiChevronLeft} fontSize="3rem" cursor="pointer" />
				</Box>

				{cart?.map((item) => (
					<Flex
						key={item?.id}
						bg="brand.grey700"
						borderRadius="1rem"
						p="1rem"
						justify="space-between"
						mb="2rem"
					>
						<Flex>
							<Box overflow="hidden" borderRadius="1rem">
								<Img
									width="140px"
									height="140px"
									src={item?.image}
									alt="Product Image"
								/>
							</Box>

							<Stack ml="2rem" flexDir="column" spacing="1.2rem">
								<Text fontSize="1.8rem" fontWeight="300" color="brand.grey300">
									{item?.name}
								</Text>
								<Text fontSize="1.7rem" fontWeight="600" color="brand.grey300">
									₦{item?.price}
								</Text>
								<Flex align="center">
									<Text
										fontSize="1.4rem"
										fontWeight="600"
										color="brand.grey300"
									>
										Size:
									</Text>
									<Text as="span" fontWeight="400" ml=".5rem">
										{item?.size}
									</Text>
								</Flex>

								<Flex align="center">
									<Text
										fontSize="1.4rem"
										fontWeight="600"
										color="brand.grey300"
									>
										Qty:
									</Text>
									<Flex align="center" ml="1rem">
										<Icon
											onClick={() => quantityCount(item?.id, "decreament")}
											as={AiOutlineMinusCircle}
											fontSize="2rem"
											cursor={item?.quantity === 1 ? "not-allowed" : "pointer"}
											opacity={item?.quantity === 1 ? "0.4" : 1}
											color="brand.green100"
										/>
										<Text mx="1rem">{item?.quantity}</Text>
										<Icon
											onClick={() => quantityCount(item?.id, "increament")}
											as={AiFillPlusCircle}
											fontSize="2rem"
											cursor="pointer"
											color="brand.green100"
										/>
									</Flex>
								</Flex>
							</Stack>
						</Flex>

						<Box>
							<Icon
								as={RiDeleteBinLine}
								fontSize="2rem"
								cursor="pointer"
								color="brand.grey400"
							/>
						</Box>
					</Flex>
				))}
			</Box>
		</Box>
	);
};

export { CartItems };
