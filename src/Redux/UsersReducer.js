const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const CHANGE_PAGE = "CHANGE-PAGE";
const SET_TOTAL_USERS_COUNT = "SET-TOTAL-USER-COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING";

let initialState = {
    users:[ ],
    pageSize: 5,
    totalUserCount: 0,
    curentPage: 1,
    isFetching: true

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