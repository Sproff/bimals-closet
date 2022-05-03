import {
	Box,
	Button,
	Container,
	Flex,
	Grid,
	GridItem,
	Image,
	Text,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { getAllProducts } from "../../redux/actions/authAction";
import { axiosGet } from "../../queries/auth";

import { GoHeart } from "react-icons/go";
import { FiTruck } from "react-icons/fi";
import { MdSecurity } from "react-icons/md";
import { RiCustomerService2Fill } from "react-icons/ri";
import { HiOutlineBadgeCheck } from "react-icons/hi";
import ProductBg from "../../assets/images/product-bg.png";
import NewSeal from "../../assets/images/new-seal.png";

export const Products = () => {
	const dispatch = useDispatch();

	const products = useSelector((state: any) => state?.auth?.data);

	useEffect(() => {
		const fetchAllProducts = async () => {
			try {
				const res = await axiosGet("/products");
				dispatch(getAllProducts(res?.data?.products));
			} catch (error) {
				console.log(error);
			}
		};
		fetchAllProducts();
	}, []);

	return (
		<Container
			maxW="1024px"
			p="0"
			bg="brand.white300"
			position="relative"
			h="100%"
			overflow="hidden"
		>
			<Box>
				<Image w="25%" top="310px" pos="absolute" src={ProductBg} alt="" />
			</Box>

			<Box p="3rem" pos="relative" zIndex="">
				<Text display="flex" alignItems="center" fontWeight="500">
					<Image src={NewSeal} mr=".5rem" alt="" />
					New arrivals
				</Text>

				<Grid
					templateColumns={[
						"repeat(1, 1fr)",
						"repeat(2, 1fr)",
						"repeat(3, 1fr)",
						"repeat(4, 1fr)",
					]}
					gap={6}
					mt="1rem"
				>
					{products?.map((product: any) => (
						<Box key={product?._id}>
							<Link to="/product-details/:slug">
								<GridItem
									w="100%"
									h="100%"
									bg="brand.white100"
									boxShadow="0px 4px 24px rgba(240, 240, 240, 0.6)"
									borderRadius="20px"
									overflow="hidden"
									pos="relative"
								>
									<Box
										as="span"
										color="brand.red100"
										pos="absolute"
										left="15px"
										top="15px"
										fontSize="1.5rem"
										cursor="pointer"
									>
										<GoHeart />
									</Box>
									<Image
										src={product?.image}
										width="100%"
										height="60%"
										objectFit="cover"
										alt=""
									/>

									<Box p="1rem">
										<Box fontSize="1rem" fontWeight="500">
											<Box>
												<Text
													color="brand.green100"
													textAlign="left"
													maxW="200px"
													isTruncated
												>
													{product?.name}
												</Text>
											</Box>
											<Box>
												<Text fontSize=".8rem" color="brand.grey400">
													&#8358;{product?.price}
												</Text>
											</Box>
										</Box>

										<Box fontSize=".9rem" fontWeight="500" mt="1rem">
											<Text color="brand.grey400" textAlign="center">
												<Box
													as="span"
													borderRadius="50%"
													border="1px solid #3F3F3F"
													p=".2rem .3rem"
													mr=".5rem"
												>
													45
												</Box>
												-
												<Box
													as="span"
													borderRadius="50%"
													border="1px solid #3F3F3F"
													p=".2rem .3rem"
													ml=".5rem"
												>
													58
												</Box>
											</Text>
										</Box>
									</Box>
								</GridItem>
							</Link>
						</Box>
					))}
				</Grid>

				<Box textAlign="center">
					<Button
						bg="brand.green100"
						color="brand.white100"
						fontSize=".9rem"
						mt="2rem"
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

				<Box my="4rem">
					<Text color="brand.grey300" fontWeight="600" fontSize="1.5rem">
						Why Choose Us?
					</Text>

					<Grid
						templateColumns={[
							"repeat(1, 1fr)",
							"repeat(2, 1fr)",
							"repeat(3, 1fr)",
							"repeat(4, 1fr)",
						]}
						gap={6}
						mt="1rem"
					>
						<GridItem mt="1rem">
							<Flex color="brand.gold100" flexDir="column" alignItems="center">
								<Box fontSize="5rem">
									<FiTruck />
								</Box>
								<Text color="brand.grey400" fontSize="1rem" mt="1rem">
									Speed Delivery
								</Text>
							</Flex>
						</GridItem>

						<GridItem mt="1rem">
							<Flex color="brand.gold100" flexDir="column" alignItems="center">
								<Box fontSize="5rem">
									<MdSecurity />
								</Box>
								<Text color="brand.grey400" fontSize="1rem" mt="1rem">
									Secure Payment
								</Text>
							</Flex>
						</GridItem>

						<GridItem mt="1rem">
							<Flex color="brand.gold100" flexDir="column" alignItems="center">
								<Box fontSize="5rem">
									<RiCustomerService2Fill />
								</Box>
								<Text color="brand.grey400" fontSize="1rem" mt="1rem">
									24 hours customer service
								</Text>
							</Flex>
						</GridItem>

						<GridItem mt="1rem">
							<Flex color="brand.gold100" flexDir="column" alignItems="center">
								<Box fontSize="5rem">
									<HiOutlineBadgeCheck />
								</Box>
								<Text color="brand.grey400" fontSize="1rem" mt="1rem">
									Quality Products
								</Text>
							</Flex>
						</GridItem>
					</Grid>
				</Box>
			</Box>
		</Container>
	);
};
