

import {connect} from 'react-redux';
import {
    changePage,
    follow,
    setTotalUserCount,
    setUsers,
    toggleFetching,
    unfollow
} from '../../../Redux/UsersReducer';
import React from 'react';
import * as axios from 'axios';
import Users from './Users';
import Preloader from "../../Common/Preloader";

class UsersConteiner extends React.Component {

    componentDidMount() {
        this.props.toggleFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.curentPage}&count=${this.props.pageSize}`).then((response) => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUserCount(response.data.totalCount);
            this.props.toggleFetching(false);
        });
    };

    onPageChange = (page) => {
        this.props.toggleFetching(true);
        this.props.changePage(page);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.curentPage}&count=${this.props.pageSize}`).then((response) => {
            this.props.setUsers(response.data.items);
            this.props.toggleFetching(false);
        });
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
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    isFetching={this.props.isFetching}
                    toggleFetching={this.props.toggleFetching}
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

    }
};
export default connect(mapStateToProps,
    {
        follow,
        unfollow,
        setUsers,
        changePage,
        setTotalUserCount,
        toggleFetching
    }
)(UsersConteiner);


