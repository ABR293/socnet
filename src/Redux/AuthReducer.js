import {authAPI, securityAPI} from "../API/API";
import {stopSubmit} from "redux-form";
const SET_USER_DATA = 'socNet/Auth/SET-USER-DATA';
const GET_CAPTCHA_URL_SUCCESS = 'socNet/Auth/GET-CAPTCHA-URL-SUCCESS';



let initialState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false,
    captchaURL: '',


};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                userId: action.data.id,
                login: action.data.login,
                email: action.data.email,
                isAuth: action.isAuth,
            };
        }
        case GET_CAPTCHA_URL_SUCCESS: {
            return {
                ...state,
                captchaURL: action.url
            };
        }
        default:
            return {
                ...state
            };
    }
};
export const getCapthaURLSuccess = (url) => ({type: GET_CAPTCHA_URL_SUCCESS, url});
export const setAuthUserData = (data, isAuth) => ({type: SET_USER_DATA, data, isAuth});

export const authentication = () => async (dispatch) => {
    let data = await authAPI.authMe();
    if (data.resultCode === 0) {
        dispatch(setAuthUserData(data.data, true));
    }
};
export const login = (email, password, rememberMe) => async (dispatch) => {
    let data = await authAPI.login(email, password, rememberMe);

    if (data.resultCode === 0) {
        dispatch(authentication())
    } else {
        let action = stopSubmit('login', {_error: 'email or password is wrong'});
        dispatch(action);
    }
};

export const getCapthaURL = () => async (dispatch) => {
    const response = await securityAPI.getCaptchaURL();
    dispatch(getCapthaURLSuccess(response.data.url));
};

export const logout = () => async (dispatch) => {
    let data = {userId: null, login: null, email: null};
    let response = await authAPI.logout();
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(data, false))
    }

};


export default authReducer;