import { Box, ChakraProvider } from "@chakra-ui/react";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import VerifyEmail from "../pages/VerifyEmail";
import VerifyPhone from "../pages/VerifyPhone";
import theme from "../utils/theme";

const ConfigureRoutes = () => {
	return (
		<Box>
			<Router>
				<ChakraProvider resetCSS theme={theme}>
					<Routes>
						<Route path="/verifyPhone" element={<VerifyPhone />} />
						<Route path="/verifyEmail" element={<VerifyEmail />} />
						<Route path="/login" element={<Login />} />
						<Route path="/register" element={<Register />} />
						<Route path="/" element={<Home />} />
					</Routes>
				</ChakraProvider>
			</Router>
		</Box>
	);
};

export default ConfigureRoutes;
