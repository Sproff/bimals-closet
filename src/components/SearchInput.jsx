import React, { useState } from "react";
import {
	Box,
	InputGroup,
	InputRightElement,
	Input,
	Stack,
} from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import { BsSearch } from "react-icons/bs";

export const SearchInput = () => {
	const [search, setSearch] = useState("");
	const history = useHistory();

	return (
		<Stack spacing={4}>
			<InputGroup bg="#fafafa" borderRadius="10px" mt="4rem">
				<Input
					onChange={(e) => {
						setSearch(e.target.value);
					}}
					type="search"
					placeholder="Search product"
					border="none"
					focusBorderColor="none"
					fontSize={["1rem", "1.1rem", "1.1rem", "1.1rem"]}
				/>
				<InputRightElement cursor="pointer">
					<Box fontSize={["1rem", "1.1rem", "1.1rem", "1.2rem"]}>
						<BsSearch
							onClick={() => history.push(`/search?query=${search}`)}
							color="#777"
						/>
					</Box>
				</InputRightElement>
			</InputGroup>
		</Stack>
	);
};
