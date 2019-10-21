
import Users from "./Users";
import {connect} from "react-redux";
import {changePageAC, followAC, setTotalUserCountAC, setUsersAC, unfollowAC} from "../../../Redux/UsersReducer";


let mapStateToProps = (state) =>{
    return{
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        curentPage: state.usersPage.curentPage,




    }
};

let mapDispatchToProps = (dispatch) => {
    return{
        follow:(userId)=>{dispatch(followAC(userId))},
        unfollow:(userId)=>{dispatch(unfollowAC(userId))},
        setUsers:(users)=>{dispatch(setUsersAC(users))},
        changePage:(number)=>{dispatch(changePageAC(number))},
        setTotalUserCount: (number)=>{dispatch(setTotalUserCountAC(number))},
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Users)