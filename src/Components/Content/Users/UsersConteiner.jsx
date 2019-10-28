import {connect} from 'react-redux';
import {
    changePage,
    followUser, followingInProgress, getUsers,
    setTotalUserCount,
    setUsers,
    toggleFetching,
    unfollowUser
} from '../../../Redux/UsersReducer';
import React from 'react';
import Users from './Users';
import Preloader from "../../Common/Preloader";

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
                        toggleFetching={this.props.toggleFetching}
                        followingInProgress={this.props.followingInProgress}
                        isFollowing={this.props.isFollowing}
                    />}
            </>);
    };
}

let mapStateToProps = (state) => {

    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        curentPage: state.usersPage.curentPage,
        isFetching: state.usersPage.isFetching,
        isFollowing: state.usersPage.isFollowing,

    }
};
export default connect(mapStateToProps,
    {
        followUser,
        setUsers,
        changePage,
        setTotalUserCount,
        toggleFetching,
        followingInProgress,
        getUsers: getUsers,
        unfollowUser
    }
)(UsersConteiner);


