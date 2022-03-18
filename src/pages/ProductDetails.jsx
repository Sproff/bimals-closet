import { Image } from "@chakra-ui/image";
import {
	Box,
	Button,
	Container,
	HStack,
	Spinner,
	Text,
} from "@chakra-ui/react";

import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";

import { Footer } from "../layouts/Footer";
import { Header } from "../layouts/Header";
import instance from "../queries/axios.config";
import { StoreContext } from "../contexts/StoreContext";
import { updateCart } from "../services/cart";

export const ProductDetails = () => {
	const [product, setProduct] = useState({});
	const [loader, setLoader] = useState(true);
	const [error, setError] = useState(false);
	const [cart, setCart] = useContext(StoreContext);

	const { slug } = useParams();

	useEffect(() => {
		const getParticularProduct = async () => {
			try {
				const { data } = await instance.get(`/product/${slug}`);
				setProduct(data.data.product);
				setLoader(false);
			} catch (error) {
				console.log(error);
				setError(error.response?.data?.message);
				setLoader(false);
			}
		};
		getParticularProduct();
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

	const addToCart = () => {
		const data = updateCart(cart, product, 1);
		setCart(data);
		toast.success("Product has been added successfully.");
	};

	return (
		<Box>
			<Header />
			<Container maxW="container.xl" my="4rem">
				{!error ? (
					<Box mx={["1rem", "1rem", "4rem", "8rem"]}>
						<Box>
							<Image
								boxSize="100px"
								objectFit="cover"
								w="100%"
								h="300px"
								src={product.image}
								alt="Banner Image"
								backgroundSize="cover"
								backgroundPosition="center"
							/>
						</Box>

						<Box>
							<HStack>
								<Text fontSize="1.2rem" fontWeight="600">
									{product.name}
								</Text>
								<Text color="gray.500" fontSize=".9rem">
									${product.price}
								</Text>
							</HStack>
							<Text>{product.desc}</Text>
						</Box>
						<Box w="100%">
							<Link onClick={() => addToCart()}>
								<Button
									bg="#000"
									color="#fff"
									borderRadius="10px"
									mt="1rem"
									_hover={{ background: "#000", opacity: "0.8" }}
									_focus={{ boxShadow: "none" }}
								>
									Add to Cart
								</Button>
							</Link>
						</Box>
					</Box>
				) : (
					error
				)}
				<Footer />
			</Container>
		</Box>
	);
};
