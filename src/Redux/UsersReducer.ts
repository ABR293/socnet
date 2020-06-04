import {userAPI} from "../API/UserAPI";
import { SetAuthUserDataAction } from "./AuthReducer";
import { Dispatch, ActionCreator } from "redux";
import { ThunkAction } from "redux-thunk";
import { AppStateType } from "./Store";

const FOLLOW = "socNet/userPage/FOLLOW";
const UNFOLLOW = "socNet/userPage/UNFOLLOW";
const SET_USERS = "socNet/userPage/SET-USERS";
const CHANGE_PAGE = "socNet/userPage/CHANGE-PAGE";
const SET_TOTAL_USERS_COUNT = "socNet/userPage/SET-TOTAL-USER-COUNT";
const TOGGLE_IS_FETCHING = "socNet/userPage/TOGGLE-IS-FETCHING";
const FOLLOWING_IN_PROGRESS = "socNet/userPage/FOLLOWING-IN-PROGRESS";

export type User = {
    id: number
    name: string
    followed: boolean
}

let initialState = {
    users:[ ] as any[]  ,
    pageSize: 8 as number,
    totalUserCount: 0 as number,
    currentPage: 1 as number,
    isFetching: true as boolean,
    status: '' as string,
    isFollowing: [] as Array<any>,

};
export type FollowActionType = {
    type: typeof FOLLOW
    userId: number
}
export type UnfollowActionType = {
    type: typeof UNFOLLOW
    userId: number
}
export type SetUserActionType = {
    type: typeof SET_USERS
    users: Array<any>
}
export type ChangePageActionType = {
    type: typeof CHANGE_PAGE
    number: number
}
export type SetTotalUserCountActionType = {
    type: typeof SET_TOTAL_USERS_COUNT
    number: number
}
export type ToggleFetchingActionType = {
    type: typeof TOGGLE_IS_FETCHING
    isFetching: boolean
}
export type FollowingInProgressActionType = {
    type: typeof FOLLOWING_IN_PROGRESS
    isFollowing: boolean
    userId: number
}

    export const follow = (userId: number):FollowActionType => ({type: FOLLOW, userId});
    export const unfollow = (userId: number):UnfollowActionType => ({type: UNFOLLOW, userId});
    export const setUsers = (users:Array<any>):SetUserActionType => ({type: SET_USERS, users});
    export const changePage = (number: number):ChangePageActionType => ({type: CHANGE_PAGE, number});
    export const setTotalUserCount = (number: number):SetTotalUserCountActionType =>({type: SET_TOTAL_USERS_COUNT , number});
    export const toggleFetching = (isFetching: boolean):ToggleFetchingActionType => ({type: TOGGLE_IS_FETCHING, isFetching});
    export const followingInProgress = (isFollowing: boolean, userId: number):FollowingInProgressActionType => ({type: FOLLOWING_IN_PROGRESS, isFollowing, userId});

type ActionTypes = FollowingInProgressActionType | UnfollowActionType | SetAuthUserDataAction | ChangePageActionType | 
SetTotalUserCountActionType | ToggleFetchingActionType | FollowingInProgressActionType | FollowActionType | SetUserActionType

export type InitialStateType = typeof initialState

export const userReducer = (state:InitialStateType = initialState, action:ActionTypes) : InitialStateType => {

    switch (action.type) {
        case FOLLOW: {
            let newUsers:Array<any> = state.users.map((user) =>{
                if (user.id === action.userId){
                    return {...user, followed: true}
                } else {return(user)}})
            return {...state, users: [...newUsers]}
        }
        case UNFOLLOW: {
            let newUsers:Array<any> =  state.users.map((user) =>{
                if (user.id === action.userId){
                    return {...user, followed: false}
                }  else {return(user)}
            })
            return {...state, users: newUsers }
        }
        case SET_USERS:{
            return{
                ...state,
                users: [...action.users]
            }
        }
        case CHANGE_PAGE:{
            return{
                ...state,
                currentPage: action.number,
            }
        }
        case SET_TOTAL_USERS_COUNT:{
            return{
                ...state,
                totalUserCount: action.number
            }
        }
        case TOGGLE_IS_FETCHING:{
            return{
                ...state,
                isFetching: action.isFetching
            }
        }
        case FOLLOWING_IN_PROGRESS:{
            return {
                ...state,
                isFollowing: action.isFollowing
                    ? [...state.isFollowing, action.userId]
                    : state.isFollowing.filter(id => {return(id !== action.userId)})
            }
        }
        default: {
            return state; 
        }
    }
};

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionTypes>

export const getUsers = (curentPage: number, pageSize: number):ThunkType => {
    return async (dispatch:Dispatch<ActionTypes>) => {
        dispatch(toggleFetching(true));
        let data = await userAPI.getUsers(curentPage, pageSize);
        dispatch(setUsers(data.items));
        dispatch(setTotalUserCount(data.totalCount));
        dispatch(toggleFetching(false));
    }
};


const _toggleFollowUser = async(dispatch:Dispatch<ActionTypes>, APIMethod: any, ActionCreator: (userId: number) => ActionTypes, id: number) => {
    dispatch(followingInProgress(true, id))
    let data = await APIMethod(id);
    if (data.resultCode === 0) {
        dispatch(ActionCreator(id))
    }
    dispatch(followingInProgress(false, id));

};

export const unfollowUser = (id: number):ThunkType => {
    return async (dispatch: Dispatch<ActionTypes>) => _toggleFollowUser(dispatch, userAPI.unfollowUser.bind(userAPI), unfollow, id)
};

export const followUser = (id: number):ThunkType => {
    return async (dispatch: Dispatch<ActionTypes>) => _toggleFollowUser(dispatch, userAPI.followUser.bind(userAPI), follow, id)
};