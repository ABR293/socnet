import {ProfileAPI} from "../API/API";
import {stopSubmit} from "redux-form";
//import {getState} from "redux-thunk";
const ADD_POST = "socNet/profile/ADD-POST";
const CHANGE_POST_TEXT = "socNet/profile/CHANGE-POST-TEXT";
const SET_USER_PROFILE = "socNet/profile/SET-USER-PROFILE";
const TOGGLE_IS_FETCHING = "socNet/profile/TOGGLE-IS-FETCHING";
const SET_STATUS = "socNet/profile/SET-STATUS";
const SAVE_PHOTO_SUCCESS = "SAVE-PHOTO-SUCCESS";

export const setStatus = (status: string ) => ({type: SET_STATUS, status: status});
export const addPost = (message: string) => ({type: ADD_POST, message: message});
export const changeText = (text: string) => ({type: CHANGE_POST_TEXT, text: text});
export const setUserProfile = (data: any) => ({type: SET_USER_PROFILE, data});
export const toggleFetching = (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const savePhotoSuccess = (photo: any) => ({type:SAVE_PHOTO_SUCCESS , photo: photo});

let initialState = {
    id: 4986 as number | null,
    fullName: "" as string,
    status: '' as string,
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

export const profileReducer = (state = initialState, action: any) => {

    switch (action.type) {
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
                isFetching: action.isFetching
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
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

export const setProfile = (userId:number ) => async(dispatch: any) => {
    dispatch(toggleFetching(true));
    let response = await ProfileAPI.setProfile(userId);
        //console.log(response);
        dispatch(setUserProfile(response));
        dispatch(toggleFetching(false));
};
export const setUserStatus = (id: number) => async (dispatch:any) => {
    let response = await ProfileAPI.getStatus(id);
    dispatch(setStatus(response))
};


export const updateUserStatus = (status: string) => async (dispatch:any) => {
    let response = await ProfileAPI.updateStatus(status);
    !response.data.resultCode && dispatch(setStatus(status))
};
export const savePhoto = (photo: any) => async(dispatch:any) => {
    let response = await ProfileAPI.savePhoto(photo);
    console.log(response);
    !response.data.resultCode && dispatch(savePhotoSuccess(response.data.data.photos))
};
export const saveProfile = (profile:any ) => async(dispatch: any , getState: any) => {
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
