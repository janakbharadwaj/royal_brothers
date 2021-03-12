import axios from "axios";
import * as actionTypes from "./ActionTypes";

const signupRequest = () => {
  return {
    type: actionTypes.SIGNUP_REQUEST,
  };
};

const signupSuccess = (data) => {
  return {
    type: actionTypes.SIGNUP_SUCCESS,
    data,
  };
};

const signupFailure = () => {
  return {
    type: actionTypes.SIGNUP_FAILURE,
  };
};

export const signupHandler = (payload) => (dispatch) => {
  dispatch(signupRequest());
  return axios
    .post("http://localhost:8080/users/signup", payload)
    .then((res) => dispatch(signupSuccess(res.data)))
    .catch((err) => console.log(err), dispatch(signupFailure()));
};

const loginRequest = () => {
  return {
    type: actionTypes.LOGIN_REQUEST,
  };
};

const loginSuccess = (data) => {
  return {
    type: actionTypes.LOGIN_SUCCESS,
    data,
  };
};

const loginFailure = () => {
  return {
    type: actionTypes.LOGIN_FAILURE,
  };
};

export const loginHandler = (payload) => (dispatch) => {
  dispatch(loginRequest());
  return axios
    .post("http://localhost:8080/users/login", payload)
    .then((res) => dispatch(loginSuccess(res.data)))
    .catch((err) => dispatch(loginFailure()));
};

//logout
export const logoutHandler = () => {
  return {
    type: actionTypes.LOGOUT,
  };
};
