import { getLocalStorage } from "./helpers";

export const isAuthenticated = () => {
	const token = getLocalStorage("token");
	return !!token; // Return true if token exists, otherwise false
};
