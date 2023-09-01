import { useShowToast } from "../toast/useShowToast";
import { useRouter } from "next/router";
import { useHydratedStoreState } from "../state/hydrated";
import { ErrorResponse } from "@/types/error";
import { useAddFavorite, useRemoveFavorite } from "./useFavorite";
import { useEffect, useState } from "react";

type MapProduct = {
	_id: string;
	isFavorite: boolean;
};

const useToggleFavorite = (mapProducts: MapProduct[]) => {
	const token = useHydratedStoreState("token");
	const router = useRouter();
	const toast = useShowToast();
	const { mutateAsync: addMutateAsync } = useAddFavorite();
	const { mutateAsync: removeMutateAsync } = useRemoveFavorite();
	const [userId, setUserId] = useState("");

	// const jwtToken = process.env.NEXT_PUBLIC_JWT_TOKEN;

	useEffect(() => {
		const storedUser = sessionStorage.getItem("userId");
		const id = storedUser ? JSON.parse(storedUser) : null;
		setUserId(id);
	}, [userId]);
	const isProductChecked = (productId: string) => {
		const isChecked = mapProducts?.some(
			(item) => item?._id === productId && item.isFavorite
		);
		return isChecked;
	};

	const toggleProductChecked = async (productId: string) => {
		if (!token) {
			toast({
				status: "error",
				title: "You must be logged in to use this feature.",
			});
			setTimeout(() => {
				router.push("/auth/login");
			}, 1000);
			return;
		}

		const data = {
			userId,
			productId,
		};

		try {
			if (isProductChecked(productId)) {
				await removeMutateAsync(data);
			} else {
				await addMutateAsync(data);
			}
		} catch (error) {
			const responseData = (error as ErrorResponse).response?.data;
			toast({
				status: "error",
				title: responseData?.error,
			});
		}
	};

	return {
		toggleProductChecked,
		isProductChecked,
	};
};

export { useToggleFavorite };
