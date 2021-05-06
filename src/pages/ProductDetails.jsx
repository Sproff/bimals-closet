import { Image } from "@chakra-ui/image"
import { Box, Button, Container, Text } from "@chakra-ui/react"

import React from "react"
import { Link, useParams } from "react-router-dom"

// import slug from "../components/home/Products"


import { Footer } from "../layouts/Footer"
import { Header } from "../layouts/Header"
import ProductImage from "../assets/images/pr6.jpg"

export const ProductDetails = () => {
  const { slug } = useParams()
  console.log(slug);

  return (
    <Container maxW="container.xl">
      <Header />

      <Container my="4rem">
        <Box>
          <Box>
            <Image
              boxSize="100px"
              objectFit="cover"
              w="100%"
              h="250px"
              src={ProductImage}
              alt="Banner Image"
              backgroundSize= "cover"
              backgroundPosition="center"
            />
        </Box>

          <Box>
            <Text>Lorem</Text>
            <Text>Lorem</Text>
          </Box>
          <Box w="100%">
            <Link to="/cart">
              <Button bg="#000" color="#fff" borderRadius="10px" mt="1rem">Add to Cart</Button>
            </Link>
          </Box>
        </Box>
      </Container>

      <Footer />
    </Container>
  )
}