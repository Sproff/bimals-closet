import { onError } from "@/utils/error";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useShowToast } from "../toast/useShowToast";
import { addFavorite, myFavorites, removeFavorite } from "@/queries/favorite";
import { FavoriteProps } from "@/types/favorite";

export const useAddFavorite = () => {
	const queryClient = useQueryClient();
	const toast = useShowToast();

	return useMutation({
		mutationFn: (payload: FavoriteProps) => addFavorite(payload),
		onSuccess: () => {
			queryClient.invalidateQueries();
			toast({
				status: "success",
				title: "Product added to favorites successfully.",
			});
		},
		onError,
	});
};

export const useRemoveFavorite = () => {
	const queryClient = useQueryClient();
	const toast = useShowToast();

	return useMutation({
		mutationFn: (payload: FavoriteProps) => removeFavorite(payload),
		onSuccess: () => {
			queryClient.invalidateQueries();
			toast({
				status: "success",
				title: "Product removed from favorites successfully.",
			});
		},
		onError,
	});
};

export const useGetMyFavorites = () => {
	return useQuery({
		queryKey: ["getMyFavorites"],
		queryFn: () => myFavorites(),
		retry: 2,
	});
};
