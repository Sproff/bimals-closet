import {
	Box,
	Container,
	Flex,
	Grid,
	GridItem,
	Image,
	Text,
} from "@chakra-ui/react";
import { GoHeart } from "react-icons/go";
import { FiTruck } from "react-icons/fi";
import { MdSecurity } from "react-icons/md";
import { RiCustomerService2Fill } from "react-icons/ri";
import { HiOutlineBadgeCheck } from "react-icons/hi";
import ProductBg from "../../assets/images/product-bg.png";
import NewSeal from "../../assets/images/new-seal.png";
import ProductImage from "../../assets/images/product-img1.png";

export const Products = () => {
	return (
		<Container
			maxW="1024px"
			p="0"
			bg="brand.white300"
			position="relative"
			h="100%"
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
					<GridItem
						w="100%"
						h="100%"
						bg="brand.white100"
						boxShadow="0px 4px 24px rgba(240, 240, 240, 0.6)"
						borderRadius="10px"
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
						<Image src={ProductImage} width="100%" objectFit="cover" alt="" />

						<Box p="1rem">
							<Flex
								fontSize="1rem"
								fontWeight="500"
								justifyContent="space-between"
							>
								<Box>
									<Text
										color="brand.grey300"
										textAlign="left"
										maxW="100px"
										isTruncated
									>
										Sneakers Sneakers
									</Text>
								</Box>
								<Box>
									<Text fontSize=".8rem" color="brand.grey400">
										&#8358;5,000
									</Text>
								</Box>
							</Flex>

							<Box fontSize=".9rem" fontWeight="500" mt="1rem">
								<Text color="brand.grey300" textAlign="center">
									<Box
										as="span"
										borderRadius="50%"
										border="1px solid#3F3F3F"
										p=".2rem .3rem"
										mr=".5rem"
									>
										45
									</Box>
									-
									<Box
										as="span"
										borderRadius="50%"
										border="1px solid#3F3F3F"
										p=".2rem .3rem"
										ml=".5rem"
									>
										58
									</Box>
								</Text>
							</Box>
						</Box>
					</GridItem>

					<GridItem
						w="100%"
						h="100%"
						bg="brand.white100"
						boxShadow="0px 4px 24px rgba(240, 240, 240, 0.6)"
						borderRadius="10px"
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
						<Image src={ProductImage} width="100%" objectFit="cover" alt="" />

						<Box p="1rem">
							<Flex
								fontSize="1rem"
								fontWeight="500"
								justifyContent="space-between"
							>
								<Box>
									<Text
										color="brand.grey300"
										textAlign="left"
										maxW="100px"
										isTruncated
									>
										Sneakers Sneakers
									</Text>
								</Box>
								<Box>
									<Text fontSize=".8rem" color="brand.grey400">
										&#8358;5,000
									</Text>
								</Box>
							</Flex>

							<Box fontSize=".9rem" fontWeight="500" mt="1rem">
								<Text color="brand.grey300" textAlign="center">
									<Box
										as="span"
										borderRadius="50%"
										border="1px solid#3F3F3F"
										p=".2rem .3rem"
										mr=".5rem"
									>
										45
									</Box>
									-
									<Box
										as="span"
										borderRadius="50%"
										border="1px solid#3F3F3F"
										p=".2rem .3rem"
										ml=".5rem"
									>
										58
									</Box>
								</Text>
							</Box>
						</Box>
					</GridItem>

					<GridItem
						w="100%"
						h="100%"
						bg="brand.white100"
						boxShadow="0px 4px 24px rgba(240, 240, 240, 0.6)"
						borderRadius="10px"
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
						<Image src={ProductImage} width="100%" objectFit="cover" alt="" />

						<Box p="1rem">
							<Flex
								fontSize="1rem"
								fontWeight="500"
								justifyContent="space-between"
							>
								<Box>
									<Text
										color="brand.grey300"
										textAlign="left"
										maxW="100px"
										isTruncated
									>
										Sneakers Sneakers
									</Text>
								</Box>
								<Box>
									<Text fontSize=".8rem" color="brand.grey400">
										&#8358;5,000
									</Text>
								</Box>
							</Flex>

							<Box fontSize=".9rem" fontWeight="500" mt="1rem">
								<Text color="brand.grey300" textAlign="center">
									<Box
										as="span"
										borderRadius="50%"
										border="1px solid#3F3F3F"
										p=".2rem .3rem"
										mr=".5rem"
									>
										45
									</Box>
									-
									<Box
										as="span"
										borderRadius="50%"
										border="1px solid#3F3F3F"
										p=".2rem .3rem"
										ml=".5rem"
									>
										58
									</Box>
								</Text>
							</Box>
						</Box>
					</GridItem>

					<GridItem
						w="100%"
						h="100%"
						bg="brand.white100"
						boxShadow="0px 4px 24px rgba(240, 240, 240, 0.6)"
						borderRadius="10px"
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
						<Image src={ProductImage} width="100%" objectFit="cover" alt="" />

						<Box p="1rem">
							<Flex
								fontSize="1rem"
								fontWeight="500"
								justifyContent="space-between"
							>
								<Box>
									<Text
										color="brand.grey300"
										textAlign="left"
										maxW="100px"
										isTruncated
									>
										Sneakers Sneakers
									</Text>
								</Box>
								<Box>
									<Text fontSize=".8rem" color="brand.grey400">
										&#8358;5,000
									</Text>
								</Box>
							</Flex>

							<Box fontSize=".9rem" fontWeight="500" mt="1rem">
								<Text color="brand.grey300" textAlign="center">
									<Box
										as="span"
										borderRadius="50%"
										border="1px solid#3F3F3F"
										p=".2rem .3rem"
										mr=".5rem"
									>
										45
									</Box>
									-
									<Box
										as="span"
										borderRadius="50%"
										border="1px solid#3F3F3F"
										p=".2rem .3rem"
										ml=".5rem"
									>
										58
									</Box>
								</Text>
							</Box>
						</Box>
					</GridItem>

					<GridItem
						w="100%"
						h="100%"
						bg="brand.white100"
						boxShadow="0px 4px 24px rgba(240, 240, 240, 0.6)"
						borderRadius="10px"
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
						<Image src={ProductImage} width="100%" objectFit="cover" alt="" />

						<Box p="1rem">
							<Flex
								fontSize="1rem"
								fontWeight="500"
								justifyContent="space-between"
							>
								<Box>
									<Text
										color="brand.grey300"
										textAlign="left"
										maxW="100px"
										isTruncated
									>
										Sneakers Sneakers
									</Text>
								</Box>
								<Box>
									<Text fontSize=".8rem" color="brand.grey400">
										&#8358;5,000
									</Text>
								</Box>
							</Flex>

							<Box fontSize=".9rem" fontWeight="500" mt="1rem">
								<Text color="brand.grey300" textAlign="center">
									<Box
										as="span"
										borderRadius="50%"
										border="1px solid#3F3F3F"
										p=".2rem .3rem"
										mr=".5rem"
									>
										45
									</Box>
									-
									<Box
										as="span"
										borderRadius="50%"
										border="1px solid#3F3F3F"
										p=".2rem .3rem"
										ml=".5rem"
									>
										58
									</Box>
								</Text>
							</Box>
						</Box>
					</GridItem>

					<GridItem
						w="100%"
						h="100%"
						bg="brand.white100"
						boxShadow="0px 4px 24px rgba(240, 240, 240, 0.6)"
						borderRadius="10px"
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
						<Image src={ProductImage} width="100%" objectFit="cover" alt="" />

						<Box p="1rem">
							<Flex
								fontSize="1rem"
								fontWeight="500"
								justifyContent="space-between"
							>
								<Box>
									<Text
										color="brand.grey300"
										textAlign="left"
										maxW="100px"
										isTruncated
									>
										Sneakers Sneakers
									</Text>
								</Box>
								<Box>
									<Text fontSize=".8rem" color="brand.grey400">
										&#8358;5,000
									</Text>
								</Box>
							</Flex>

							<Box fontSize=".9rem" fontWeight="500" mt="1rem">
								<Text color="brand.grey300" textAlign="center">
									<Box
										as="span"
										borderRadius="50%"
										border="1px solid#3F3F3F"
										p=".2rem .3rem"
										mr=".5rem"
									>
										45
									</Box>
									-
									<Box
										as="span"
										borderRadius="50%"
										border="1px solid#3F3F3F"
										p=".2rem .3rem"
										ml=".5rem"
									>
										58
									</Box>
								</Text>
							</Box>
						</Box>
					</GridItem>

					<GridItem
						w="100%"
						h="100%"
						bg="brand.white100"
						boxShadow="0px 4px 24px rgba(240, 240, 240, 0.6)"
						borderRadius="10px"
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
						<Image src={ProductImage} width="100%" objectFit="cover" alt="" />

						<Box p="1rem">
							<Flex
								fontSize="1rem"
								fontWeight="500"
								justifyContent="space-between"
							>
								<Box>
									<Text
										color="brand.grey300"
										textAlign="left"
										maxW="100px"
										isTruncated
									>
										Sneakers Sneakers
									</Text>
								</Box>
								<Box>
									<Text fontSize=".8rem" color="brand.grey400">
										&#8358;5,000
									</Text>
								</Box>
							</Flex>

							<Box fontSize=".9rem" fontWeight="500" mt="1rem">
								<Text color="brand.grey300" textAlign="center">
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
				</Grid>

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
