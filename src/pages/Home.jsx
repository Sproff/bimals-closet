import React from "react";
import { Box, Button, Container, Divider, Text } from "@chakra-ui/react";
import { Header } from "../layouts/Header";
import { SearchInput } from "../components/common/SearchInput";
import { Banner } from "../components/home/Banner";
import { Products } from "../components/home/Products";
import { Tags } from "../components/home/Tags";
import { Footer } from "../layouts/Footer";

export const Home = () => {
	let fullName = JSON.parse(localStorage.getItem("data"))?.fullname;

	return (
		<Box>
			<Header />
			<Container maxW="container.xl">
				<Box my="1rem">
					{fullName ? (
						<h2>Welcome back, <b>{fullName}!</b></h2>
					) : (
						<h2>Welcome to Bimal&apos;s Closet</h2>
					)}
				</Box>
				<SearchInput />
				<Banner />
				<Tags />
				<Products />

				<Box textAlign="center" mt="3rem">
					<Text
						fontSize={["1.3rem", "1.5rem", "2rem", "2rem"]}
						fontWeight="700"
						textAlign="center"
					>
						Clearance Sales Up to 80% Off.
						<br />
						All Sales are Final!
					</Text>
					<Text color="gray.500" textAlign="center">
						Last chance to take advantage of our discounts!
					</Text>
					<Button
						bg="#000"
						color="#fff"
						borderRadius="10px"
						mt="1rem"
						_hover={{ background: "#000", opacity: "0.8" }}
						_focus={{ boxShadow: "none" }}
					>
						Discover Sales
					</Button>
				</Box>

				<Divider color="gray.600" mt="4rem" />

				<Footer />
			</Container>
		</Box>
	);
};
