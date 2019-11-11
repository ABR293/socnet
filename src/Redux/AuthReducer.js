import {authAPI} from "../API/API";
import {stopSubmit} from "redux-form";
const SET_USER_DATA = 'SET-USER-DATA';


let initialState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false


};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                userId: action.data.userId,
                login: action.data.login,
                email: action.data.email,
                isAuth: action.isAuth,
            };
        }
        default:
            return {
                ...state
            };
    }
};

export const setAuthUserData = (data, isAuth) => ({type: SET_USER_DATA, data, isAuth});

export const authentication = () => (dispatch) => {
    return authAPI.authMe()
        .then(data => {
                if (data.resultCode === 0) {
                    dispatch(setAuthUserData(data.data, true)
                    );
                }
            }
        );
};
export const login = (email, password, rememberMe ) => (dispatch) => {
    authAPI.login(email, password, rememberMe )
        .then(data => {
            console.log(data);
            if (data.resultCode === 0) {
                dispatch(authentication())
            }
            else {
                let action = stopSubmit('login', {_error:'email or password is wrong'});
                dispatch(action);
            }
        })
};
export const logout = () => (dispatch) => {
    let data = { userId:null, login:null, email:null};
    authAPI.logout()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(data, false))
            }

        })
};


export default authReducer;