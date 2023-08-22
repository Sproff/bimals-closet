import { useMutation, useQuery, useQueryClient } from "react-query";
import { useShowToast } from "../toast/useShowToast";
import { onError } from "@/utils/error";
import {
	forgotPassword,
	loginUser,
	registerUser,
	resetPassword,
	verifyEmailToken,
} from "@/queries/auth";
import { IFormLoginInput, IFormRegisterInput } from "@/types/auth";

export const useLoginUser = () => {
	const queryClient = useQueryClient();
	const toast = useShowToast();

	return useMutation({
		mutationFn: (payload: IFormLoginInput) => loginUser(payload),
		onSuccess: () => {
			queryClient.invalidateQueries();
			toast({
				status: "success",
				title: "Login successful",
			});
		},
		onError,
	});
};

export const useRegisterUser = () => {
	const queryClient = useQueryClient();
	const toast = useShowToast();

	return useMutation({
		mutationFn: (payload: IFormRegisterInput) => registerUser(payload),
		onSuccess: () => {
			queryClient.invalidateQueries();
			toast({
				status: "success",
				title: "You've been registered successfully",
			});
		},
		onError,
	});
};

export const useForgotPassword = () => {
	const queryClient = useQueryClient();
	const toast = useShowToast();

	return useMutation({
		mutationFn: (payload: IFormLoginInput) => forgotPassword(payload),
		onSuccess: () => {
			queryClient.invalidateQueries();
			toast({
				status: "success",
				title:
					"A password reset email has been successfully sent. Please check your inbox for further instructions.",
			});
		},
		onError,
	});
};

export const useResetPassword = () => {
	const queryClient = useQueryClient();
	const toast = useShowToast();

	return useMutation({
		mutationFn: (payload: IFormLoginInput) => resetPassword(payload),
		onSuccess: () => {
			queryClient.invalidateQueries();
			toast({
				status: "success",
				title:
					"Password Reset Successful! Your account is now secure with a new password.",
			});
		},
		onError,
	});
};

export const useVerifyEmailToken = (verificationToken: string) => {
	const toast = useShowToast();

	return useQuery({
		queryKey: ["verifyEmailToken"],
		queryFn: () => verifyEmailToken(verificationToken),
		retry: 2,
		enabled: !!verificationToken,
		onError: ({ response }) => {
			toast({
				status: "error",
				title: response.data.message,
			});
		},
	});
};
