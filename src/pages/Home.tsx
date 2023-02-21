import { Box, Container } from "@chakra-ui/react";
import { Hero } from "../components/main/Hero";
import { Products } from "../components/products/Products";
import MainLayout from "../layouts/MainLayout";

const Home = () => {
	return (
		<Box p="0">
			<MainLayout>
				<Hero />
				<Products />
			</MainLayout>
		</Box>
	);
};

export default Home;
