import { CustomButton } from "@/components/ui/buttons/CustomButton";
import { useHydratedCartState } from "@/hooks/state/hydrated";
import { useCartState } from "@/hooks/state/storage";
import { Box, Center, Flex, Icon, Img, Stack, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { AiFillPlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import { BiChevronLeft } from "react-icons/bi";
import { FaGhost } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";

const CartItems = () => {
	const cart = useHydratedCartState("cart");
	const { quantityCount, removeFromCart, emptyCart } = useCartState(
		(state) => state
	);
	const router = useRouter();

	const totalCartPrice = cart?.reduce((total, item) => {
		const itemTotal = item.price * item.quantity;
		return total + itemTotal;
	}, 0);

	return (
		<Box pt="15rem" pb="5rem">
			<Box maxW="880px" mx="auto" px="3rem">
				<Box as="span" mb="2rem" onClick={() => router.back()}>
					<Icon as={BiChevronLeft} fontSize="3rem" cursor="pointer" />
				</Box>

				{cart?.length == 0 && (
					<Center flexDir="column">
						<Icon
							as={FaGhost}
							fontSize="10rem"
							color="brand.green100"
							opacity="0.4"
						/>
						<Text mt="1rem" fontWeight="300" textAlign="center">
							Your cart is currently empty. Start adding items now!
						</Text>
					</Center>
				)}

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
								<Flex align="center">
									<Text
										fontSize="1.7rem"
										fontWeight="600"
										color="brand.grey300"
									>
										₦{item?.price?.toFixed(2)}{" "}
									</Text>
									<Text
										ml=".5rem"
										fontSize="1.5rem"
										fontWeight="300"
										color="brand.grey400"
									>
										{item?.quantity > 1 &&
											`x ${item?.quantity} = ₦${(
												item?.price * item?.quantity
											).toFixed(2)}`}
									</Text>
								</Flex>
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

						<Box onClick={() => removeFromCart(item?.id)}>
							<Icon
								as={RiDeleteBinLine}
								fontSize="2rem"
								cursor="pointer"
								color="brand.grey400"
							/>
						</Box>
					</Flex>
				))}

				<Flex
					bg="brand.grey700"
					borderRadius="1rem"
					p="2rem"
					justify="space-between"
					mt="5rem"
				>
					<Box overflow="hidden" borderRadius="1rem">
						<Text fontWeight="600">Total Items</Text>
						<Text textAlign="center">{cart?.length}</Text>
						<Box>
							<CustomButton
								{...{
									text: "Checkout",
									py: ["2rem", "2rem"],
									border: ".2rem solid",
									borderColor: "transparent",
									isDisabled: cart?.length < 1,
								}}
							/>
						</Box>
					</Box>

					<Box overflow="hidden" borderRadius="1rem">
						<Text fontWeight="600">Total Prices</Text>
						<Text textAlign="center">₦{totalCartPrice?.toFixed(2)}</Text>
						<Box onClick={emptyCart}>
							<CustomButton
								{...{
									text: "Clear Cart",
									py: ["2rem", "2rem"],
									border: ".2rem solid",
									borderColor: "transparent",
									isDisabled: cart?.length < 1,
								}}
							/>
						</Box>
					</Box>
				</Flex>
			</Box>
		</Box>
	);
};

export { CartItems };
