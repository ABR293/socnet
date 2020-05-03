import {authentication} from "./AuthReducer";


const SET_INITIALIZE = 'socNet/app/SET-INITIALIZE';


export type InintialStateType = {
    initialized: boolean
}

let initialState:InintialStateType = {
    initialized: false,
};

const appReducer = (state:InintialStateType = initialState, action:any ) : InintialStateType => {
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

type InitializedSuccesActionType = {
    type: typeof SET_INITIALIZE
}



export const initializedSucces = () => ({type: SET_INITIALIZE});


export const initializeApp = () => (dispatch: any) => {
    let promise = dispatch(authentication());
    promise.then(() => {dispatch(initializedSucces())})
    ;

};

export default appReducer;