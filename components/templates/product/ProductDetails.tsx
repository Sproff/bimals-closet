import {
	BoxCardLoader,
	TextLoader,
} from "@/components/animations/CustomLoader";
import { CustomButton } from "@/components/ui/buttons/CustomButton";
import { useParticularProduct } from "@/hooks/products/useProduct";
import { useCartState } from "@/hooks/state/storage";
import { useShowToast } from "@/hooks/toast/useShowToast";
import {
	Box,
	Flex,
	HStack,
	Icon,
	SimpleGrid,
	Tag,
	Text,
} from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { Fragment, SetStateAction, useEffect, useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiChevronLeft } from "react-icons/bi";
import { GoHeart } from "react-icons/go";
import { MdOutlineStar } from "react-icons/md";

const ProductDetails = () => {
	const [selectedSize, setSelectedSize] = useState<string>("");
	const [selectedImage, setSelectedImage] = useState<string>("");
	const router = useRouter();
	const { slug } = router.query;
	const toast = useShowToast();

	const {
		data: particularProductData,
		isLoading: isLoadingParticulaProductData,
	} = useParticularProduct(slug as string);

	const { addToCart } = useCartState((state) => state);

	const handleAddToCart = () => {
		const { _id, name, price, image } = particularProductData?.data?.product;
		if (!selectedSize) {
			return toast({
				status: "error",
				title: "Select a size before adding to cart",
			});
		}
		const payload = {
			id: _id,
			name,
			size: selectedSize,
			price,
			image: image[0],
		};
		addToCart(payload);
		toast({
			status: "success",
			title: "Item added to cart",
		});
	};

	const handleBuyNow = () => {
		handleAddToCart();

		if (selectedSize) {
			setTimeout(() => {
				router.push("/cart");
			}, 700);
		}
	};

	return (
		<Box pt="15rem" bg="brand.white100">
			<Box maxW="1280px" mx="auto" px="3rem">
				<Box as="span" mb="2rem" onClick={() => router.back()}>
					<Icon as={BiChevronLeft} fontSize="3rem" cursor="pointer" />
				</Box>

				<SimpleGrid
					columns={[1, 2, 2, 2]}
					gap="4rem"
					borderBottom="1px solid"
					borderColor="brand.white600"
					pb="2rem"
				>
					{isLoadingParticulaProductData ? (
						<Box>
							<BoxCardLoader rounded=".6rem" h="450px" />
							<HStack mt="2rem" spacing="2rem" mx="4rem">
								{Array(3)
									.fill(0)
									.map(() => (
										<BoxCardLoader rounded=".6rem" h="70px" />
									))}
							</HStack>
						</Box>
					) : (
						<Box>
							<Box w="100%" borderRadius="1rem" overflow="hidden">
								<Image
									src={
										!selectedImage
											? particularProductData?.data?.product?.image[0]
											: selectedImage
									}
									height={500}
									width={500}
									alt="Product Image"
								/>
							</Box>

							<Flex my="2rem" w="65%" mx="auto">
								{particularProductData?.data?.product?.image.map(
									(item: string, idx: number) => (
										<Box
											key={idx}
											onClick={() => setSelectedImage(item)}
											p=".8rem 1.5rem"
											fontSize="1.5rem"
											fontWeight="500"
											bg="transparent"
											border="1px solid"
											cursor="pointer"
											borderColor={
												selectedImage === item ? "brand.grey300" : "transparent"
											}
											borderRadius=".5rem"
										>
											<Image
												src={item}
												height={70}
												width={70}
												alt="Product Image"
											/>
										</Box>
									)
								)}
							</Flex>
						</Box>
					)}

					{isLoadingParticulaProductData ? (
						<Box>
							<TextLoader noOfLines={2} />
							<TextLoader mt="4rem" noOfLines={4} />
							<TextLoader mt="4rem" noOfLines={4} />
							<HStack mt="4rem">
								<BoxCardLoader rounded=".6rem" h="40px" />
								<BoxCardLoader rounded=".6rem" h="40px" />
							</HStack>
						</Box>
					) : (
						<Box>
							<Text
								fontSize={["2.5rem", "3.2rem", "2.5rem", "3.2rem"]}
								fontWeight="600"
							>
								{particularProductData?.data?.product?.name}
							</Text>
							<Flex
								align="center"
								justify="space-between"
								borderBottom="1px solid"
								borderColor="brand.white600"
								pb="2rem"
							>
								<Flex
									align="center"
									fontSize={["1.5rem", "1.8rem"]}
									color="brand.gold100"
									mt=".8rem"
								>
									{Array(5)
										.fill(0)
										.map(() => (
											<Icon cursor="pointer" as={MdOutlineStar} />
										))}

									<Text ml="1rem">4.8</Text>
								</Flex>

								<Icon
									cursor="pointer"
									color="brand.grey400"
									fontSize="2rem"
									as={GoHeart}
								/>
							</Flex>

							<Box>
								<Text
									color="brand.blue100"
									fontSize={["2.5rem", "4.2rem", "2.5rem", "4.2rem"]}
									fontWeight="600"
								>
									₦{particularProductData?.data?.product?.price}
								</Text>
								<Text
									color="brand.grey300"
									fontSize={["1.5rem", "1.5rem", "1.5rem", "1rem"]}
									fontWeight="300"
								>
									Shipping: N2,800
								</Text>

								<Box mt="2rem">
									<Text
										fontSize={["1.6rem", "1.8rem", "1.5rem", "1.8rem"]}
										fontWeight="600"
										color="brand.grey300"
									>
										Size
									</Text>
									<HStack spacing={4} mt="1rem">
										{["sm", "md", "lg", "xl", "2xl", "3xl"].map((size) => (
											<Tag
												onClick={() => setSelectedSize(size)}
												cursor="pointer"
												size="lg"
												key={size}
												p={[".8rem", ".8rem 1.5rem"]}
												fontSize={["1.5rem", "1.5rem", "1.2rem", "1.5rem"]}
												fontWeight="500"
												bg="transparent"
												border="1px solid"
												borderColor={
													selectedSize === size
														? "brand.grey300"
														: "brand.white500"
												}
												borderRadius=".5rem"
												_hover={{
													borderColor: "brand.grey300",
												}}
											>
												{size}
											</Tag>
										))}
									</HStack>
								</Box>

								<Box mt="2rem">
									<Text
										fontSize={["1.6rem", "1.8rem", "1.5rem", "1.8rem"]}
										fontWeight="600"
										color="brand.grey300"
									>
										Product Details
									</Text>
									<Text fontSize={["1.5rem", "1.5rem", "1.3rem", "1.5rem"]}>
										{particularProductData?.data?.product?.desc}
									</Text>
									<HStack w="100%" gap="1rem">
										<Box w="100%" onClick={handleAddToCart}>
											<CustomButton
												{...{
													text: "Add to cart",
													btnIcon: AiOutlineShoppingCart,
													py: ["2rem", "2.5rem"],
													bg: "transparent",
													color: "brand.green300",
													boxShadow: "0",
													border: ".2rem solid",
													borderColor: "brand.green300",
													fontSize: ["1.5rem", "1.8rem", "1.6rem", "1.8rem"],
													bgHover: "brand.white300",
													isBtnIcon: true,
												}}
											/>
										</Box>

										<Box w="100%" onClick={handleBuyNow}>
											<CustomButton
												{...{
													text: "Buy Now",
													py: ["2rem", "2.5rem"],
													border: ".2rem solid",
													borderColor: "transparent",
												}}
											/>
										</Box>
									</HStack>
								</Box>
							</Box>
						</Box>
					)}
				</SimpleGrid>
			</Box>
		</Box>
	);
};

export { ProductDetails };
