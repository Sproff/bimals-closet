import { AxiosInstance } from "@/config";
import { IFormLoginInput, IFormRegisterInput } from "@/types/auth";

export const loginUser = async (payload: IFormLoginInput) => {
	const { data } = await AxiosInstance.post("/user/login", payload);

	return data;
};

export const registerUser = async (payload: IFormRegisterInput) => {
	const { data } = await AxiosInstance.post("/user/register", payload);

	return data;
};

export const forgotPassword = async (payload: IFormLoginInput) => {
	const { data } = await AxiosInstance.post("/user/forgot-password", payload);

	return data;
};

export const verifyEmailToken = async (verificationToken: string) => {
	const { data } = await AxiosInstance.get(`/user/verify/${verificationToken}`);

	return data;
};
