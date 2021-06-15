import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { ScrollToTop } from "../pages/ScrollToTop";
import { AuthContextProvider } from "../contexts/auth";
import { PrivateRoute } from "../components/auth/PrivateRoute";
import { Checkout } from "../pages/Checkout";
import { ProductDetails } from "../pages/ProductDetails";
import { Cart } from "../pages/Cart";
import { Profile } from "../pages/Profile";
import { SignUp } from "../pages/SignUp";
import { Login } from "../pages/Login";
import { Home } from "../pages/Home";
import { SearchResults } from "../pages/SearchResults";

export const Routes = () => {
	return (
		<Router>
			<ScrollToTop />
			<ChakraProvider>
				<ToastContainer />
				<AuthContextProvider>
					<Switch>
						<PrivateRoute path="/checkout">
							<Checkout />
						</PrivateRoute>

						<Route path="/product/:slug">
							<ProductDetails />
						</Route>

						<Route path="/cart">
							<Cart />
						</Route>

						<Route path="/profile">
							<Profile />
						</Route>

						<Route path="/search">
							<SearchResults />
						</Route>

						<Route path="/sign-up">
							<SignUp />
						</Route>

						<Route path="/login">
							<Login />
						</Route>

						<Route exact path="/">
							<Home />
						</Route>
					</Switch>
				</AuthContextProvider>
			</ChakraProvider>
		</Router>
	);
};
