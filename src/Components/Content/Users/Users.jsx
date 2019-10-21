import React from 'react';
import style from './Users.module.css';
import * as axios from "axios";

export default class Users extends React.Component{



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

        return (
            <div>
                <div className={style.pageblock}>
                    {pages.map( (page) => {
                        return(<button
                            onClick={() =>{this.onPageChange(page)}}
                            className={this.props.curentPage === page ?
                                style.pageIndex__selected :
                                style.pageIndex}
                            key={page}
                        >{page}</button>)
                    })}
                </div>
                <div>
                    {
                        this.props.users.map((user) =>
                            <div key={user.id} className={style.userBlock}>
                                <div className={style.avatarBlock}>
                                    <img className={style.avatar}
                                         src={user.photos.small != null ? user.photos.small : fixSrc} alt=""/>
                                    {user.followed
                                        ? <button onClick={() => {
                                            this.props.unfollow(user.id)
                                        }}>UnFollow</button>
                                        : <button onClick={() => {
                                            this.props.follow(user.id)
                                        }}>Follow</button>}
                                </div>
                                <div className={style.infoBlock}>
                                    <div className={style.name}>{user.name}</div>
                                    <div className={style.status}>{user.status}</div>
                                    {/*<div className={style.location}></div>*/}
                                </div>
                            </div>)
                    }
                    <button
                        //onClick={this.props.setUsers([1,2,3,4,5,])}
                    >
                        Show more
                    </button>
                </div>
            </div>
        );
    };
};



