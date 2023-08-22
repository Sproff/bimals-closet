export const getBaseUrl = () => {
	const isDevelopment = process.env.NODE_ENV === "development";

	if (isDevelopment) {
		return process.env.NEXT_PUBLIC_DEV_BASE_URL || "http://localhost:9000";
	} else {
		return (
			process.env.NEXT_PUBLIC_PROD_BASE_URL ||
			"https://bimals-closet-api.onrender.com"
		);
	}
};
