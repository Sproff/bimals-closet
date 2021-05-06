import React from "react"
import {
  Box,
  Stack,
  InputGroup, 
  InputLeftElement, 
  Input, 
} from "@chakra-ui/react"
import { BsSearch } from "react-icons/bs";

export const SearchInput = () => {
  return (
    <Stack spacing={4}>
      <InputGroup bg="#fafafa" borderRadius="10px">
        <InputLeftElement
          pointerEvents="none"
        >
          <Box fontSize={["1rem", "1.1rem", "1.1rem", "1.2rem"]}>
            <BsSearch color="#777" />
          </Box>
        </InputLeftElement>
        <Input
          type="search"
          placeholder="Search product"
          border="none"
          focusBorderColor="none"
          fontSize={["1rem", "1.1rem", "1.1rem", "1.1rem"]}
        />
      </InputGroup>
    </Stack>
  )
}