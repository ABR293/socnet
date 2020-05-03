import {authAPI, securityAPI} from "../API/API"
import {stopSubmit} from "redux-form"
const SET_USER_DATA = 'socNet/Auth/SET-USER-DATA'
const GET_CAPTCHA_URL_SUCCESS = 'socNet/Auth/GET-CAPTCHA-URL-SUCCESS'


let initialState = {
    userId: null as number | null,
    login: null as string | null,
    email: null as string | null,
    isAuth: false as boolean,
    captchaURL: '' as string | null,
};

export type InitialStateType = typeof initialState

const authReducer = (state: InitialStateType = initialState, action:any) :InitialStateType => {
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

export type GetCapthaURLActoion = {
    type: typeof GET_CAPTCHA_URL_SUCCESS
    url: string
}

export type SetAuthUserDataAction = {
    type: typeof SET_USER_DATA
    data: any
    isAuth: boolean
}

export const getCapthaURLSuccess = (url: string): GetCapthaURLActoion => ({type: GET_CAPTCHA_URL_SUCCESS, url});
export const setAuthUserData = (data:any, isAuth:boolean): SetAuthUserDataAction => ({type: SET_USER_DATA, data, isAuth});


export const authentication = () => async (dispatch:any) => {
    let data = await authAPI.authMe();
    if (data.resultCode === 0) {
        dispatch(setAuthUserData(data.data, true));
    }
};
export const login = (email:string, password:string, rememberMe:boolean, captcha:any) => async (dispatch:any) => {
    let data = await authAPI.login(email, password, rememberMe, captcha);

    if (data.resultCode === 0) {
        dispatch(authentication())
    } else {
        if (data.resultCode === 10){
            dispatch(getCapthaURL())
        }
        let action = stopSubmit('login', {_error: 'email or password is wrong'});
        dispatch(action);
    }
};

export const getCapthaURL = () => async (dispatch:any) => {
    const response = await securityAPI.getCaptchaURL();
    dispatch(getCapthaURLSuccess(response.data.url));
};

export const logout = () => async (dispatch:any) => {
    let data = {userId: null, login: null, email: null};
    let response = await authAPI.logout();
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(data, false))
    }

};


export default authReducer;