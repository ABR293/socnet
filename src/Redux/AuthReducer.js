const SET_USER_DATA = 'SET-USER-DATA';



let initialState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false


};

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_USER_DATA: {
            return{
                ...state,
                userId: action.data.userId,
                login: action.data.login,
                email: action.data.email,
                isAuth: true,
            };
        }
        default:
            return{
                ...state
            };
    }
};

export const setAuthUserData = (data) => ({type: SET_USER_DATA, data});

export default authReducer;