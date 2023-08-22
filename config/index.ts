import { getBaseUrl } from "@/utils/environment";
import axios from "axios";

export const AxiosInstance = axios.create({
	baseURL: getBaseUrl(),
	headers: {
		"Content-Type": "application/json",
	},
});
