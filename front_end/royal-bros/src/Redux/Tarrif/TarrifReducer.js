import * as actionTypes from "./ActionTypes";

const initState = {
  isLoading: false,
  isError: false,
  currentLocation: {},
  allBikes: [],
  allLocations: [],
};

export const tarrifReducer = (state = initState, { type, data }) => {
  switch (type) {
    case actionTypes.GET_LOCATION_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case actionTypes.GET_LOCATION_SUCCESS: {
      return {
        ...state,
        allLocations: data.data,
        isLoading: false,
      };
    }
    case actionTypes.GET_LOCATION_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }

    case actionTypes.CHOOSE_LOCATION_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case actionTypes.CHOOSE_LOCATION_SUCCESS: {
      return {
        ...state,
        currentLocation: data.location,
        allBikes: data.bikes,
        isLoading: false,
      };
    }
    case actionTypes.CHOOSE_LOCATION_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }

    default:
      return state;
  }
};
