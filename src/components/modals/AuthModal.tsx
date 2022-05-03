import { Box, Button, Stack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { UserModal } from "./UserModal";

export const AuthModal = ({ openDropDown = false }) => {
	return (
		<Box>
			<Stack
				className={openDropDown ? "authModal show" : ""}
				direction="row"
				// bg="brand.white100"
				// w="200px"
				// h="80px"
				// justifyContent="center"
				// alignItems="center"
				// borderRadius="10px"
				// position="absolute"
				// right="23px"
				// top="80px"
				// zIndex="2"
				// transition="all 0.3s ease-in-out 0s"
				// opacity="0"
				// transform="scaleY(0)"
			>
				<Link to="/auth/login">
					<Button
						color="brand.green100"
						bg="transparent"
						border="1px solid #EAEAEA"
						borderRadius="10px"
						fontSize=".9rem"
						_hover={{ bg: "brand.green100", color: "brand.white100" }}
						_focus={{
							borderColor: "none",
							boxShadow: "none",
						}}
					>
						Login
					</Button>
				</Link>

				<Link to="/auth/register">
					<Button
						bg="brand.green100"
						color="brand.white100"
						fontSize=".9rem"
						_hover={{
							bg: "brand.green200",
						}}
						_focus={{
							borderColor: "none",
							boxShadow: "none",
						}}
					>
						Sign Up
					</Button>
				</Link>
			</Stack>

			{/* <UserModal /> */}
		</Box>
	);
};
