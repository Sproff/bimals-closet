import axios from "axios";
import { toast } from "react-toastify";

interface errorProps<T> {
	error: T
}

export const handleError = (error: unknown) => {
	if (axios.isAxiosError(error)) {
	toast.error(
		error?.response?.data?.message || "Erorr occurred! Please try again later",
		{
			position: toast.POSITION.TOP_CENTER,
		}
	);
	}
};
