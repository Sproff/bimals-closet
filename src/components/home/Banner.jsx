import React from "react";
import { Box, Image} from "@chakra-ui/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import BannerImage1 from "../../assets/images/slide1.jpg";
import BannerImage2 from "../../assets/images/slide2.jpg";
import BannerImage3 from "../../assets/images/slide3.jpg";

export const Banner = () => {
  const settings = {
    dots: true,
		fade: true,
		speed: 500,
		slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
	};
	return (
		<Box
			// bg="linear-gradient(to right, #000, #968b8b)"
			mt="1rem"
			h="100%"
			w="100%"
			borderRadius="10px"
		>
			<Slider {...settings}>
				<Box h="600px" w="300px">
          <Image src={BannerImage1} objectFit="cover" alt="banner-image-one"/>
				</Box>
				<Box h="600px">
        <Image src={BannerImage2} objectFit="cover" alt="banner-image-two"/>
				</Box>
				<Box  h="600px">
        <Image src={BannerImage3} objectFit="cover" alt="banner-image-three"/>
				</Box>
			</Slider>
				{/* <Stack direction={["column", "column", "row", "row"]}>
					<Box
						w="100%"
						// h="auto"
						d="flex"
						justifyContent="center"
						alignItems="center"
					>
						<Text color="#fff" fontSize="2rem" fontWeight="bold">
							HOT SALE
							<br />
							80% OFF
						</Text>
					</Box>
					<Box w="100%" h="100%">
						<Image
							boxSize="100px"
							objectFit="cover"
							w="100%"
							h="350px"
							src={BannerImage}
							alt="Banner Image"
							backgroundSize="cover"
							backgroundPosition="center"
						/>
					</Box>
				</Stack> */}
		</Box>
	);
};
