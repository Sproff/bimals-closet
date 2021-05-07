import React, { useEffect, useState } from "react";
import {
	Box,
	Stack,
	InputGroup,
	InputLeftElement,
	Input,
} from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import instance from "../../queries/axios.config";

export const SearchInput = () => {
	const [search, setSearch] = useState("");
	const [products, setProducts] = useState([]);

	useEffect(() => {
		const getAllProducts = async () => {
			try {
				const { data } = await instance.get("/products");
				const result = data.data.products;
				console.log(result);
				setProducts(result);
				setSearch(result);
			} catch (err) {
				console.log(err);
			}

			const filteredResult = products.filter((product) => {
				return product.name.toLowerCase().includes(search);
			});
			// console.log(filteredResult);
			setSearch(filteredResult);
		};
		getAllProducts();
	}, []);

	return (
		<Stack spacing={4}>
			<InputGroup bg="#fafafa" borderRadius="10px" mt="4rem">
				<InputLeftElement pointerEvents="none">
					<Box fontSize={["1rem", "1.1rem", "1.1rem", "1.2rem"]}>
						<BsSearch color="#777" />
					</Box>
				</InputLeftElement>
				<Input
					onChange={(e) => {
						setSearch(e.target.value.toLowerCase());
						console.log("clicked");
					}}
					type="search"
					placeholder="Search product"
					border="none"
					focusBorderColor="none"
					fontSize={["1rem", "1.1rem", "1.1rem", "1.1rem"]}
				/>
			</InputGroup>
		</Stack>
	);
};
