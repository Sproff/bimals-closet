import { useState } from "react";
import { Box, Container, Flex, Stack, Text } from "@chakra-ui/react";
import { BiUserCircle, BiSearch } from "react-icons/bi";
import { TiShoppingCart } from "react-icons/ti";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";
import { AuthModal } from "../components/modals/AuthModal";
import { CategoriesModal } from "../components/modals/CategoriesModal";

export const Header = () => {
	const [openDropDown, setOpenDropDown] = useState(false);
	const [openCatgories, setOpenCatgories] = useState(false);

	const fullName = JSON.parse(localStorage.getItem("data")!);

	const controlDropDown = () => {
		setOpenDropDown((toggle) => !toggle);
	};

	const controlCatgories = () => {
		setOpenCatgories((toggle) => !toggle);
	};

	return (
		<Box bg="brand.green100">
			<Container maxW="1024px" p="0" position="relative">
				<Stack
					spacing="0"
					direction={["row"]}
					justifyContent="space-between"
					alignItems="center"
					p="1.5rem 3rem"
					color="brand.white100"
				>
					<Box>
						<Text fontWeight="700">Bimal&apos;s Closet</Text>
					</Box>

					<Box>
						<Stack
							spacing="1rem"
							direction={["row"]}
							alignItems="center"
							fontSize="1.4rem"
							fontWeight="500"
						>
							<Box cursor="pointer">
								<BiSearch />
							</Box>
							<Box cursor="pointer">
								<TiShoppingCart />
							</Box>
							<Flex
								onClick={controlDropDown}
								alignItems="center"
								cursor="pointer"
								// className={openDropDown ? "show" : ""}
							>
								<BiUserCircle />
								<Box display="flex" alignItems="center">
									{fullName ? (
										<Text ml=".2rem" fontSize=".9rem">
											{fullName}
										</Text>
									) : (
										<Text ml=".2rem" fontSize=".9rem">
											Guest
										</Text>
									)}

									<Box fontSize="1.5rem">
										{openDropDown ? <MdArrowDropUp /> : <MdArrowDropDown />}
									</Box>
								</Box>
							</Flex>
						</Stack>
					</Box>
				</Stack>
				{openDropDown ? <AuthModal openDropDown={openDropDown} /> : null}

				<Box position="relative">
					<Flex alignItems="center" bg="brand.white100" px="3rem" h="8vh">
						<Flex
							onClick={controlCatgories}
							cursor="pointer"
							alignItems="center"
							justifyContent="space-between"
							w="15%"
						>
							<Box display="flex" alignItems="center" color="brand.green100">
								<Text ml=".2rem" fontSize=".9rem">
									Categories
								</Text>
								<Box fontSize="1.5rem">
									{openCatgories ? <MdArrowDropUp /> : <MdArrowDropDown />}
								</Box>
							</Box>
						</Flex>

						<Text fontSize=".8rem" color="brand.green100" m="auto">
							NEW! Free shipping with no order min. Restrictions apply.
						</Text>
					</Flex>
					{openCatgories ? <CategoriesModal /> : null}
				</Box>
			</Container>
		</Box>
	);
};
