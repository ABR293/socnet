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
    getCurentPage,
    getIsFetching,
    getIsFollowing,
    getPageSize,
    getTotalUserCount,
    //getUsersList,
    getUsersListSuper
} from "../../../Redux/UserSelectors";

class UsersConteiner extends React.Component {

    componentDidMount() {this.props.getUsers(this.props.curentPage, this.props.pageSize);}

    onPageChange = (page) => {
        this.props.getUsers(page, this.props.pageSize);
        this.props.changePage(page);
    };

    render() {

        const fixSrc = "https://w-dog.ru/wallpapers/4/17/444538780016755.jpg";

        let pagesCount = Math.ceil(this.props.totalUserCount / this.props.pageSize);

        let pages = [];

        let maxPage = 17;
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
                        PageSize={this.props.pageSize}
                        onPageChange={this.onPageChange}
                        users={this.props.users}
                        curentPage={this.props.curentPage}
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
        curentPage: getCurentPage(state),
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