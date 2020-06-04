import {ProfileAPI} from "../API/ProfileAPI";
import {stopSubmit} from "redux-form";
import { ChangePageActionType } from "./UsersReducer";
import { AppStateType } from "./Store";
import { Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
//import {getState} from "redux-thunk";
const ADD_POST = "socNet/profile/ADD-POST";
const CHANGE_POST_TEXT = "socNet/profile/CHANGE-POST-TEXT";
const SET_USER_PROFILE = "socNet/profile/SET-USER-PROFILE";
const TOGGLE_IS_FETCHING = "socNet/profile/TOGGLE-IS-FE TCHING";
const SET_STATUS = "socNet/profile/SET-STATUS";
const SAVE_PHOTO_SUCCESS = "socNet/profile/SAVE-PHOTO-SUCCESS";

type SetStatusActionType = {
    type: typeof SET_STATUS
    status: string | null
}
type AddPostActionType = {
    type: typeof ADD_POST
    message: string
}
type ChangeTextActionType = {
    type: typeof CHANGE_POST_TEXT
    text: string
}
type SetUserProfileActionType = {
    type: typeof SET_USER_PROFILE
    data: any
}
type ToggleFetchingActionType = {
    type: typeof TOGGLE_IS_FETCHING
    isFetching: boolean
}
type SavePhotoSuccessActionType = {
    type: typeof SAVE_PHOTO_SUCCESS
    photo: any
}
export const setStatus = (status: string | null): SetStatusActionType => ({type: SET_STATUS, status: status});
export const addPost = (message: string): AddPostActionType => ({type: ADD_POST, message: message});
export const changeText = (text: string): ChangeTextActionType => ({type: CHANGE_POST_TEXT, text: text});
export const setUserProfile = (data: any): SetUserProfileActionType => ({type: SET_USER_PROFILE, data});
export const toggleFetching = (isFetching: boolean): ToggleFetchingActionType => ({type: TOGGLE_IS_FETCHING, isFetching});
export const savePhotoSuccess = (photo: any): SavePhotoSuccessActionType => ({type: SAVE_PHOTO_SUCCESS, photo: photo});

type ActionTypes = SetUserProfileActionType | AddPostActionType | ChangePageActionType | SetStatusActionType |
SetUserProfileActionType | ToggleFetchingActionType | SetUserProfileActionType | SavePhotoSuccessActionType 
 
let initialState = {
    id: 4986 as number,
    fullName: "" as string,
    status: '' as string | null,
    isFetching: false as boolean,
    userId: 4986 as number | null,
    avatar: '' as string,
    lookingForAJob: false as boolean,
    lookingForAJobDescription: '' as string,
    aboutMe: '' as string,
    contacts: {
        facebook: null as string | null,
        github: null as string | null,
        instagram: null   as string | null,
        mainLink: null  as string | null,
        twitter: null  as string | null,
        vk: null  as string | null,
        website: null  as string | null,
        youtube: null  as string | null,
    },
    PostText: '',
    posts: [
        {id: 49861, fullName: 'sdsadas', message: "Hello People"},
        {id: 49862, fullName: 'rewe', message: "Have a nice day!!"},
        {id: 49863, fullName: 'sdsadas', message: "Everything is good!!"},
    ]
};

export type initialStateType = typeof initialState

export const profileReducer = (state = initialState, action: ActionTypes ) => {

    switch (action.type) {
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        case ADD_POST: {
            return {
                ...state,
                posts: [{id: 49864, fullName: 'Vaso', message: action.message,}, ...state.posts],
            };

        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                id: action.data.userId,
                avatar: action.data.photos.small,
                fullName: action.data.fullName,
                lookingForAJob: action.data.lookingForAJob,
                lookingForAJobDescription: action.data.lookingForAJobDescription,
                aboutMe: action.data.aboutMe,
                contacts: {...action.data.contacts},
                photos:{...action.data.photos},
            }
        }
        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action. isFetching
            }
        }
        case SAVE_PHOTO_SUCCESS: {
            return {
                ...state,
                photo: action.photo
            }
        }
        default: {
            return state
        }
    }
};


type getStateType = () => AppStateType
type DispatchType = Dispatch<ActionTypes>
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionTypes>

export const setProfile = (userId:number | null):ThunkType=> async(dispatch:DispatchType) => {
    dispatch(toggleFetching(true));
    let response = await ProfileAPI.setProfile(userId);
        //console.log(response);
        dispatch(setUserProfile(response));
        dispatch(toggleFetching(false));
};
export const setUserStatus = (id: number):ThunkType => async (dispatch:DispatchType) => {
    let response = await ProfileAPI.getStatus(id);
    dispatch(setStatus(response))
};


export const updateUserStatus = (status: string):ThunkType => async (dispatch:DispatchType) => {
    let response = await ProfileAPI.updateStatus(status);
    !response.data.resultCode && dispatch(setStatus(status))
};
export const savePhoto = (photo: any):ThunkType => async(dispatch:DispatchType) => {
    let response = await ProfileAPI.savePhoto(photo);
    console.log(response);
    !response.data.resultCode && dispatch(savePhotoSuccess(response.data.data.photos))
};

// It`s need to get more information, about types and how to to make types of this thunk

export const saveProfile = (profile:any ):ThunkType => async(dispatch:any , getState: () => AppStateType) => {
    const userId = getState().auth.userId;
    let response = await ProfileAPI.saveProfile(profile);
    console.log(response);
    if (response.data.resultCode === 0) {
        dispatch(setProfile(userId));
    } else {
        dispatch(stopSubmit("edit-profile", {_error: response.data.messages[0]}));
        return Promise.reject(response.data.messages[0]);
    }
};
//fffffffffffffffffffffffffffffffffffffffffffffffffff
/*
}
case SAVE_PHOTO_SUCCESS: {
    return {
        ...state,
        photo: action.photo
    }
}
default: {
    return state
}

}
};


export const setProfile = (userId) => async (dispatch) => {
    dispatch(toggleFetching(true));
    let response = ProfileAPI.setProfile(userId);
    dispatch(setUserProfile(response.data));
    dispatch(toggleFetching(false));
};
export const setUserStatus = (id) => async (dispatch) => {
    let response = await ProfileAPI.getStatus(id);
    dispatch(setStatus(response.data))
};


export const updateUserStatus = (status) => async (dispatch) => {
    let response = await ProfileAPI.updateStatus(status);
    !response.data.resultCode && dispatch(setStatus(status))
};
export const savePhoto = (photo) => async(dispatch) => {
    let response = await ProfileAPI.savePhoto(photo);
    console.log(response);
    !response.data.resultCode && dispatch(savePhotoSuccess(response.data.data.photos))
};
*/
