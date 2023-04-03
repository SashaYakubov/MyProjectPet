import {applyMiddleware, createStore} from "redux";
import {rootReducer} from "../reducer/petReducer";
import {thunkEnhancer} from "../../enchancer/thunkEnhancer";
import {logger} from "redux-logger/src";

export const store = createStore(rootReducer, applyMiddleware(thunkEnhancer, logger));

