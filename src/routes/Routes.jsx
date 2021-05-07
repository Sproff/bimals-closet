import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

import { Home } from "../pages/Home"
import { Cart } from "../pages/Cart"
import { Checkout } from "../pages/Checkout"
import { SignUp } from "../pages/SignUp"
import { Login } from "../pages/Login"
import { ProductDetails } from "../pages/ProductDetails";
import { Profile } from "../pages/Profile";
import { AuthContextProvider } from "../contexts/auth"
import { PrivateRoute } from "../components/auth/PrivateRoute";

export const Routes = () => {
	return (
    <Router>
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
