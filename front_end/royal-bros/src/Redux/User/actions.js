import axios from "axios";
import * as actionTypes from "./actionTypes";

const getRentalsRequest = () => {
  return {
    type: actionTypes.GET_RENTALS_REQUEST,
  };
};

const getRentalsSuccess = (data) => {
  return {
    type: actionTypes.GET_RENTALS_SUCCESS,
    data,
  };
};

const getRentalsFailure = () => {
  return {
    type: actionTypes.GET_RENTALS_FAILURE,
  };
};

export const getRentalsHandler = (id) => (dispatch) => {
  console.log(id, "from actions");
  dispatch(getRentalsRequest());
  return axios
    .get(`http://localhost:8080/rentals/${id}`)
    .then((res) => dispatch(getRentalsSuccess(res.data)))
    .catch((err) => dispatch(getRentalsFailure()));
};

// getting monthly subscription data for a user

const getMonthlyRequest = () => {
  return {
    type: actionTypes.GET_MONTHLY_REQUEST,
  };
};

const getMonthlySuccess = (data) => {
  return {
    type: actionTypes.GET_MONTHLY_SUCCESS,
    data,
  };
};

const getMonthlyFailure = () => {
  return {
    type: actionTypes.GET_MONTHLY_FAILURE,
  };
};

export const getMonthlyHandler = (id) => (dispatch) => {
  console.log(id, "from actions");
  dispatch(getMonthlyRequest());
  return axios
    .get(`http://localhost:8080/months/${id}`)
    .then((res) => dispatch(getMonthlySuccess(res.data)))
    .catch((err) => dispatch(getMonthlyFailure()));
};
