import { isAuthenticated } from "@/utils/auth";
import { useRouter } from "next/router";
import { JSX, useEffect } from "react";

const withAuth = (WrappedComponent: any) => {
	const AuthenticatedComponent = (props: JSX.IntrinsicAttributes) => {
		const router = useRouter();

		useEffect(() => {
			if (isAuthenticated()) {
				console.log("authenticated");
				router.push("/");
			} else {
				console.log("not authenticated");
				router.push("/auth/login");
			}
		}, []);

		return <WrappedComponent {...props} />;
	};

	return AuthenticatedComponent;
};

export default withAuth;
