import {userAPI} from "../API/API";

const FOLLOW = "socNet/userPage/FOLLOW";
const UNFOLLOW = "socNet/userPage/UNFOLLOW";
const SET_USERS = "socNet/userPage/SET-USERS";
const CHANGE_PAGE = "socNet/userPage/CHANGE-PAGE";
const SET_TOTAL_USERS_COUNT = "socNet/userPage/SET-TOTAL-USER-COUNT";
const TOGGLE_IS_FETCHING = "socNet/userPage/TOGGLE-IS-FETCHING";
const FOLLOWING_IN_PROGRESS = "socNet/userPage/FOLLOWING-IN-PROGRESS";

let initialState = {
    users:[ ],
    pageSize: 5,
    totalUserCount: 0,
    curentPage: 1,
    isFetching: true,
    status: '',
    isFollowing: [],

};



export const userReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map((user) =>{
                    if (user.id === action.userId){
                        return {...user, followed: true}
                    } else {return(user)}
            })
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map((user) =>{
                    if (user.id === action.userId){
                        return {...user, followed: false}
                    }  else {return(user)}
                })
            }
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
                curentPage: action.number,
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
            return state
        }
    }
};
    export const follow = (userId) => ({type: FOLLOW, userId});
    export const unfollow = (userId) => ({type: UNFOLLOW, userId});
    export const setUsers = (users) => ({type: SET_USERS, users});
    export const changePage = (number) => ({type: CHANGE_PAGE, number});
    export const setTotalUserCount = (number) =>({type: SET_TOTAL_USERS_COUNT , number});
    export const toggleFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
    export const followingInProgress = (isFollowing, userId) => ({type: FOLLOWING_IN_PROGRESS, isFollowing, userId});

export const getUsers = (curentPage, pageSize) => {
    return async (dispatch) => {
        dispatch(toggleFetching(true));
        let data = await userAPI.getUsers(curentPage, pageSize);
        dispatch(setUsers(data.items));
        dispatch(setTotalUserCount(data.totalCount));
        dispatch(toggleFetching(false));
    }
};


const toggleFollowUser = async(dispatch, APIMethod, ActionCreator, id) => {
    dispatch(followingInProgress(true, id));
    let data = await APIMethod(id);
    if (data.resultCode === 0) {
        dispatch(ActionCreator(id))
    }
    dispatch(followingInProgress(false, id));

};

export const unfollowUser = (id) => {
    return async (dispatch) => toggleFollowUser(dispatch, id, userAPI.unfollowUser.bind(userAPI), unfollow)
};


export const followUser = (id) => {
    return async (dispatch) => toggleFollowUser(dispatch, id, userAPI.followUser.bind(userAPI), follow)
};