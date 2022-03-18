import React, { useContext, useState } from "react";
import {
	Box,
	Button,
	Container,
	Text,
	// Table,
	// Thead,
	// Tbody,
	// Tfoot,
	// Tr,
	// Th,
	// Td,
	// TableCaption,
	HStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

import { Header } from "../layouts/Header";
import { Footer } from "../layouts/Footer";

import { toast } from "react-toastify";
import { AuthContext, LOGOUT } from "../contexts/auth";

export const Profile = () => {
	const [loading, setLoading] = useState(false);
	const { authState, dispatch } = useContext(AuthContext);

	const logout = async () => {
		try {
			setLoading(true);
			dispatch({ type: LOGOUT, payload: null });
			setLoading(false);
			toast.success("Logout Sucesssful");
			localStorage.removeItem("data");
			window.location.replace("/login");
		} catch (error) {
			setLoading(false);
			toast.error("Logout Failed");
		}
	};

	return (
		<Box>
			<Header />
			<Container maxW="container.xl">
				<Box>
					<Text my="1rem"  fontSize="1.5rem" fontWeight="700">
						Profile Settings
					</Text>
					{authState !== "" ? (
						<Button
							type="submit"
							bg="#000"
							color="#fff"
							borderRadius="10px"
							mt="1rem"
							cursor="pointer"
							boxShadow="none"
							_hover={{ background: "#000", opacity: "0.8" }}
							_focus={{ boxShadow: "none" }}
							isLoading={loading}
							onClick={logout}
						>
							Log Out
						</Button>
					) : (
						<Link to="/login">
							<Button
								type="submit"
								bg="#000"
								color="#fff"
								borderRadius="10px"
								mt="1rem"
								cursor="pointer"
								boxShadow="none"
								_hover={{ background: "#000", opacity: "0.8" }}
								_focus={{ boxShadow: "none" }}
								isLoading={loading}
							>
								Log In
							</Button>
						</Link>
					)}
				</Box>
				<HStack justifyContent="space-between" mt="2rem" mb="1rem">
					<Text fontSize="1.3rem" fontWeight="600">Your Order History</Text>
					<Button
            bg="#000"
            opacity="0.6"
						fontSize={["1rem", "1rem", "1rem", "1rem"]}
						color="#fff"
						borderRadius="10px"
						px="2rem"
						_hover={{ background: "#000", opacity: "1" }}
						_focus={{ boxShadow: "none" }}
					>
						Print
					</Button>
        </HStack>

        <hr />

				{/* <Table variant="simple" my="1rem">
					{/* <TableCaption>Imperial to metric conversion factors</TableCaption> *}
					<Thead>
						<Tr>
							<Th>Item Name</Th>
							<Th>Quantity</Th>
							<Th>Date</Th>
							<Th>Price</Th>
						</Tr>
					</Thead>
					<Tbody>
						<Tr>
							<Td>inches</Td>
							<Td>millimetres (mm)</Td>
							<Td>25.4</Td>
							<Td>25.4</Td>
						</Tr>
						<Tr>
							<Td>feet</Td>
							<Td>centimetres (cm)</Td>
							<Td>30.48</Td>
							<Td>30.48</Td>
						</Tr>
						<Tr>
							<Td>yards</Td>
							<Td>metres (m)</Td>
							<Td>0.91444</Td>
							<Td>0.91444</Td>
						</Tr>
					</Tbody>
					<Tfoot>
						<Tr>
						</Tr>
					</Tfoot>
				</Table> */}

        <hr />

				<Footer />
			</Container>
		</Box>
	);
};
