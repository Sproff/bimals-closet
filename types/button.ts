import { IconType } from "react-icons";

export type CustomButtonProps = {
	w?: string;
	mt?: string;
	py?: string | string[];
	px?: string;
	color?: string;
	bg?: string;
	bgHover?: string;
	border?: string;
	borderColor?: string;
	fontSize?: string | string[];
	boxShadow?: string;
	text: string;
	btnIcon?: IconType;
	isLoading?: boolean;
	isBtnIcon?: boolean;
};
