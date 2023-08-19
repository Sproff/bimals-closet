import { CustomButtonProps } from "@/interfaces/button";
import { Box, Button } from "@chakra-ui/react";

const CustomButton = ({
	w,
	px,
	color,
	bg,
	text,
	isLoading,
}: CustomButtonProps) => {
	return (
		<Box>
			<Button
				w={w || "100%"}
				mt="2rem"
				py="2rem"
				px={px}
				color={color || "#fff"}
				bg={bg || "brand.green100"}
				borderRadius="10px"
				boxShadow="0px 4px 20px rgba(0, 175, 84, 0.25)"
				type="submit"
				cursor="pointer"
				fontSize="1.42rem"
				isLoading={isLoading}
				_hover={{
					bg: bg || "brand.green200",
				}}
				_focus={{
					borderColor: "none",
					boxShadow: "none",
				}}
			>
				{text}
			</Button>
		</Box>
	);
};

export { CustomButton };
