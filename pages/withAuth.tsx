import { isAuthenticated } from "@/utils/auth";
import { useRouter } from "next/router";
import { ComponentType, FC, useEffect } from "react";

type WithAuthProps = {};

type WithAuthComponentProps = WithAuthProps & {
	// Add any props that your wrapped component receives here
};

const withAuth = <P extends WithAuthComponentProps>(
	WrappedComponent: ComponentType<P>
) => {
	const AuthenticatedComponent: FC<P> = (props) => {
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
