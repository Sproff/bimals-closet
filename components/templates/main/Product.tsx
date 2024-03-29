import { Box, Circle, Flex, Icon, SimpleGrid, Text } from "@chakra-ui/react";
import { GoHeart, GoHeartFill } from "react-icons/go";
import { MdOutlineStarBorder } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";
import { useGetAllProducts } from "@/hooks/products/useProduct";
import { Fragment } from "react";
import { Product } from "@/types/product";
import { BoxCardLoader } from "@/components/animations/CustomLoader";

import { useToggleFavorite } from "@/hooks/favorite/useToggleFavorite";

const Products = () => {
	const { data: productData, isLoading: isLoadingProductData } =
		useGetAllProducts();

	const mapProducts = productData?.data?.products?.map((item: Product) => {
		const res = {
			...item,
		};
		return res;
	});

	const { toggleProductChecked, isProductChecked } =
		useToggleFavorite(mapProducts);

	return (
		<Box
			p="0"
			bg="brand.white300"
			position="relative"
			h="100%"
			overflow="hidden"
		>
			<Box maxW="1280px" mx="auto" pb="4rem">
				<Box pos="absolute" top="310px" left="-100px">
					<Image
						width={200}
						height={200}
						src="/assets/images/product-bg.png"
						alt="Product Image Background"
					/>
				</Box>

				<Box p="3rem" pos="relative" zIndex="">
					<Flex align="center">
						<Image
							src="/assets/images/new-seal.svg"
							height={30}
							width={30}
							alt="New Seal"
						/>
						<Text fontWeight="600" ml="1rem">
							New arrivals
						</Text>
					</Flex>

					<SimpleGrid columns={[2, 3, 3, 4]} gap="2rem" mt="1rem">
						{isLoadingProductData ? (
							<Fragment>
								{Array(4)
									.fill(0)
									.map((_, idx) => (
										<BoxCardLoader
											key={idx}
											rounded=".6rem"
											h={["230px", "300px"]}
										/>
									))}
							</Fragment>
						) : (
							<Fragment>
								{productData?.data?.products?.map((product: Product) => (
									<Box key={product?._id} pos="relative" cursor="pointer">
										<Circle
											bg="brand.white100"
											p=".5rem"
											pos="absolute"
											left="15px"
											top="15px"
										>
											<Icon
												onClick={() => toggleProductChecked(product?._id)}
												color={`${
													isProductChecked(product._id)
														? "brand.red100"
														: "brand.grey400"
												}`}
												fontSize="1.5rem"
												as={
													isProductChecked(product._id) ? GoHeartFill : GoHeart
												}
											/>
										</Circle>
										<Link href={`/product/${product?.slug}`}>
											<Box
												bg="brand.white100"
												boxShadow="0px 4px 24px rgba(240, 240, 240, 0.6)"
												borderRadius="1rem"
												overflow="hidden"
											>
												<Image
													src={product?.image[0]}
													width={300}
													height={200}
													// objectFit="cover"
													alt="Product Image"
												/>

												<Box p={["1rem", "2rem", "2rem", "2rem"]}>
													<Flex
														align={["left", "center"]}
														justify="space-between"
														flexDir={["column", "row"]}
													>
														<Text
															color="brand.grey300"
															textAlign="left"
															maxW="200px"
															fontSize={["1.4rem", "1.5rem"]}
															fontWeight="600"
															isTruncated
														>
															{product?.name}
														</Text>
														<Box>
															<Text
																fontSize={["1.2rem", "1.3rem"]}
																fontWeight="500"
																color="brand.blue100"
															>
																&#8358;{product?.price}
															</Text>
														</Box>
													</Flex>

													<Flex
														align="center"
														fontSize={["1.3rem", "1.5rem"]}
														color="brand.gold100"
														mt="1rem"
													>
														<Icon cursor="pointer" as={MdOutlineStarBorder} />
														<Text>4.8</Text>
													</Flex>
												</Box>
											</Box>
										</Link>
									</Box>
								))}
							</Fragment>
						)}
					</SimpleGrid>

					{/* <Box textAlign="center">
						<Button
							bg="brand.green100"
							color="brand.white100"
							fontSize="1.5rem"
							p="2rem"
							mt="5rem"
							_hover={{
								bg: "brand.green200",
							}}
							_focus={{
								borderColor: "none",
								boxShadow: "none",
							}}
						>
							View more products
						</Button>
					</Box> */}
				</Box>
			</Box>
		</Box>
	);
};

export { Products };
