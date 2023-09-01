import {
	Box,
	Circle,
	Flex,
	Icon,
	Stack,
	Text,
	useBoolean,
} from "@chakra-ui/react";
import { BiUserCircle, BiSearch } from "react-icons/bi";
import { TiShoppingCart } from "react-icons/ti";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";
import { AuthModal, CategoriesModal } from "@/components/ui/modals";
import { getLocalStorage } from "@/utils/helpers";
import { MobileNavbar } from "@/components/ui/modals/MobileNavbar";
import { useEffect, useState } from "react";
import Link from "next/link";
import {
	useHydratedCartState,
	useHydratedStoreState,
} from "@/hooks/state/hydrated";
import { useStoreState } from "@/hooks/state/storage";
import { useRouter } from "next/router";

export const Header = ({
	subHeaderName,
}: {
	subHeaderName: string | undefined;
}) => {
	const [openDropDown, setOpenDropDown] = useBoolean();
	const [openCatgories, setOpenCatgories] = useBoolean();
	const [active, setActive] = useBoolean();
	const [openModal, setOpenModal] = useBoolean();
	const [name, setName] = useState<string>("");
	const cart = useHydratedCartState("cart");
	const token = useHydratedStoreState("token");
	const { removeToken } = useStoreState((state) => state);
	const router = useRouter();

	const handleToggle = () => {
		setOpenModal.toggle();
		setActive.toggle();
	};

	const handleLogout = () => {
		removeToken();

		router.push("/auth/login");
	};

	useEffect(() => {
		const fullName = getLocalStorage("fullName");

		setName(fullName as string);
	}, []);

	console.log("subHeaderName", subHeaderName);

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
						<Link href="/">
							<Text fontWeight="700" fontSize={["1.8rem", "2.5rem"]}>
								Bimal&apos;s Closet
							</Text>
						</Link>
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
							spacing="2rem"
							direction={["row"]}
							alignItems="center"
							fontSize="2rem"
							fontWeight="500"
						>
							<Box>
								<Icon cursor="pointer" as={BiSearch} />
							</Box>

							<Link href="/cart">
								<Box as="span" pos="relative">
									<Circle
										bg="brand.gold100"
										p=".3rem .6rem"
										pos="absolute"
										left="1.1rem"
										top="-.7rem"
										fontSize=".9rem"
										fontWeight="600"
									>
										{cart?.length}
									</Circle>
									<Icon cursor="pointer" as={TiShoppingCart} />
								</Box>
							</Link>

							<Flex
								onClick={setOpenDropDown.toggle}
								alignItems="center"
								cursor="pointer"
							>
								<Box>
									<Icon cursor="pointer" as={BiUserCircle} />
								</Box>
								<Flex align="center">
									<Box mt="-.5rem">
										{name ? (
											<Text ml=".2rem" fontSize="1.5rem">
												{name}
											</Text>
										) : (
											<Text ml=".2rem" fontSize="1.5rem">
												Guest
											</Text>
										)}
									</Box>

									<Box fontSize="1.5rem" pos="relative">
										{openDropDown ? <MdArrowDropUp /> : <MdArrowDropDown />}
									</Box>
								</Flex>
							</Flex>
						</Stack>
					</Box>
				</Stack>
				{openDropDown && <AuthModal {...{ handleLogout, token }} />}
			</Box>

			<Box bg="brand.white100" shadow="xs">
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
						<Text
							ml={["3rem", ".2rem"]}
							fontSize="1.5rem"
							color="brand.grey300"
							fontWeight="600"
						>
							{subHeaderName}
						</Text>
						{subHeaderName === "Categories" && (
							<Icon
								fontSize="1.5rem"
								color="brand.green100"
								_groupHover={{
									color: "brand.white100",
								}}
								as={openCatgories ? MdArrowDropUp : MdArrowDropDown}
							/>
						)}
					</Flex>
				</Box>

				{openModal ? <MobileNavbar {...{ handleLogout, token }} /> : null}
				{openCatgories && subHeaderName === "Categories" ? (
					<CategoriesModal />
				) : null}
			</Box>
		</Box>
	);
};
