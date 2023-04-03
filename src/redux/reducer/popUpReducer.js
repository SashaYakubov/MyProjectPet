import {
    AUTH,
    CHANGE_NAME,
    DATA_STATE,
    IS_LOADING, IS_SHOW_POP_UP,
    POPUP_TYPE,
    REG,
    REQUEST_STATUS,
    SAVE_DATA, SET_POSTS, SET_RESPONSE
} from "../actions/popUpActions";
import {getAuth} from "firebase/auth";

const initialState = {
    data: {
        name: '',
        password: '',
        email: '',
    },
    response: {},
    type: 'signUp',
    requestReady: null,
    isLoading: true,
    posts: [],
    isShowPopUp: false,
};

export const popUpReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH:
            return {...state, response: action.payload};
        case SAVE_DATA:
            return {...state, data: action.payload};
        case POPUP_TYPE:
            if (state.type === action.payload)
                return state;
            else return {...initialState, type: action.payload, isLoading: state.isLoading, isShowPopUp: state.isShowPopUp};
        case DATA_STATE:
            return {...state, isDataOk: action.payload};
        case REQUEST_STATUS:
            return {...state, requestReady: action.payload};
        case REG:
            return {...state, response: action.payload};
        case IS_LOADING:
            return {...state, isLoading: action.payload};
        case SET_RESPONSE:
            return {...state, response: action.payload};
        case SET_POSTS:
            return {...state, posts: [...action.payload]};
        case IS_SHOW_POP_UP:
            return {...state, isShowPopUp: action.payload};
        default:
            return state;

    }
};