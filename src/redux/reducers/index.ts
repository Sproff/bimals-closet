import { combineReducers } from "redux";
import authReducer from "../reducers/authReducer";
import errorReducer from "../reducers/errorReducer";

const reducers = combineReducers({
	auth: authReducer,
	error: errorReducer,
});

export default reducers;
