import * as actionTypes from "./ActionTypes";

const initState = {
  isLoading: false,
  isError: false,
  data: [],
};

export const tarrifReducer = (state = initState, { type, data }) => {
  switch (type) {
    case actionTypes.GET_BIKES_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case actionTypes.GET_BIKES_SUCCESS: {
      return {
        ...state,
        data: data,
        isLoading: false,
      };
    }
    case actionTypes.GET_BIKES_FAILURE: {
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
