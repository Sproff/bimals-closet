import userConstants from "../constants/types";

interface AuthAction<T> {
	payload: T;
	type: string;
}

const initialState = {
	message: null,
	status: null,
	data: null,
	products: [],
};

const authReducer = (state = initialState, action: AuthAction<object>) => {
	switch (action.type) {
		case userConstants.LOGIN_USER: {
			return {
				...state,
				message: action.payload,
				data: action.payload,
				status: action.payload,
			};
		}

		case userConstants.REGISTER_USER: {
			return {
				...state,
				message: action.payload,
				data: action.payload,
				status: action.payload,
			};
		}

		case userConstants.GET_ALL_PRODUCTS: {
			return {
				...state,
				message: action.payload,
				data: action.payload,
				status: action.payload,
			};
		}

		default:
			return state;
	}
};

export default authReducer;
