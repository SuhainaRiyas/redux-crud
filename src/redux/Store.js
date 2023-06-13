import { applyMiddleware, combineReducers, configureStore } from "@reduxjs/toolkit";
import { studentData } from "./Reducer";
import thunk from "redux-thunk";
import logger from "redux-logger";

const rootReducer = combineReducers({studentData:studentData})
const Store = configureStore({reducer:rootReducer}, applyMiddleware(thunk,logger))
export default Store;