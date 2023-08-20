import { AxiosInstance } from "@/config";

export const getAllProducts = async () => {
	const { data } = await AxiosInstance.get("/products");

	return data;
};

export const getParticularProduct = async (slug: string) => {
	const { data } = await AxiosInstance.get(`/products/${slug}`);

	return data;
};
