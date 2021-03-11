import axios from "axios";
import * as actionTypes from "./ActionTypes";

const getLocationRequest = () => {
  return {
    type: actionTypes.GET_LOCATION_REQUEST,
  };
};

const getLocationSuccess = (data) => {
  return {
    type: actionTypes.GET_LOCATION_SUCCESS,
    data,
  };
};
const getLocationFailure = () => {
  return {
    type: actionTypes.GET_LOCATION_FAILURE,
  };
};

export const getLocationHandler = (search) => (dispatch) => {
  dispatch(getLocationRequest());
  return axios
    .get(`http://localhost:8080/locations/${search}`)
    .then((res) => dispatch(getLocationSuccess(res.data)))
    .catch((err) => getLocationFailure());
};

//Choosing a location from the modal
const chooseLocationRequest = () => {
  return {
    type: actionTypes.CHOOSE_LOCATION_REQUEST,
  };
};

const chooseLocationSuccess = (data) => {
  return {
    type: actionTypes.CHOOSE_LOCATION_SUCCESS,
    data,
  };
};
const chooseLocationFailure = () => {
  return {
    type: actionTypes.CHOOSE_LOCATION_FAILURE,
  };
};

export const chooseLocationHandler = (id) => (dispatch) => {
  dispatch(chooseLocationRequest());
  return axios
    .get(`http://localhost:8080/location/${id}/bikes`)
    .then((res) => dispatch(chooseLocationSuccess(res.data.data)))
    .catch((err) => dispatch(chooseLocationFailure()));
};
