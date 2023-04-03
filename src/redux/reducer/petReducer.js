import {combineReducers} from "redux";
import {popUpReducer} from "./popUpReducer";


export const rootReducer = combineReducers(
    {
        popUp: popUpReducer,
    }
);