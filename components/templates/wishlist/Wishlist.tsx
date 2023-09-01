import { RectangularCardLoader } from "@/components/animations/CustomLoader";
import { CustomButton } from "@/components/ui/buttons/CustomButton";
import { useGetMyFavorites } from "@/hooks/favorite/useFavorite";
import { useToggleFavorite } from "@/hooks/favorite/useToggleFavorite";
import { useHydratedStoreState } from "@/hooks/state/hydrated";
import { Product } from "@/types/product";
import {
	Box,
	Center,
	Circle,
	Flex,
	Icon,
	Img,
	Stack,
	Text,
} from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment } from "react";
import { BiChevronLeft } from "react-icons/bi";
import { FaGhost } from "react-icons/fa";
import { GoHeart, GoHeartFill } from "react-icons/go";
import { MdOutlineDisabledByDefault } from "react-icons/md";

const Wishlist = () => {
	const router = useRouter();
	const token = useHydratedStoreState("token");
	const { data: wishlistData, isLoading: isLoadingWishlistData } =
		useGetMyFavorites();

	const mapProducts = wishlistData?.map((item: Product) => {
		const res = {
			...item,
		};
		return res;
	});

	const { toggleProductChecked } = useToggleFavorite(mapProducts);

	return (
		<Box pt="15rem" pb="5rem">
			<Box maxW="880px" mx="auto" px="3rem">
				<Box as="span" mb="2rem" onClick={() => router.back()}>
					<Icon as={BiChevronLeft} fontSize="3rem" cursor="pointer" />
				</Box>

				{token ? (
					<Fragment>
						{wishlistData?.length == 0 && (
							<Center flexDir="column" h="42vh">
								<Icon
									as={FaGhost}
									fontSize="10rem"
									color="brand.green100"
									opacity="0.4"
								/>
								<Text mt="1rem" fontWeight="300" textAlign="center">
									Empty wishlist? Start adding items now!
								</Text>
							</Center>
						)}
					</Fragment>
				) : (
					<Center flexDir="column" h="42vh">
						<Icon
							as={MdOutlineDisabledByDefault}
							fontSize="10rem"
							color="brand.green100"
							opacity="0.4"
						/>
						<Text mt="1rem" fontWeight="300" textAlign="center">
							This functionality is exclusively available to our logged-in
							users. Sign in to your account to unlock the full potential of our
							platform and enjoy a seamless shopping experience.
						</Text>
						<Link href="/auth/login">
							<Box w="100%">
								<CustomButton
									{...{
										text: "Login",
										py: ["2rem", "2rem"],
										px: "4rem",
										border: ".2rem solid",
										borderColor: "transparent",
									}}
								/>
							</Box>
						</Link>
					</Center>
				)}

				{token ? (
					<Fragment>
						{isLoadingWishlistData ? (
							<Fragment>
								{Array(3)
									.fill(0)
									.map((_, idx) => (
										<RectangularCardLoader
											key={idx}
											rounded=".6rem"
											h="160px"
											mt="1rem"
										/>
									))}
							</Fragment>
						) : (
							<Fragment>
								{wishlistData?.map((product: Product) => (
									<Flex
										key={product?._id}
										bg="brand.grey700"
										borderRadius="1rem"
										p="1rem"
										justify="space-between"
										mb="2rem"
									>
										<Flex w="100%">
											<Link href={`/product/${product?.slug}`}>
												<Box overflow="hidden" borderRadius="1rem">
													<Img
														width="140px"
														height="140px"
														src={product?.image[0]}
														alt="Product Image"
													/>
												</Box>
											</Link>

											<Flex w="100%" justify="space-between" pos="relative">
												<Stack
													w={["100%", "30%"]}
													ml="2rem"
													flexDir="column"
													spacing="1.2rem"
												>
													<Link href={`/product/${product?.slug}`}>
														<Text
															fontSize="1.8rem"
															fontWeight="300"
															color="brand.grey300"
														>
															{product?.name}
														</Text>
													</Link>

													<Flex align="center">
														<Text
															fontSize="1.7rem"
															fontWeight="600"
															color="brand.grey300"
														>
															₦{product?.price?.toFixed(2)}{" "}
														</Text>
													</Flex>

													<Box
														w="100%"
														onClick={() => toggleProductChecked(product?._id)}
													>
														<CustomButton
															{...{
																text: "Remove from wishlist",
																py: ["2rem", "2rem"],
																bg: "transparent",
																color: "brand.green300",
																boxShadow: "0",
																border: ".2rem solid",
																borderColor: "brand.green300",
																fontSize: ["1.3rem", "1.5rem"],
																bgHover: "brand.white300",
															}}
														/>
													</Box>
												</Stack>

												<Circle
													bg="brand.white100"
													p=".5rem"
													pos="absolute"
													right="0"
													top=".1rem"
												>
													<Icon
														color={`${
															product?.isFavorite
																? "brand.red100"
																: "brand.grey400"
														}`}
														fontSize="1.5rem"
														as={product?.isFavorite ? GoHeartFill : GoHeart}
													/>
												</Circle>
											</Flex>
										</Flex>
									</Flex>
								))}
							</Fragment>
						)}
					</Fragment>
				) : null}
			</Box>
		</Box>
	);
};

export { Wishlist };
