import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { Box, Button, HStack, Text, Spacer, Tag } from "@chakra-ui/react";
import { FaRegUserCircle } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import { StoreContext } from "../contexts/StoreContext";
import { AuthContext } from "../contexts/auth";

export const Header = () => {
	const [cartData] = useContext(StoreContext);
	const { authState } = useContext(AuthContext);

	return (
		<Box>
			<HStack
				px="1rem"
				h="50px"
				alignItems="center"
				position="fixed"
				top="0"
				w="100%"
				bgColor="#fff"
				zIndex="99"
				borderBottom="1px solid rgba(0, 0, 0, 0.2)"
			>
				<Box
					display={["none", "none", "flex", "flex"]}
					fontSize={["1.5rem", "1.5rem", "2rem", "2rem"]}
					cursor="pointer"
				>
					{authState !== "" ? (
						<Link to="/profile">
							<FaRegUserCircle fontSize="1.5rem" />
						</Link>
					) : (
						""
					)}
				</Box>
				<Spacer />
				<Box w="100%">
					<Link to="/">
						<Text
							textAlign={
								authState !== ""
									? "center"
									: ["center", "center", "left", "left"]
							}
							fontSize={["1.2rem", "1.2rem", "1.3rem", "1.5rem"]}
							fontWeight="700"
							cursor="pointer"
						>
							BIMAL&apos;S CLOSET
						</Text>
					</Link>
				</Box>
				<Spacer />
				<Box
					display={["none", "none", "flex", "flex"]}
					justifyContent="flex-end"
				>
					{authState !== "" ? (
						""
					) : (
						<Link to="/login">
							<Button
								bg="#000"
								fontSize={["1rem", "1rem", "1rem", "1rem"]}
								color="#fff"
								borderRadius="10px"
								px="2rem"
								_hover={{ background: "#000", opacity: "0.8" }}
								_focus={{ boxShadow: "none" }}
							>
								Log In
							</Button>
						</Link>
					)}
				</Box>
				<Box
					display={["none", "none", "flex", "flex"]}
					justifyContent="flex-end"
					fontSize={["1.5rem", "1.5rem", "2rem", "2rem"]}
					cursor="pointer"
				>
					<Link to="/cart">
						<Tag
							bg="#000"
							color="#fff"
							position="absolute"
							right="10px"
							borderRadius="50%"
							fontSize=".6rem"
							p=".1rem .3rem"
							minHeight="0"
							minWidth="0"
						>
							{cartData.length}
						</Tag>
						<TiShoppingCart />
					</Link>
				</Box>
			</HStack>

			<HStack
				position="fixed"
				bottom="0"
				display={["flex", "flex", "none", "none"]}
				px="1rem"
				h="50px"
				alignItems="center"
				w="100%"
				bgColor="#fafafa"
				zIndex="9999"
				borderBottom="1px solid rgba(0, 0, 0, 0.2)"
			>
				<Box fontSize={["1.5rem", "1.5rem", "2rem", "2rem"]} cursor="pointer">
					{authState !== "" ? (
						<Link to="/profile">
							<FaRegUserCircle fontSize="1.5rem" />
						</Link>
					) : (
						<Link to="/login">
							<Button
								bg="#000"
								fontSize={["1rem", "1rem", "1rem", "1rem"]}
								color="#fff"
								borderRadius="10px"
								px="4rem"
								_hover={{ background: "#000", opacity: "0.8" }}
								_focus={{ boxShadow: "none" }}
							>
								Log In
							</Button>
						</Link>
					)}
				</Box>
				<Spacer />
				<Box
					display="flex"
					justifyContent="flex-end"
					fontSize={["1.5rem", "1.5rem", "2rem", "2rem"]}
					cursor="pointer"
				>
					<Link to="/cart">
						<Tag
							bg="#000"
							color="#fff"
							position="absolute"
							right="10px"
							borderRadius="50%"
							fontSize=".6rem"
							p=".1rem .3rem"
							minHeight="0"
							minWidth="0"
						>
							{cartData.length}
						</Tag>
						<TiShoppingCart />
					</Link>
				</Box>
			</HStack>
		</Box>
	);
};
