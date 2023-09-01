import { ConfigResponse } from "@/types/config";
import { getBaseUrl } from "@/utils/environment";
import { getLocalStorage } from "@/utils/helpers";
import axios from "axios";

export const AxiosInstance = axios.create({
	baseURL: getBaseUrl(),
	headers: {
		"Content-Type": "application/json",
	},
});

export const AuthAxiosInstance = axios.create({
	baseURL: getBaseUrl(),
	headers: {
		"Content-Type": "application/json",
	},
});

AuthAxiosInstance.interceptors.request.use(
	async (request) => {
		const token = getLocalStorage("__bimals_closet_store_data__");

		if ((token as ConfigResponse)?.state?.token) {
			(request.headers as Record<string, unknown>)[
				"authorization"
			] = `Bearer ${(token as ConfigResponse)?.state?.token}`;
		}
		return request;
	},
	(error) => {
		return Promise.reject(error);
	}
);
