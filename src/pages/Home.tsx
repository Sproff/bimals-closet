import { Container } from "@chakra-ui/react";
import { Hero } from "../components/main/Hero";
import { Products } from "../components/products/Products";
import MainLayout from "../layouts/MainLayout";

const Home = () => {
	return (
		<Container maxW="1024px" p="0">
			<MainLayout>
				<Hero />
				<Products />
			</MainLayout>
		</Container>
	);
};

export default Home;
