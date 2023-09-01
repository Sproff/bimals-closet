import { IconType } from "react-icons";
import { GiLoincloth, GiTrousers } from "react-icons/gi";
import { GoHeart } from "react-icons/go";
import { IoMdLogOut } from "react-icons/io";
import { SiGooglemybusiness } from "react-icons/si";
import { TiShoppingCart } from "react-icons/ti";

export type AuthModalDataProps = {
	icon: IconType;
	text: string;
	link?: string;
};

export const AuthModalData: AuthModalDataProps[] = [
	{
		icon: TiShoppingCart,
		text: "Cart",
		link: "/cart",
	},
	// {
	// 	icon: AiOutlineShop,
	// 	text: "Order",
	// },
	{
		icon: GoHeart,
		text: "Wishlist",
		link: "/wishlist",
	},
	{
		icon: IoMdLogOut,
		text: "Logout",
	},
];

export const CategoriesModalData: AuthModalDataProps[] = [
	{
		icon: SiGooglemybusiness,
		text: "All Products",
	},
	{
		icon: GiLoincloth,
		text: "Women",
	},
	{
		icon: GiTrousers,
		text: "Men",
	},
	// {
	// 	icon: GiRunningShoe,
	// 	text: "Shoes",
	// },
];
