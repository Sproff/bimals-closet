import { ProductDetails, SimilarProduct } from "@/components/templates/product";
import MainLayout from "@/layouts/MainLayout";
import { Box } from "@chakra-ui/react";

const ProductDetail = () => {
	return (
		<Box>
			<MainLayout {...{ subHeaderName: "Product Details" }}>
				<ProductDetails />
				<SimilarProduct />
			</MainLayout>
		</Box>
	);
};

export default ProductDetail;
