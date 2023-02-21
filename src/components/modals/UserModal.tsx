import { Box } from "@chakra-ui/react";
import { GoHeart } from "react-icons/go";
import { AiOutlineShop } from "react-icons/ai";
import { IoMdLogOut } from "react-icons/io";
import { TiShoppingCart } from "react-icons/ti";
import { SharedModal } from "./SharedModal";

export const UserModal = () => {
	return (
		<Box>
			<SharedModal
				firstText="Order"
				firstIcon={<AiOutlineShop />}
				secondText="Wishlist"
				secondIcon={<GoHeart />}
				thirdText="Cart"
				thirdIcon={<TiShoppingCart />}
				fourthText="Logout"
				fourthIcon={<IoMdLogOut />}
				right={["23px"]}
				top={["200px"]}
				width={["170px"]}
			/>
		</Box>
	);
};
