import React, { useContext, useState } from "react";
import { Box, Container, FormLabel, Input, Text } from "@chakra-ui/react";
// import { Redirect } from "react-router-dom";
import { PaystackButton } from "react-paystack";
import ".././index.css";
import { Header } from "../layouts/Header";
import { Footer } from "../layouts/Footer";
import { totalProductsPrice } from "../services/cart";
import { StoreContext } from "../contexts/StoreContext";
import { createOrder } from "../queries/auth";
import { toast } from "react-toastify";
import { AuthContext, CREATEORDER } from "../contexts/auth";

export const Checkout = () => {
	const {  dispatch } = useContext(AuthContext);
	const { fullname, email } = JSON.parse(localStorage.getItem("data"));
	const [cart] = useContext(StoreContext);
	const publicKey = "pk_test_385f35f411327dc73ff1e38be3c5e70997bdf8e4";
	const amount = Number(totalProductsPrice(cart)).toFixed() * 100;
	// const [email, setEmail] = useState("");
	const [name, setName] = useState(fullname);
	const [phone, setPhone] = useState("");
	// eslint-disable-next-line no-unused-vars
	const [loading, setLoading] = useState(false);

	const componentProps = {
		email,
		amount,
		metadata: {
			name,
			phone,
		},
		publicKey,
		text: "Pay Now",
		onSuccess: () =>
			alert("Thanks for doing business with us! Come back soon!!"),
		// onClose: () => alert("Wait! You need this oil, don't go!!!!"),
	};

	// if (authState) {
	// 	return <Redirect to="/profile" />;
	// }

	// eslint-disable-next-line no-unused-vars
	const handleCheckout = async (data) => {
		try {
			setLoading(true);
      const res = await createOrder(data);
      console.log(res);
			dispatch({ type: CREATEORDER, payload: res.data });
			setLoading(false);
			toast.success(res.message);
		} catch (error) {
			setLoading(false);
			toast.error(error.response?.data?.message || "Order Creation Failed");
		}
	};

	return (
		<Box>
			<Header />
			<Container maxW="container.xl">
				<Container
					maxW="container.md"
					display="flex"
					justifyContent="center"
					alignItems="center"
					h="100vh"
				>
					<Box bg="#" p="2rem" borderRadius="10px" boxShadow="md">
						<Text
							fontSize="1.2rem"
							fontWeight="700"
							textAlign="center"
							p="2rem"
						>
							Payment Page
						</Text>
						<Box
							as="form"
							isrequired="true"
							width={["100%", "100%", "300px", "300px"]}
						>
							<FormLabel>Name</FormLabel>
							<Input
								value={name}
								type="text"
								id="name"
								onChange={(e) => setName(e.target.value)}
								placeholder="Name"
								borderRadius="10px"
								mb="1rem"
								_focus={{ borderColor: "#000", boxShadow: "none" }}
							/>

							{/* <FormLabel>Email Address</FormLabel>
							<Input
								type="text"
								id="email"
								// onChange={(e) => setEmail(e.target.value)}
								placeholder="Email Address"
								borderRadius="10px"
								mb="1rem"
								_focus={{ borderColor: "#000", boxShadow: "none" }}
							/> */}

							<FormLabel>Phone Number</FormLabel>
							<Input
								type="text"
								id="phone"
								onChange={(e) => setPhone(e.target.value)}
								placeholder="Phone Number"
								borderRadius="10px"
								_focus={{ borderColor: "#000", boxShadow: "none" }}
							/>
						</Box>
						<PaystackButton
							// onSubmit={handleCheckout()}
							className="paystack-button"
							// isLoading={loading}
							{...componentProps}
						/>
					</Box>
				</Container>
				<Footer />
			</Container>
		</Box>
	);
};
