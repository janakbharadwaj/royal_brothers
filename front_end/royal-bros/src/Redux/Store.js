import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { tarrifReducer } from "./Tarrif/TarrifReducer";
import bikeReducer from "./Bikes/bikeReducer";
import { authReducer } from "./Auth/authReducer";
import bikeFilterReducer from "./BikesFilter/reducer"
const rootReducer = combineReducers({
  tarrifReducer,
  bikes: bikeReducer,
  authReducer,
  bikesFilter:bikeFilterReducer
});

let composeEnhancers = compose;

if (process.env.NODE_ENV !== "production") {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;
}

const enhancer = composeEnhancers(applyMiddleware(thunk));

const store = createStore(rootReducer, enhancer);

export default store;
