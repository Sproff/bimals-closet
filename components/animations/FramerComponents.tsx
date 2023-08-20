import {
	Box,
	BoxProps,
	Button,
	ButtonProps,
	Circle,
	SquareProps,
	Text,
	TextProps,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

export const MotionBox = motion<BoxProps>(Box);
export const MotionButton = motion<ButtonProps>(Button);
export const MotionText = motion<TextProps>(Text);
export const MotionCircle = motion<SquareProps>(Circle);
