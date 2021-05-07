import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { Header } from "../layouts/Header"
import { Footer } from "../layouts/Footer"

import { Box, Button, Container, Divider, HStack, Image, Text } from "@chakra-ui/react";
// import Product6 from "../assets/images/pr6.jpg"

import { MdAddBox } from "react-icons/md";
import { FaMinus } from "react-icons/fa";
import { RiDeleteBin6Fill } from "react-icons/ri";

import { StoreContext } from "../contexts/StoreContext"
import { updateCart, totalProductsPrice } from "../services/cart"


export const Cart = () => {
  const [cart, setCart] = useContext(StoreContext)
  return (
    <Box>
      <Header />
      <Container maxW="container.xl">

        <Text as="h3" my="4rem" fontSize="1.5rem" fontWeight="500" textAlign="center">CART ITEMS</Text>
        
        {cart.map((item) => {
          return (
            <>
              <HStack mx="8rem" border="2px solid #f1f1f1" borderRadius="10px" key={item.id}>
                <Box borderRadius="10px" overflow="hidden">
                  <Image
                    objectFit="cover"
                    w="350px"
                    h="250px"
                    src={item.image}
                    alt="Product Image"
                  />
                </Box>
                
                <Box>
                  <Box>
                    <Text fontSize={["1rem", "1rem", "1.2rem", "1.2rem"]}>
                      Sleeveless Gown
                      <br />
                      <Text color='gray.500' fontSize={[".9rem", ".9rem", "1rem", "1rem"]} />
                      $1
                      <br />
                      QTY - {item.itemCount}
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

              <Box mt="2rem" mx="8rem" border="2px solid #f1f1f1" borderRadius="10px" p="1rem">
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
                    <Link to="/checkout">
                      <Button bg="#000" color="#fff" borderRadius="10px" mt="1rem">Checkout</Button>
                    </Link>
                  </Box>
                  <Box w="100%">
                  <Button onClick={() => setCart([])} bg="#000" color="#fff" borderRdius="10px" mt="1rem">Clear</Button>
                  </Box>
                </HStack>
              </Box>
            </>
          )
        })}
        
        <Footer />
        </Container>
      </Box>
  )
}

