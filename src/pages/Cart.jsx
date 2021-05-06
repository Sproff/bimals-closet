import React, { useContext } from "react"
import { Header } from "../layouts/Header"
import { Footer } from "../layouts/Footer"

import { Box, Button, Container, Divider, HStack, Image, Text } from "@chakra-ui/react";
import Product6 from "../assets/images/pr6.jpg"

import { MdAddBox } from "react-icons/md";
import { FaMinus } from "react-icons/fa";
import { RiDeleteBin6Fill } from "react-icons/ri";

import { StoreContext } from "../contexts/StoreContext"
import { updateCart, totalProductsPrice } from "../services/cart"


export const Cart = () => {
  const [cart, setCart] = useContext(StoreContext)
  return (  
    <Container maxW="container.xl">
      <Header />

      <Text as="h3" my="4rem" fontSize="1.5rem" fontWeight="500" textAlign="center">CART ITEMS</Text>
      
      {cart.map((item) => {
        return (
          <>
            <HStack border="2px solid #f1f1f1" borderRadius="10px">
              <Box borderRadius="10px" overflow="hidden">
                <Image
                  objectFit="cover"
                  w="350px"
                  h="250px"
                  src={Product6}
                  alt="Product Image"
                />
              </Box>
              
              <Box>
                <Box>
                  <Text fontSize={["1rem", "1rem", "1.5rem", "1.5rem"]}>
                    Sleeveless Gown
                    <br />
                    QTY - 1
                  </Text>
                    
                </Box>

                <HStack mt=".5rem">
                  <Box onClick={() => setCart(updateCart(cart, item, 1))} fontSize={["1rem", "1rem", "1.5rem", "1.5rem"]} cursor="pointer">
                    <MdAddBox color="green"/>
                  </Box>
                  <Box onClick={() => setCart(updateCart(cart, item, -1))} fontSize={["1rem", "1rem", "1.5rem", "1.5rem"]} cursor="pointer">
                    <FaMinus color="goldenrod"/>
                  </Box>
                  <Box onClick={() => setCart(updateCart(cart, item, 0))} fontSize={["1rem", "1rem", "1.5rem", "1.5rem"]} cursor="pointer">
                    <RiDeleteBin6Fill color="red"/>
                  </Box>
                </HStack>
              </Box>
            </HStack>

            <Box mt="2rem" border="2px solid #f1f1f1" borderRadius="10px" p="1rem">
              <HStack textAlign="center">
                <Box w="100%">
                  <Text>Total Items</Text>
                  <Text>{cart.length}</Text>
                </Box>
                <Box w="100%">
                  <Text>Total Prices</Text>
                  <Text>${totalProductsPrice(cart)}</Text>
                </Box>
              </HStack>

              <Divider />

              <HStack textAlign="center">
                <Box w="100%">
                  <Button bg="#000" color="#fff" borderRadius="10px" mt="1rem">Checkout</Button>
                </Box>
                <Box w="100%">
                <Button bg="#000" color="#fff" borderRdius="10px" mt="1rem">Clear</Button>
                </Box>
              </HStack>
            </Box>
          </>
        )
      })}
      <Container maxW={["container.xl", "container.xl", "container.xl", "container.md",]}>
    

      </Container>
      

      <Footer />
    </Container>
  )
}

