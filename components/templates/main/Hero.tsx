import { useHydratedStoreState } from "@/hooks/state/hydrated";
import { Box, Button, Flex, Img, Text } from "@chakra-ui/react";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";

export const Hero = () => {
	const token = useHydratedStoreState("token");
	const [name, setName] = useState<string>("");

	const settings = {
		dots: true,
		infinite: true,
		speed: 1000,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
	};

	useEffect(() => {
		const storedUser = sessionStorage.getItem("user");
		const user = storedUser ? JSON.parse(storedUser) : null;
		const fullName = user ? user.name : null;

		setName(fullName);
	}, [name]);

	const heroData = [
		{
			image: "imageOne",
			title: "Elevate Your Style",
			desc: "Welcome to a world where fashion becomes your canvas, and every outfit tells a story. Discover your unique style with our exclusive collection.",
			author: "Photo by Alyssa Strohmann on Unsplash",
		},
		{
			image: "imageTwo",
			title: "Unleash Your Inner Fashionista",
			desc: "Step into a world where fashion knows no bounds. Your wardrobe is your playground, and every ensemble is a work of art.",
			author: "Photo by S O C I A L . C U T on Unsplash",
		},
		{
			image: "imageThree",
			title: "Discover Fashion Freedom",
			desc: "Welcome to a realm where fashion becomes an expression of your personality. Embrace the freedom to create and inspire with every outfit you choose",
			author: "Photo by Burgess Milner on Unsplash",
		},
	];

	return (
		<Box bg="brand.white200">
			<Box px="3rem" maxW="1280px" mx="auto" textAlign="left" pt="16rem">
				<Text my="1rem" fontSize="2rem" fontWeight="600">
					{name ? `Welcome, ${name} 😄` : "Hey there!"}
				</Text>
				<Box pb="8rem">
					<Slider {...settings}>
						{heroData.map((item, idx) => (
							<Box key={idx} pos="relative" overflow="hidden" role="group">
								<Box borderRadius="1rem" overflow="hidden">
									<Img
										mx="auto"
										cursor="pointer"
										w="1600px"
										h="500px"
										src={`/assets/images/${item.image}.jpeg`}
										alt={item.author}
									/>
								</Box>

								<Flex
									flexDir="column"
									justify="center"
									pos="absolute"
									bg="brand.dark100"
									top="0"
									left="0"
									w="100%"
									h="100%"
									borderRadius="1rem"
									zIndex="99999"
									px={["2rem", "8rem", "8rem", "10rem", "10rem"]}
								>
									<Text
										fontSize={["4rem", "4rem", "6rem", "6rem"]}
										fontWeight="600"
										color="brand.white100"
									>
										{item.title}
									</Text>

									<Text
										fontWeight="300"
										fontSize={["1.8rem", "1.8rem", "2.2rem", "2.2rem"]}
										w={["300px", "300px", "500px", "500px", "500px"]}
										color="brand.white200"
										mb="3rem"
									>
										{item.desc}
									</Text>
									<Box w="max-content">
										<Link href={token ? "" : "/auth/login"}>
											<Button
												bg="brand.green100"
												color="brand.white100"
												fontSize="1.5rem"
												px="5rem"
												py="2.2rem"
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
								</Flex>
							</Box>
						))}
					</Slider>
				</Box>
			</Box>
		</Box>
	);
};
