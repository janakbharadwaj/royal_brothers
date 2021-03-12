import * as actionTypes from "./ActionTypes";

const initState = {
  isLoading: false,
  isError: false,
  isAuth: false,
  userData: {},
  signupRes: "",
  loginRes: "",
};

export const authReducer = (state = initState, { type, data }) => {
  switch (type) {
    case actionTypes.SIGNUP_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case actionTypes.SIGNUP_SUCCESS: {
      return {
        ...state,
        signupRes: data.message,
        isLoading: false,
      };
    }
    case actionTypes.SIGNUP_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case actionTypes.LOGIN_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case actionTypes.LOGIN_SUCCESS: {
      return {
        ...state,
        isAuth: data.isAuth,
        isLoading: false,
        userData: data.userData,
        loginRes: data.message,
      };
    }
    case actionTypes.LOGIN_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }

    case actionTypes.LOGOUT: {
      return {
        isAuth: "",
        userData: "",
        loginRes: "",
      };
    }

    default:
      return state;
  }
};
