import * as actionTypes from "./actionTypes";

const initState = {
  isLoading: false,
  isError: false,
  ordersData: [],
  monthsData: [],
};

export const userReducer = (state = initState, { type, data }) => {
  switch (type) {
    case actionTypes.GET_RENTALS_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case actionTypes.GET_RENTALS_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        ordersData: data,
      };
    }
    case actionTypes.GET_RENTALS_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case actionTypes.GET_MONTHLY_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case actionTypes.GET_MONTHLY_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        monthsData: data,
      };
    }
    case actionTypes.GET_MONTHLY_FAILURE: {
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
