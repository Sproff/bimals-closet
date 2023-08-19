import { Box, Flex, Icon, Stack, Text, useBoolean } from "@chakra-ui/react";
import { BiUserCircle, BiSearch } from "react-icons/bi";
import { TiShoppingCart } from "react-icons/ti";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";
import { AuthModal, CategoriesModal } from "@/components/ui/modals";
import { getLocalStorage } from "@/utils/helpers";
import { MobileNavbar } from "@/components/ui/modals/MobileNavbar";
import { useEffect, useState } from "react";

export const Header = () => {
	const [openDropDown, setOpenDropDown] = useBoolean();
	const [openCatgories, setOpenCatgories] = useBoolean();
	const [active, setActive] = useBoolean();
	const [openModal, setOpenModal] = useBoolean();
	const [name, setName] = useState<string>("");

	useEffect(() => {
		const fullName = getLocalStorage("fullName");
		setName(fullName as string);
	}, []);

	const handleToggle = () => {
		setOpenModal.toggle();
		setActive.toggle();
	};

	return (
		<Box bg="brand.green100" pos="fixed" w="100%" zIndex="99">
			<Box maxW="1280px" mx="auto" p="2rem 0 0 0">
				<Stack
					spacing="0"
					direction={["row"]}
					justifyContent="space-between"
					alignItems="center"
					p="1.5rem 3rem"
					color="brand.white100"
				>
					<Box>
						<Text fontWeight="700" fontSize={["1.5rem", "2rem"]}>
							Bimal&apos;s Closet
						</Text>
					</Box>

					<Flex
						onClick={handleToggle}
						display={["block", "none", "none", "none"]}
						cursor="pointer"
					>
						<Box
							as="span"
							w="2.5rem"
							h=".3rem"
							bg="brand.white100"
							transition="all 0.3s ease-in-out"
							borderRadius="12rem"
							display="block"
							_odd={{
								transform: active ? "translateY(0.375rem) rotate(45deg)" : "",
							}}
						/>
						<Box
							as="span"
							w="1.25rem"
							h=".3rem"
							bg="brand.white100"
							borderRadius="12rem"
							my={active ? "0" : ".5rem"}
							ml="1.25rem"
							opacity={active ? 0 : 1}
							display="block"
						/>
						<Box
							as="span"
							w="2.5rem"
							h=".3rem"
							bg="brand.white100"
							transition="all 0.3s ease-in-out"
							borderRadius="12rem"
							display="block"
							_odd={{
								transform: active
									? "translateY(-0.2125rem) rotate(-45deg)"
									: "",
							}}
						/>
					</Flex>

					<Box display={["none", "flex"]}>
						<Stack
							spacing="1rem"
							direction={["row"]}
							alignItems="center"
							fontSize="2rem"
							fontWeight="500"
						>
							<Icon cursor="pointer" as={BiSearch} />
							<Icon cursor="pointer" as={TiShoppingCart} />
							<Flex
								onClick={setOpenDropDown.toggle}
								alignItems="center"
								cursor="pointer"
							>
								<BiUserCircle />
								<Flex align="center">
									{name ? (
										<Text ml=".2rem" fontSize="1.5rem">
											{name}
										</Text>
									) : (
										<Text ml=".2rem" fontSize="1.5rem">
											Guest
										</Text>
									)}

									<Box fontSize="1.5rem" pos="relative">
										{openDropDown ? <MdArrowDropUp /> : <MdArrowDropDown />}
									</Box>
								</Flex>
							</Flex>
						</Stack>
					</Box>
				</Stack>
				{openDropDown && <AuthModal />}
			</Box>

			<Box bg="brand.white100">
				<Box
					maxW="1280px"
					mx="auto"
					py="1.5rem"
					pl={["0rem", "3rem"]}
					alignItems={["left", "center"]}
					flexDir={["column", "column"]}
				>
					<Flex
						onClick={setOpenCatgories.toggle}
						align="center"
						color="brand.green100"
						cursor="pointer"
						w="max-content"
					>
						<Text ml=".2rem" fontSize="1.5rem">
							Categories
						</Text>

						<Icon
							fontSize="1.5rem"
							color="brand.green100"
							_groupHover={{
								color: "brand.white100",
							}}
							as={openCatgories ? MdArrowDropUp : MdArrowDropDown}
						/>
					</Flex>
				</Box>

				{openModal ? <MobileNavbar /> : null}
				{openCatgories && <CategoriesModal />}
			</Box>
		</Box>
	);
};
