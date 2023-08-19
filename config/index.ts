import { handleAxiosError } from "@/utils/error";
import { getLocalStorage } from "@/utils/helpers";
import axios from "axios";

export const AxiosInstance = axios.create({
	baseURL: process.env.NEXT_PUBLIC_DEV_BASE_URL,
	headers: {
		"Content-Type": "application/json",
	},
});

AxiosInstance.interceptors.request.use(
	async (request) => {
		const token = getLocalStorage("bc-token");
		if (token) {
			request.headers["authorization"] = `Bearer ${token}`;
		}
		return request;
	},
	(error) => {
		return handleAxiosError(error);
	}
);
