import { useCallback } from "react";
import { ToastPosition, useToast, UseToastOptions } from "@chakra-ui/react";

export const useShowToast = (): ((options: UseToastOptions) => void) => {
	const toast = useToast();

	return useCallback(
		(options: UseToastOptions) => {
			const toastOptions = {
				position: "top" as ToastPosition | undefined,
				duration: 3000,
				isClosable: true,
				containerStyle: {
					fontSize: "1.2rem",
				},
				...options,
			};
			toast(toastOptions);
		},
		[toast]
	);
};
