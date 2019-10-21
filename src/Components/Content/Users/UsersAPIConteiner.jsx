import React from 'react';

import * as axios from "axios";
import Users from "./Users";

export default class UsersAPIConteiner extends React.Component{



    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.curentPage}&count=${this.props.pageSize}`).
        then((response) => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUserCount(response.data.totalCount);
        });
    };

    onPageChange = (page) => {
        this.props.changePage(page);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.curentPage}&count=${this.props.pageSize}`).
        then((response) => {
            this.props.setUsers(response.data.items);
        });
    };


    render() {

        const fixSrc = "https://w-dog.ru/wallpapers/4/17/444538780016755.jpg";

        let pagesCount = Math.ceil(this.props.totalUserCount / this.props.pageSize);

        let pages = [];

        let maxPage = 17;
        if (pagesCount < maxPage) {maxPage = pagesCount}

        for (let n=1; n <= maxPage; n++) {
            pages.push(n);
        }

        return (<Users
            totalUserCount={this.props.totalUserCount}
            fixSrc={fixSrc}
            pages={pages}
            PageSize={this.props.pageSize}
            onPageChange = {this.onPageChange}
            users={this.props.users}
            curentPage={this.props.curentPage}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
        />);
    };
};



