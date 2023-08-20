import { getAllProducts, getParticularProduct } from "@/queries/product";
import { useQuery } from "react-query";

export const useGetAllProducts = () => {
	return useQuery({
		queryKey: ["getAllProducts"],
		queryFn: () => getAllProducts(),
		retry: 2,
	});
};

export const useParticularProduct = (slug: string) => {
	return useQuery({
		queryKey: ["getParticularProduct", slug],
		queryFn: () => getParticularProduct(slug),
		retry: 2,
		enabled: !!slug,
	});
};

// export const useParticularProduct = () => {
// 	const queryClient = useQueryClient();

// 	return useMutation({
// 		mutationFn: () => getParticularProduct(payload),
// 		onSuccess: () => {
// 			queryClient.invalidateQueries();
// 		},
// 		onError,
// 	});
// };
