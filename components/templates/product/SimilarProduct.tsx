import { BoxCardLoader } from "@/components/animations/CustomLoader";
import { useGetAllProducts } from "@/hooks/products/useProduct";
import { Product } from "@/types/product";
import { Box, Circle, Flex, Icon, SimpleGrid, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment, useEffect, useState } from "react";
import { GoHeart, GoHeartFill } from "react-icons/go";
import { MdOutlineStarBorder } from "react-icons/md";

const SimilarProduct = () => {
	const { data: productData, isLoading: isLoadingProductData } =
		useGetAllProducts();

	const [checkedProducts, setCheckedProducts] = useState<string[]>([]);
	const [shuffledProducts, setShuffledProducts] = useState<Product[]>([]);

	const isProductChecked = (productId: string) => {
		return checkedProducts.includes(productId);
	};

	const toggleProductChecked = (productId: string) => {
		setCheckedProducts((prevCheckedProducts) => {
			if (isProductChecked(productId)) {
				return prevCheckedProducts.filter((id) => id !== productId);
			} else {
				return [...prevCheckedProducts, productId];
			}
		});
	};

	const shuffleArray = (array: Product[]) => {
		const shuffledArray = [...array];
		for (let i = shuffledArray.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[shuffledArray[i], shuffledArray[j]] = [
				shuffledArray[j],
				shuffledArray[i],
			];
		}
		return shuffledArray;
	};

	useEffect(() => {
		if (productData) {
			const shuffled = shuffleArray(productData?.data?.products);
			setShuffledProducts(shuffled);
		}
	}, [productData]);

	return (
		<Box maxW="1280px" mx="auto" px="3rem" pb="8rem" pt="3rem">
			<Text fontWeight="600" fontSize="2.5rem">
				Similar Products
			</Text>

			<SimpleGrid columns={[2, 3, 3, 4]} gap="2rem" mt="2rem">
				{shuffledProducts?.slice(0, 4).map((product: Product) => (
					<Fragment key={product?._id}>
						{isLoadingProductData ? (
							<BoxCardLoader rounded=".6rem" h={["230px", "300px"]} />
						) : (
							<Box pos="relative" cursor="pointer">
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
										as={isProductChecked(product._id) ? GoHeartFill : GoHeart}
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
						)}
					</Fragment>
				))}
			</SimpleGrid>
		</Box>
	);
};

export { SimilarProduct };
