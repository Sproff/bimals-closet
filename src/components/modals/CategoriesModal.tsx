import { Box } from "@chakra-ui/react";
import { SiGooglemybusiness } from "react-icons/si";
import { GiLoincloth, GiRunningShoe, GiTrousers } from "react-icons/gi";
import { SharedModal } from "./SharedModal";

export const CategoriesModal = () => {
	return (
		<Box>
			<SharedModal
				firstText="All Products"
				firstIcon={<SiGooglemybusiness />}
				secondText="Women"
				secondIcon={<GiLoincloth />}
				thirdText="Men"
				thirdIcon={<GiTrousers />}
				fourthText="Shoes"
				fourthIcon={<GiRunningShoe />}
				left={["0"]}
				top={["42px", "42px", "42px", "42px"]}
				width={["200px"]}
			/>
		</Box>
	);
};
