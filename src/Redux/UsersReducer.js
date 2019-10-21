const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const CHANGE_PAGE = "CHANGE-PAGE";
const SET_TOTAL_USERS_COUNT = "SET-TOTAL-USER-COUNT";

let initialState = {
    users:[ ],
    pageSize: 5,
    totalUserCount: 0,
    curentPage: 1,

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
        default: {
            return state
        }
    }
};
    export const followAC = (userId) => ({type: FOLLOW, userId});
    export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});
    export const setUsersAC = (users) => ({type: SET_USERS, users});
    export const changePageAC = (number) => ({type: CHANGE_PAGE, number});
    export const setTotalUserCountAC = (number) =>({type: SET_TOTAL_USERS_COUNT , number});


/*
[
    {   id: 8768678,
        fullname: "Dimon",
        followed: true,
        src:"https://img2.akspic.ru/image/146213-tigr-hishhnik-zivotnoe-bengalskij_tigr-bakenbardy-2880x1800.jpg",
        status:'I`l be back',
        location:{country:'Russia', city:'Moscow'}},
    {
        id: 4543535,
        fullname: "Anton",
        followed: true,
        src:"https://s1.1zoom.ru/big7/93/Nissan_Autumn_Yellow_340564.jpg",
        status:'YOU!!! YOU!!!!',
        location:{country:'Russia', city:'Smolensk'}},
    {
        id: 2343242,
        fullname: "Misha",
        followed: false,
        src:'https://www.nastol.com.ua/pic/201305/1920x1200/nastol.com.ua-48872.jpg',
        status:'Memento mori.....',
        location:{country:'Ukraine', city:'Kiev'}},
    {
        id: 2343257,
        fullname: "Karlos",
        followed: false,
        src:"https://www.nastol.com.ua/pic/201305/2560x1600/nastol.com.ua-48150.jpg",
        status:'Like a Boss!!!',
        location:{country:'Germany', city:'Munich'}}
]*/
