import axios from "axios";
import * as actionTypes from "./ActionTypes";

const getBikesRequest = () => {
  return {
    type: actionTypes.GET_BIKES_REQUEST,
  };
};

const getBikesSuccess = (data) => {
  return {
    type: actionTypes.GET_BIKES_SUCCESS,
    data,
  };
};
const getBikesFailure = () => {
  return {
    type: actionTypes.GET_BIKES_FAILURE,
  };
};

export const getBikesHandler = () => (dispatch) => {
  dispatch(getBikesRequest());
  return axios
    .get("http://localhost:8080/bikes")
    .then((res) => dispatch(getBikesSuccess(res.data.data)))
    .catch((err) => getBikesFailure());
};
