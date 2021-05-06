import { Box, HStack, Image, Link, Stack, VStack, Text } from "@chakra-ui/react"
import React from "react"

import Paystack from "./../assets/icons/paystack-logo-vector.svg"

export const Footer = () => {
  return (
    <Box>
      <Stack direction={["column", "column", "row", "row"]} mt="2rem">
        <Box w="100%">
          <VStack alignItems="flex-start" color="gray.500" mt="2rem">
            <Link fontSize={[".91rem", ".91rem", "1rem", "1rem"]}>Women</Link>
            <Link fontSize={[".91rem", ".91rem", "1rem", "1rem"]}>Men</Link>
            <Link fontSize={[".91rem", ".91rem", "1rem", "1rem"]}>Accesories</Link>
          </VStack>
        </Box>

        <Box w="100%">
          <VStack alignItems="flex-start" color="gray.500" mt="2rem">
            <Link fontSize={[".91rem", ".91rem", "1rem", "1rem"]}>About Us</Link>
            <Link fontSize={[".91rem", ".91rem", "1rem", "1rem"]}>Community</Link>
            <Link fontSize={[".91rem", ".91rem", "1rem", "1rem"]}>Location</Link>
          </VStack>
        </Box>

        <Box w="100%">
          <VStack alignItems="flex-start" color="gray.500" mt="2rem">
            <Link fontSize={[".9rem", ".9rem", "1rem", "1rem"]}>Contact Us</Link>
            <Link fontSize={[".9rem", ".9rem", "1rem", "1rem"]}>FAQs</Link>
            <Link fontSize={[".9rem", ".9rem", "1rem", "1rem"]}>Order</Link>
          </VStack>
        </Box>
      </Stack>

      <HStack m="6rem 0 4rem 0">
      <Box w="100%">
        <Text color="gray.500">
          Copyright 2021 | Bimal&apos;s Closet
        </Text>
      </Box>

      <Box w="auto" boxShadow="sm">
        <Image
          objectFit="cover"
          w="250px"
          h="100px"
          src={Paystack}
          alt="Paystack Image"
        />
      </Box>
      </HStack>
    </Box>
  )
}
