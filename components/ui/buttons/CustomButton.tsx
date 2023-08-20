import { CustomButtonProps } from "@/types/button";
import { Box, Button, Icon } from "@chakra-ui/react";

const CustomButton = ({
	w,
	mt,
	py,
	px,
	color,
	bg,
	bgHover,
	boxShadow,
	border,
	borderColor,
	fontSize,
	text,
	btnIcon,
	isLoading,
	isBtnIcon,
}: CustomButtonProps) => {
	return (
		<Box>
			<Button
				w={w || "100%"}
				mt={mt || "2rem"}
				py={py || "2rem"}
				px={px}
				color={color || "#fff"}
				bg={bg || "brand.green100"}
				borderRadius="10px"
				boxShadow={boxShadow || "0px 4px 20px rgba(0, 175, 84, 0.25)"}
				border={border}
				borderColor={borderColor}
				type="submit"
				cursor="pointer"
				fontSize={fontSize || "1.42rem"}
				isLoading={isLoading}
				_hover={{
					bg: bgHover || "brand.green200",
				}}
				_focus={{
					borderColor: "none",
					boxShadow: "none",
				}}
			>
				{isBtnIcon && (
					<Icon
						cursor="pointer"
						color="brand.green100"
						fontSize="2.5rem"
						mr={["1rem", "3rem", "1rem", "3rem"]}
						as={btnIcon}
					/>
				)}{" "}
				{text}
			</Button>
		</Box>
	);
};

export { CustomButton };
