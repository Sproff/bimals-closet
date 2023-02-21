import userConstants from "../constants/types";

interface ErrorAction<T> {
	payload: T;
	type: string;
}

const initialState = {
	message: null,
	status: null,
	// id: null,
};

const errorReducer = (state = initialState, action: ErrorAction<object>) => {
	switch (action.type) {
		case userConstants.GET_ERROR: {
			return {
				...state,
				message: action.payload,
				// id: action.payload,
				status: action.payload,
			};
		}

		// case RETURN_ERROR: {
		// 	return {
		// 		...state,
		// 		message: null,
		// 		data: null,
		// 		status: null,
		// 	};
		// }
		default:
			return state;
	}
};

export default errorReducer;
