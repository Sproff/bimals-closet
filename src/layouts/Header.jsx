import React from "react";
import { Link } from "react-router-dom"

import { Box, HStack, Text, Spacer } from "@chakra-ui/layout";
import { FaRegUserCircle } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";

export const Header = () => {
	return (
		<Box>
			<HStack h="50px" alignItems="center">
        <Box w="50%" fontSize={["1.5rem", "1.5rem", "2rem", "2rem"]} cursor="pointer">
          <Link to="/profile">
            <FaRegUserCircle fontSize="1.5rem" />
          </Link>
				</Box>
				<Spacer />
				<Box w="100%">
          <Link to="/">
            <Text
              textAlign="center"
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
					w="50%"
					display="flex"
					justifyContent="flex-end"
					fontSize={["1.5rem", "1.5rem", "2rem", "2rem"]}
          cursor="pointer"
				>
          <Link to="/cart">
            <TiShoppingCart />
          </Link>
				</Box>
			</HStack>
		</Box>
	);
};
