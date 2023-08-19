import { Toast } from "@chakra-ui/react";
import { AxiosError } from "axios";
// import { signOut } from "next-auth/react";
import Router from "next/router";

export const handleAxiosError = async (error: AxiosError): Promise<void> => {
	const { response } = error;

	if (response?.status === 500) {
		Toast({
			status: "error",
			title: (response?.data as any)?.message || "Session expired",
		});
	}

	// Auth handler
	if (response && [401, 403].includes(response?.status)) {
		localStorage.clear();
		// await signOut({ redirect: true });
		if (response?.status === 401) {
			await Router.push(
				{
					pathname: "/",
					query: { error: "Session expired, Log in" },
				},
				"/"
			);
		} else {
			Toast({
				status: "error",
				title: (response?.data as any)?.message || "Session expired",
			});
			await Router.push("/");
		}
		return;
	}

	// FIXME
	const multipleErrors = [(response?.data as Record<string, string>)?.message];
	multipleErrors.flat().forEach((errMsg) =>
		Toast({
			status: "error",
			title: errMsg,
		})
	);
};

export const onError = (error: AxiosError) => handleAxiosError(error);
