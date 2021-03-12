import * as actionTypes from "./ActionTypes";

const initState = {
  isLoading: false,
  isError: false,
};

export const transactionsReducer = (state = initState, { type }) => {
  switch (type) {
    case actionTypes.RENTALS_REQUEST: {
      return {
        isLoading: true,
      };
    }
    case actionTypes.RENTALS_SUCCESS: {
      return {
        isLoading: false,
      };
    }
    case actionTypes.RENTALS_FAILURE: {
      return {
        isLoading: false,
        isError: true,
      };
    }

    case actionTypes.MONTHLY_REQUEST: {
      return {
        isLoading: true,
      };
    }
    case actionTypes.MONTHLY_SUCCESS: {
      return {
        isLoading: false,
      };
    }
    case actionTypes.MONTHLY_FAILURE: {
      return {
        isLoading: false,
        isError: true,
      };
    }
    default:
      return state;
  }
};
