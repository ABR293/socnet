import {userAPI} from "../API/API";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const CHANGE_PAGE = "CHANGE-PAGE";
const SET_TOTAL_USERS_COUNT = "SET-TOTAL-USER-COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING";
const FOLLOWING_IN_PROGRESS = "FOLLOWING-IN-PROGRESS";

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
    return ((dispatch) => {

        dispatch(toggleFetching(true));
        userAPI.getUsers(curentPage, pageSize)
            .then((data) => {
                dispatch(setUsers(data.items));
                dispatch(setTotalUserCount(data.totalCount));
                dispatch(toggleFetching(false));
            });

    })
};
export const unfollowUser = (id) => {
    return ((dispatch) => {
        dispatch(followingInProgress(true, id));
        userAPI.unfollowUser(id)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(unfollow(id))
                }
                dispatch(followingInProgress(false, id));
            });
    });
};

export const followUser = (id) => {
    return ((dispatch) => {
            dispatch(followingInProgress(true, id));
            userAPI.followUser(id)
                .then(data => {
                        if (data.resultCode === 0) {
                            dispatch(follow(id))
                        }
                        dispatch(followingInProgress(false, id));
                    }
                )

        }

    )

}