const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";

let initialState = {
    users:[
        {id: 8768678, fullname: "Dimon", status:'', location:{country:'Russia', city:'Moscow'}},
        {id: 4543535, fullname: "Anton", status:'', location:{country:'Russia', city:'Smolensk'}},
        {id: 2343242, fullname: "Misha", status:'', location:{country:'Ukraine', city:'Kiev'}},
        {id: 2343242, fullname: "Karl", status:'', location:{country:'Germany', city:'Munich'}}
    ]
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
                users: [...state.users, ...action.users]
            }
        }
        default: {
            return state
        }
    }
};
    export const followAC = (userId) => ({type: FOLLOW, userId});
    export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});
    export const setUsersAC = (userId) => ({type: UNFOLLOW, userId});

