import { CartItems } from "@/components/templates/cart";
import MainLayout from "@/layouts/MainLayout";
import { Box } from "@chakra-ui/react";

const Cart = () => {
	return (
		<Box>
			<MainLayout {...{ subHeaderName: "Shopping Cart" }}>
				<CartItems />
			</MainLayout>
		</Box>
	);
};

export default Cart;
