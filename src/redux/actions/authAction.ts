import userConstants from "../constants/types";

export const loginUser = (data: Record<string, unknown>) => {
	return {
		type: userConstants.LOGIN_USER,
		payload: data,
	};
};

export const registerUser = (data: Record<string, unknown>) => {
	return {
		type: userConstants.REGISTER_USER,
		payload: data,
	};
};

export const getAllProducts = (data: object) => {
	return {
		type: userConstants.GET_ALL_PRODUCTS,
		payload: data,
	};
};

export const getError = (payload: unknown) => {
	return {
		type: userConstants.GET_ERROR,
		payload,
	};
};
