import { LOGIN_USER, LOGOUT_USER } from "./Actions";

const initialState = {
  user: null,
  isAuthenticated: false,
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
      };
    case LOGOUT_USER:
      return {
        ...state,
        user: null,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};

export default AuthReducer;
