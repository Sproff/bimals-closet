import React, { useEffect, useState } from "react";
import {
	Box,
	Container,
	Flex,
	HStack,
	Spacer,
	Spinner,
	Text,
} from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import instance from "../queries/axios.config";

import { Footer } from "../layouts/Footer";
import { Header } from "../layouts/Header";

import { BsHeartFill } from "react-icons/bs";
import { RiStarSFill } from "react-icons/ri";

export const SearchResults = () => {
	const [searchResults, setSearchResults] = useState([]);
	const [loader, setLoader] = useState(true);
	const [error, setError] = useState(false);

	const location = useLocation();
	const query = new URLSearchParams(location.search).get("query");

	useEffect(() => {
		const searchProduct = async () => {
			try {
				const { data } = await instance.get(`/products/search?q=${query}`);
				console.log(data);
				setSearchResults(data.products);
				setLoader(false);
			} catch (error) {
				setError(error.response?.data?.message);
				setLoader(false);
			}
		};
		searchProduct();
	}, []);

	if (loader) {
		return (
			<Spinner
				thickness="4px"
				speed="0.65s"
				mt="2rem"
				borderColor="#000"
				size="md"
			/>
		);
	}

	return (
		<Box>
			<Header />
			<Container maxW="container.xl" my="4rem">
				{!error ? (
					<Box>
						{searchResults.map((searchResult) => (
							<Box
								bg="#fff"
								height="100%"
								borderRadius="10px"
								overflow="hidden"
								position="relative"
								boxShadow="sm"
								width="300px"
								margin="2rem auto"
								key={searchResult._id}
							>
								<img src={searchResult.image} />
								<Box pos="absolute" top="0" right="0" m="1rem">
									<BsHeartFill color="red" />
								</Box>
								<Box p=".5rem">
									<HStack>
										<Text fontWeight="500" fontSize="1rem">
											{searchResult.name}
										</Text>
										<Spacer />
										<Text color="gray.500" fontSize=".9rem">
											${searchResult.price}
										</Text>
									</HStack>
									<Flex>
										<RiStarSFill color="goldenrod" />
										<RiStarSFill color="goldenrod" />
										<RiStarSFill color="goldenrod" />
										<RiStarSFill color="goldenrod" />
										<RiStarSFill color="goldenrod" />
									</Flex>
								</Box>
							</Box>
						))}
					</Box>
				) : (
					error
				)}
				<Footer />
			</Container>
		</Box>
	);
};
