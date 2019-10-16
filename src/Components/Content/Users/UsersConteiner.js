import React from "react";
import Users from "./Users";
import {connect} from "react-redux";
import {followAC, setUsersAC, unfollowAC} from "../../../Redux/UsersReducer";


let mapStateToProps = (state) =>{
    return{
        users: state.usersPage.users
    }
};
let userId = 5;
let mapDispatchToProps = (dispatch) => {
    return{
        folow:()=>{dispatch(followAC(userId))},
        unfolow:()=>{dispatch(unfollowAC(userId))},
        setUsers:()=>{dispatch(setUsersAC(userId))}
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Users)