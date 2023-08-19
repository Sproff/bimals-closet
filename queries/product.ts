import { AxiosInstance } from "@/config";

export const getAllProducts = async () => {
	const { data } = await AxiosInstance.get("/products");

	return data;
};
