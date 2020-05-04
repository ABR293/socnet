import {connect} from 'react-redux';
import {
    followUser, getUsers,
    setTotalUserCount,
    changePage,
    setUsers,
    unfollowUser
} from '../../../Redux/UsersReducer';
import React from 'react';
import Users from './Users';
import Preloader from "../../Common/Preloader";
import {Redirect} from "react-router-dom/";
import {WithAuthRedirect} from "../../../hoc/withAuthRedirect";
import {compose} from "redux";
//import User from 
import {
    getCurrentPage,
    getIsFetching,
    getIsFollowing,
    getPageSize,
    getTotalUserCount,
    //getUsersList,
    getUsersListSuper
} from "../../../Redux/UserSelectors";
import { AppStateType } from '../../../Redux/Store';

type MapStatePropsType = {
    users: Array<any>
    pageSize: number
    isAuth: boolean
    totalUserCount: number
    currentPage: number
    isFetching:boolean
    isFollowing: Array<any>
}

type MapDispatchPropsType ={
    followUser: typeof followUser
    setUsers:   typeof setUsers
    setTotalUserCount: typeof setTotalUserCount
    getUsers: typeof getUsers
    changePage: typeof changePage
    unFollowUser: typeof unfollowUser
}

type OwnPropsType = {}

type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType

class UsersConteiner extends React.Component<PropsType> {

    componentDidMount() {this.props.getUsers(this.props.currentPage, this.props.pageSize);}

    onPageChanged = (page:number) => {
        this.props.getUsers(page, this.props.pageSize);
        
    };
    
    
    render() {

        const fixSrc = "https://w-dog.ru/wallpapers/4/17/444538780016755.jpg";

        let pagesCount = Math.ceil(this.props.totalUserCount / this.props.pageSize);

        let pages = [];

        let maxPage = 1000;
        if (pagesCount < maxPage) {
            maxPage = pagesCount
        }

        for (let n = 1; n <= maxPage; n++) {
            pages.push(n);
        }
        if(!this.props.isAuth) return (<Redirect to = {'/login'}/>) ;

        return (
            <>
                {this.props.isFetching ? <Preloader/> :
                    <Users
                        totalUserCount={this.props.totalUserCount}
                        fixSrc={fixSrc}
                        pages={pages}
                        pageSize={this.props.pageSize}
                        onPageChanged={this.onPageChanged}
                        users={this.props.users}
                        currentPage={this.props.currentPage}
                        followUser={this.props.followUser}
                        unFollowUser={this.props.unFollowUser}
                        isFetching={this.props.isFetching}
                        isFollowing={this.props.isFollowing}
                    />}
            </>);
    };
}

let mapStateToProps = (state:AppStateType):MapStatePropsType => {

    return {
        //users: getUsersList(state),
        users: getUsersListSuper(state),
        pageSize: getPageSize(state),
        totalUserCount: getTotalUserCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        isFollowing: getIsFollowing(state),
        isAuth: state.auth.isAuth

    }
};

export default compose(
    connect  (mapStateToProps, 
    {
        followUser,
        setUsers,
        setTotalUserCount,
        getUsers: getUsers,
        changePage,
        unfollowUser,
    }), 
    WithAuthRedirect,
)(UsersConteiner);


