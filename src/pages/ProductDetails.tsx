import { Box, Container, Image, Stack } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ProductImage from "../assets/images/product-img1.png";

const ProductDetails = () => {
	const { slug } = useParams();

	return (
		<Container
			maxW="1280px"
			p="0"
			bg="brand.white300"
			position="relative"
			h="100%"
		>
			<MainLayout>
				<Stack direction="row">
					<Box>
						<Image src={ProductImage} boxSize="200px" alt="" />
					</Box>
					<Box>
						Lorem ipsum dolor sit amt consectetur adipisicing elit. Quia, quidem
						incidunt harum officia autem eveniet architecto odio ipsam sequi
						quas modi sapiente. Offcia ullam molestias exercitationem voluptate
						vero? Temporibus quas accusantium sed voluptatem, eligendi maxime
						praesentium soluta dolore labore explicabo.
					</Box>
				</Stack>
			</MainLayout>
		</Container>
	);
};

export default ProductDetails;
