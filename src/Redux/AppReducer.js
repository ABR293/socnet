import {authentication} from "./AuthReducer";


const SET_INITIALIZE = 'socNet/app/SET-INITIALIZE';


let initialState = {
    initialized: false,
};


const appReducer = (state = initialState, action ) =>{
    switch (action.type){
        case SET_INITIALIZE :
            return{
                ...state,
                initialized: true
            };
        default:
            return{
                ...state
            };
    }
};

export const initializedSucces = () => ({type: SET_INITIALIZE});


export const initializeApp = () => (dispatch) => {
    let promise = dispatch(authentication());
    promise.then(() => {dispatch(initializedSucces())})
    ;

};

export default appReducer;