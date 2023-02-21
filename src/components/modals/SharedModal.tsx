import { Box, Flex, Stack, Text } from "@chakra-ui/react";

interface SharedModalProps {
	firstText: string;
	secondText: string;
	thirdText: string;
	fourthText: string;
	firstIcon: JSX.Element;
	secondIcon: JSX.Element;
	thirdIcon: JSX.Element;
	fourthIcon: JSX.Element;
	left?: string[];
	right?: string[];
	top?: string[];
	width: string[];
}

export const SharedModal = ({
	firstText,
	secondText,
	thirdText,
	fourthText,
	firstIcon,
	secondIcon,
	thirdIcon,
	fourthIcon,
	left,
	right,
	top,
	width,
}: SharedModalProps) => {
	return (
		<Stack
			direction="column"
			bg="brand.white100"
			color="brand.grey300"
			fontWeight="500"
			justifyContent="center"
			borderRadius="10px"
			position="absolute"
			h="200px"
			w={width}
			left={left}
			right={right}
			top={top}
			zIndex="2"
		>
			<Flex
				role="group"
				alignItems="center"
				cursor="pointer"
				p=".5rem 1.5rem"
				_hover={{
					bg: "brand.green100",
					color: "brand.white100",
					borderRadius: "4px",
				}}
			>
				<Box
					color="brand.green100"
					_groupHover={{
						color: "brand.white100",
					}}
				>
					{firstIcon}
				</Box>
				<Text ml=".8rem" fontSize=".9rem" display="flex" alignItems="center">
					{firstText}
				</Text>
			</Flex>

			<Flex
				role="group"
				alignItems="center"
				cursor="pointer"
				p=".5rem 1.5rem"
				_hover={{
					bg: "brand.green100",
					color: "brand.white100",
					borderRadius: "4px",
				}}
			>
				<Box
					color="brand.green100"
					_groupHover={{
						color: "brand.white100",
					}}
				>
					{secondIcon}
				</Box>
				<Text ml=".8rem" fontSize=".9rem" display="flex" alignItems="center">
					{secondText}
				</Text>
			</Flex>

			<Flex
				role="group"
				alignItems="center"
				cursor="pointer"
				p=".5rem 1.5rem"
				_hover={{
					bg: "brand.green100",
					color: "brand.white100",
					borderRadius: "4px",
				}}
			>
				<Box
					color="brand.green100"
					_groupHover={{
						color: "brand.white100",
					}}
				>
					{thirdIcon}
				</Box>
				<Text ml=".8rem" fontSize=".9rem" display="flex" alignItems="center">
					{thirdText}
				</Text>
			</Flex>

			<Flex
				role="group"
				alignItems="center"
				cursor="pointer"
				p=".5rem 1.5rem"
				_hover={{
					bg: "brand.green100",
					color: "brand.white100",
					borderRadius: "4px",
				}}
			>
				<Box
					color="brand.green100"
					_groupHover={{
						color: "brand.white100",
					}}
				>
					{fourthIcon}
				</Box>
				<Text ml=".8rem" fontSize=".9rem" display="flex" alignItems="center">
					{fourthText}
				</Text>
			</Flex>
		</Stack>
	);
};
