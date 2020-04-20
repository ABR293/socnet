import {connect} from 'react-redux';
import {
    changePage,
    followUser, getUsers,
    setTotalUserCount,
    setUsers,
    unfollowUser
} from '../../../Redux/UsersReducer';
import React from 'react';
import Users from './Users';
import Preloader from "../../Common/Preloader";
import {Redirect} from "react-router-dom/";
import {WithAuthRedirect} from "../../../hoc/withAuthRedirect";
import {compose} from "redux";
import {
    getCurrentPage,
    getIsFetching,
    getIsFollowing,
    getPageSize,
    getTotalUserCount,
    //getUsersList,
    getUsersListSuper
} from "../../../Redux/UserSelectors";

class UsersConteiner extends React.Component {

    componentDidMount() {this.props.getUsers(this.props.curentPage, this.props.pageSize);}

    onPageChanged = (page) => {
        this.props.getUsers(page, this.props.pageSize);
        this.props.changePage(page);
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
        if(!this.props.isAuth) return <Redirect to={'/login'}/> ;

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
                        unfollowUser={this.props.unfollowUser}
                        isFetching={this.props.isFetching}
                        isFollowing={this.props.isFollowing}
                    />}
            </>);
    };
}

let mapStateToProps = (state) => {

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
    connect(mapStateToProps, {
        followUser,
        setUsers,
        changePage,
        setTotalUserCount,
        getUsers: getUsers,
        unfollowUser,
    }),

    WithAuthRedirect,
)(UsersConteiner);