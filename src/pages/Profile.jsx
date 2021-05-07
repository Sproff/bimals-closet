import React, { useContext, useState } from "react"
import {
	Box,
	Button,
  Container,
  Text
} from "@chakra-ui/react";

import { Header } from "../layouts/Header"
import { Footer } from "../layouts/Footer"

import { toast } from "react-toastify";
import { AuthContext, LOGOUT } from "../contexts/auth";

export const Profile = () => {
  const [loading, setLoading] = useState(false);
  const { dispatch } = useContext(AuthContext);

  const logout = async () => {
    try {
      setLoading(true);
      dispatch({ type: LOGOUT, payload: null });
      window.location.replace("/login")
      setLoading(false);
      toast.success("Logout Sucesssful")
    } catch (error) {
      setLoading(false);
      toast.error("Logout Failed")
    }
	};

  return (
    <Box>
      <Header />
      <Container maxW="container.xl">
        <Box my="5rem">
          <Text mb="1rem" fontSie="1.2rem" fontWeight="500">Profile Settings</Text>
          {logout !== "" ? (
            <Button
              type="submit"
              bg="#000"
              color="#fff"
              borderRadius="10px"
              mt="1rem"
              cursor="pointer"
              boxShadow="none"
              _hover={{ background: "#000", opacity: "0.8" }}
              isLoading={loading}
              onClick={logout}
            >
              Log Out
            </Button>

          ) : (
            <Button
              type="submit"
              bg="#000"
              color="#fff"
              borderRadius="10px"
              mt="1rem"
              cursor="pointer"
              boxShadow="none"
              _hover={{ background: "#000", opacity: "0.8" }}
              isLoading={loading}
              onClick={logout}
            >
              Log In
            </Button>
          )}
          
        </Box>
        
        <Footer />
        </Container>
      </Box>
  )
}