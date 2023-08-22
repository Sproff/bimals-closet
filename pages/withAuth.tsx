import { useHydratedStoreState } from "@/hooks/state/hydrated";
import { Center } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { JSX, useEffect, useState } from "react";

const withAuth = (WrappedComponent: JSX.ElementType) => {
	const AuthenticatedComponent = (props: any) => {
		const router = useRouter();
		const token = useHydratedStoreState("token");
		const [authChecked, setAuthChecked] = useState(false);
		const [renderLoading, setRenderLoading] = useState(true);

		useEffect(() => {
			const checkAuthentication = async () => {
				if (token !== undefined) {
					if (token) {
						await router.push("/");
					} else {
						// await router.push("/auth/login");
					}
					setAuthChecked(true);
				}
			};

			const timer = setTimeout(() => {
				setRenderLoading(false);
				checkAuthentication();
			}, 0); // Delayed execution to allow "Loading..." to render

			return () => clearTimeout(timer); // Cleanup to cancel rendering "Loading..."
		}, [token, router]);

		if (!authChecked || renderLoading) {
			return (
				<Center justifyContent="center" w="100%">
					<svg
						version="1.1"
						id="L5"
						xmlns="http://www.w3.org/2000/svg"
						xmlnsXlink="http://www.w3.org/1999/xlink"
						x="0px"
						y="0px"
						viewBox="0 0 100 100"
						enableBackground="new 0 0 0 0"
						xmlSpace="preserve"
					>
						<circle fill="#00AF54" stroke="none" cx="35" cy="50" r="2">
							<animateTransform
								attributeName="transform"
								dur="1s"
								type="translate"
								values="0 15 ; 0 -15; 0 15"
								repeatCount="indefinite"
								begin="0.1"
							/>
						</circle>
						<circle fill="#00AF54" stroke="none" cx="45" cy="50" r="2">
							<animateTransform
								attributeName="transform"
								dur="1s"
								type="translate"
								values="0 10 ; 0 -10; 0 10"
								repeatCount="indefinite"
								begin="0.2"
							/>
						</circle>
						<circle fill="#00AF54" stroke="none" cx="55" cy="50" r="2">
							<animateTransform
								attributeName="transform"
								dur="1s"
								type="translate"
								values="0 5 ; 0 -5; 0 5"
								repeatCount="indefinite"
								begin="0.3"
							/>
						</circle>
					</svg>
				</Center>
			);
		}

		// If auth is checked and token is not authenticated, render the wrapped component
		return <WrappedComponent {...props} />;
	};

	return AuthenticatedComponent;
};

export default withAuth;
