import { AES, enc } from "crypto-js";
import React, { createContext, useEffect, useReducer } from "react";

import { authReducer } from "./reducer";

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
	let initialState = localStorage.getItem("auth");

	if (initialState) {
		const bytes = AES.decrypt(initialState, process.env.REACT_APP_AUTH_KEY);
		const decryptedData = JSON.parse(bytes.toString(enc.Utf8));

		initialState = decryptedData;
	} else {
		initialState = "";
	}

	const [authState, dispatch] = useReducer(authReducer, initialState);

	useEffect(() => {
		if (!authState) {
			localStorage.setItem("auth", "");
		} else {
			const ciphertext = AES.encrypt(
				JSON.stringify(authState),
				process.env.REACT_APP_AUTH_KEY
			).toString();

			localStorage.setItem("auth", ciphertext);
		}
	}, [authState]);

	return (
		<AuthContext.Provider value={{ authState, dispatch }}>
			{children}
		</AuthContext.Provider>
	);
};

export { AuthContext, AuthContextProvider };
