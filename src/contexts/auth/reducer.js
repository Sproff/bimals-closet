import { LOGIN, LOGOUT, SIGNUP, UPDATE } from './types';

// Reducer
export const authReducer = (state, action) => {
  switch (action.type) {
    case SIGNUP:
      return action.payload;
    case LOGIN:
      return action.payload;
    case UPDATE:
      return {
        ...state,
        ...action.payload,
      };
    case LOGOUT:
      return null;
    default:
      return state;
  }
};
