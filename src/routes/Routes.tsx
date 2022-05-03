import { Box } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { ScrollToTop } from "../utils/ScrollToTop";
import Home from "../pages/Home";
import Register from "../pages/auth/Register";
import Login from "../pages/auth/Login";
import VerifyEmail from "../pages/auth/VerifyEmail";
import VerifyPhone from "../pages/auth/VerifyPhone";
import NotFound from "../pages/NotFound";
import ProductDetails from "../pages/ProductDetails";

const ConfigureRoutes = () => {
	return (
		<Box>
			<Router>
				<ScrollToTop />
				<ToastContainer />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/auth/register" element={<Register />} />
					<Route path="/auth/login" element={<Login />} />
					<Route path="/auth/verifyEmail" element={<VerifyEmail />} />
					<Route path="/auth/verifyPhone" element={<VerifyPhone />} />
					<Route path="/product-details/:slug" element={<ProductDetails />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</Router>
		</Box>
	);
};

export default ConfigureRoutes;
