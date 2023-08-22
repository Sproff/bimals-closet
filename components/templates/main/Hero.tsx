import { useHydratedStoreState } from "@/hooks/state/hydrated";
import { Box, Button, Text } from "@chakra-ui/react";
import Link from "next/link";

export const Hero = () => {
	const token = useHydratedStoreState("token");
	return (
		<Box
			bgImage="url('/assets/images/hero-bg.png')"
			bgPosition="center"
			bgRepeat="no-repeat"
			h="450px"
		>
			<Box px="3rem" maxW="1280px" mx="auto" textAlign="left" pt="18rem">
				<Text fontSize={["4rem", "4rem", "6rem", "6rem"]} fontWeight="600">
					Fashion
				</Text>
				<Box
					color="brand.green100"
					fontSize={["1.8rem", "1.8rem", "2.2rem", "2.2rem"]}
					mt={["-.5rem", "-.5rem", "-1.4rem"]}
					mb="1rem"
				>
					<Text
						fontWeight="300"
						w={["300px", "300px", "500px", "500px", "500px"]}
					>
						Welcome to a world where fashion becomes your canvas, and every
						outfit tells a story.
					</Text>
				</Box>
				<Link href="/auth/login">
					<Button
						bg="brand.green100"
						color="brand.white100"
						fontSize="1.3rem"
						py="2rem"
						_hover={{
							bg: "brand.green200",
						}}
						_focus={{
							borderColor: "none",
							boxShadow: "none",
						}}
					>
						{token ? "Explore" : "Join us now"}
					</Button>
				</Link>
			</Box>
		</Box>
	);
};
