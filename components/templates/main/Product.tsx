import {
	Box,
	Button,
	Circle,
	Container,
	Flex,
	Grid,
	GridItem,
	Icon,
	Img,
	SimpleGrid,
	Text,
	useBoolean,
} from "@chakra-ui/react";

import { GoHeart, GoHeartFill } from "react-icons/go";
import { FiTruck } from "react-icons/fi";
import { MdOutlineStarBorder, MdSecurity } from "react-icons/md";
import { RiCustomerService2Fill } from "react-icons/ri";
import { HiOutlineBadgeCheck } from "react-icons/hi";
import Image from "next/image";
import Link from "next/link";
import { useGetAllProducts } from "@/hooks/products/useProduct";
import { useState } from "react";
import { CheckedProducts, Product } from "@/interfaces/product";

const data = [
	{
		icon: FiTruck,
		text: "Speed Delivery",
	},
	{
		icon: MdSecurity,
		text: "Secure Payment",
	},
	{
		icon: RiCustomerService2Fill,
		text: "24 hours customer service",
	},

	{
		icon: HiOutlineBadgeCheck,
		text: "Quality Products",
	},
];

const Products = () => {
	const { data: productData } = useGetAllProducts();
	const [checkedProducts, setCheckedProducts] = useState<string[]>([]);

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

	console.log("productData", productData);

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
											src={product?.image}
											width={300}
											height={200}
											objectFit="cover"
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
													fontSize={["1.2rem", "1.5rem"]}
													fontWeight="600"
													isTruncated
												>
													{product?.name}
												</Text>
												<Box>
													<Text
														fontSize={["1.1rem", "1.3rem"]}
														fontWeight="500"
														color="brand.blue100"
													>
														&#8358;{product?.price}
													</Text>
												</Box>
											</Flex>

											<Flex
												align="center"
												fontSize={["1rem", "1.5rem"]}
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
					</SimpleGrid>

					<Box textAlign="center">
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
					</Box>

					<Box my="10rem">
						<Text
							color="brand.grey300"
							fontWeight="600"
							fontSize={["2rem", "2rem", "2.5rem", "2.5rem"]}
							textAlign="center"
						>
							Why Choose Us?
						</Text>

						<SimpleGrid gap="2rem" mt="3rem" columns={[2, 4]}>
							{data.map((item, idx) => (
								<Flex
									mt="1rem"
									key={idx}
									color="brand.gold100"
									flexDir="column"
									alignItems="center"
								>
									<Icon fontSize="5rem" as={item.icon} />

									<Text color="brand.grey400" fontSize="1.5rem" mt="1rem" textAlign="center">
										{item.text}
									</Text>
								</Flex>
							))}
						</SimpleGrid>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export { Products };
