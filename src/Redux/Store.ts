import {applyMiddleware, combineReducers, createStore} from "redux";
import {profileReducer} from "./ProfileReducer";
import {dialogsReducer} from "./DialogReducer";
import {userReducer} from "./UsersReducer";
import authReducer from "./AuthReducer";
import thunkMiddleware from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';
import appReducer from "./AppReducer";

  
let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: userReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer,
});

export type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>

let state:AppStateType

let store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

//@ts-ignore
window.store = store
//@ts-ignore
window.state = store.getState()


export default store;