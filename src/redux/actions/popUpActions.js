import {login, registration} from "../../firebase/auth-service";

export const AUTH = 'AUTH';
export const SAVE_DATA = 'SAVE_DATA';

export const POPUP_TYPE = 'POPUP_TYPE';
export const REG = 'REG';

export const DATA_STATE = 'DATA_STATE';
export const REQUEST_STATUS = 'REQUEST_STATUS';
export const CHANGE_NAME = 'CHANGE_NAME';
export const IS_LOADING = 'IS_LOADING';
export const SET_RESPONSE = 'SET_RESPONSE';
export const SET_POSTS = 'SET_POSTS';
export const IS_SHOW_POP_UP = 'IS_SHOW_POP_UP';


export const setResponseAction = (response) => ({
    type: SET_RESPONSE,
    payload: response,
});

export const signInAction = (b) => ({
    type: AUTH,
    payload: b,
});


export const signInAsyncAction = (data) => {
    return dispatch => {
        console.log(data.email, data.password);
        login(data.email, data.password)
            .then(res => dispatch(signInAction(true)))
            .catch(res => dispatch(signInAction(false)))
    }
};

export const saveDataAction = (data) => ({
    type: SAVE_DATA,
    payload: data,
});

export const changeTypePopUpAction = (type) => ({
    type: POPUP_TYPE,
    payload: type,
});

export const signUpAction = (b) => ({
    type: REG,
    payload: b,
});


export const signUpAsyncAction = (data) => {
    return dispatch => {
        if (data.name.length === 0 || data.email.length === 0 || data.password.length === 0) {
            dispatch(changeRequestStatusAction(false));
            console.log('lo kef')
        } else {
            dispatch(changeRequestStatusAction(true));
            dispatch(signUpAction(registration(data.email, data.password, data.name)));
        }
    }
};

export const changeRequestStatusAction = (isReady) => ({
    type: REQUEST_STATUS,
    payload: isReady,
});

export const changeDataStateAction = (dataState) => ({
    type: DATA_STATE,
    payload: dataState,
});

export const changeIsLoadingAction = (isLoading) => ({
    type: IS_LOADING,
    payload: isLoading,
});


export const setPostsAction = (posts) => ({
    type: SET_POSTS,
    payload: posts,
});

export const showPopUpAction = (show) => ({
    type: IS_SHOW_POP_UP,
    payload: show,
});


// export const changeNameAsyncAction = (name) =>{
//     return dispatch =>{
//         updateP
//         dispatch(changeNameAction(name));
//     }
// };
//
// export const changeNameAction = (name) =>({
//
// });

