import { Box, Center, Skeleton, SkeletonText } from "@chakra-ui/react";

const CustomLoader = () => {
	return (
		<Center bg="brand.gold300" h="100vh">
			<Box
				className="custom-loader"
				w={["50px", "50px", "50px", "70px"]}
				h={["50px", "50px", "50px", "70px"]}
				borderRadius="50%"
				bg="#CBA052"
				transformOrigin="50% 40%"
			/>
		</Center>
	);
};

export { CustomLoader };

export const BoxCardLoader = ({
	rounded = "2.4rem",
	h = "300px",
	mt,
}: {
	rounded: string;
	h?: string | string[];
	mt?: string;
}) => {
	return <Skeleton w="100%" h={h} mt={mt} {...{ rounded }} />;
};

export const TextLoader = ({
	mt,
	noOfLines,
}: {
	mt?: string;
	noOfLines: number;
}) => {
	return (
		<SkeletonText
			startColor="#A0AEC0"
			endColor="#718096"
			w="100%"
			mt={mt}
			noOfLines={noOfLines}
			spacing="4"
			skeletonHeight="4"
			color="brand.gray200"
		/>
	);
};
