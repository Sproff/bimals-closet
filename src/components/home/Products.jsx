import {
	Box,
	Flex,
	SimpleGrid,
	HStack,
	Spacer,
	Spinner,
	Text,
} from "@chakra-ui/react";

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { BsHeartFill } from "react-icons/bs";
import { RiStarSFill } from "react-icons/ri";
import instance from "../../queries/axios.config";

export const Products = () => {
	const [products, setProducts] = useState([]);
	const [loader, setLoader] = useState(true);

	useEffect(() => {
		const getAllProducts = async () => {
			try {
				const { data } = await instance.get("/products");
				setProducts(data.data.products);
				setLoader(false);
			} catch (err) {
				console.log(err);
			}
		};
		getAllProducts();
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
		<SimpleGrid columns={["2", "2", "3", "5"]} mt="2rem" spacing="20px">
			{products.map((product) => (
				<Link to={`product/${product.slug}`} key={product.slug}>
					<Box
						bg="#fff"
						height="100%"
						borderRadius="10px"
						overflow="hidden"
						position="relative"
						boxShadow="sm"
					>
						<img src={product.image} />
						<Box pos="absolute" top="0" right="0" m="1rem">
							<BsHeartFill color="red" />
						</Box>
						<Box p=".5rem">
							<HStack>
								<Text fontWeight="500" fontSize="1rem">
									{product.name}
								</Text>
								<Spacer />
								<Text color="gray.500" fontSize=".9rem">
									${product.price}
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
				</Link>
			))}
		</SimpleGrid>
	);
};
