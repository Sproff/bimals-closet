import { getAllProducts } from "@/queries/product";
import { useQuery } from "react-query";

export const useGetAllProducts = () => {
	return useQuery({
		queryKey: ["getAllProducts"],
		queryFn: () => getAllProducts(),
		retry: 2,
	});
};
