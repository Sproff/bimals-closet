import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";

import { AuthContext } from "../../contexts/auth";

export const PublicRoute = ({ path, exact, children }) => {
	const { authState } = useContext(AuthContext);

	// Check if user is logged in
	if (authState) {
		return <Redirect to="/" />;
	}

	return (
		<Route path={path} exact={exact}>
			{children}
		</Route>
	);
};
