import React from 'react';
import style from "./Users.module.css";
import {NavLink} from "react-router-dom";
import noAvatar from "../../../img/NA5.jpg";
import Paginator from "../../Common/Paginator/Paginator";



let Users = ({totalUserCount, fixSrc, pages, pageSize, onPageChanged, users,
              currentPage, followUser, unfollowUser, isFetching, isFollowing}) => {
        console.log({totalUserCount, fixSrc, pages, pageSize, onPageChanged, users,
            currentPage, followUser, unfollowUser, isFetching, isFollowing});
    return (
        <div>
            <div className={style.pageblock}>
                <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
                           totalItemsCount={totalUserCount} pageSize={pageSize}/>
            </div>
            <div>
                {(users.map((user) =>
                        <div key={user.id} className={style.userBlock}>
                            <div className={style.avatarBlock}>
                                <NavLink to={'/profile/' + user.id}>
                                    <img className={style.avatar}
                                         src={user.photos.small != null ?
                                             user.photos.small : noAvatar}
                                         alt=""/>
                                </NavLink>

                            </div>
                            {user.followed
                                ? <button
                                    className={style.followBtn}
                                    disabled={isFollowing.some(id => id === user.id)}
                                    onClick={() => {
                                        unfollowUser(user.id);


                                    }}>UnFollow</button>

                                : <button
                                    className={style.followBtn}
                                    disabled={isFollowing.some(id => id === user.id)}
                                    onClick={() => {
                                       followUser(user.id)
                                    }}
                                >Follow</button>}
                            <div className={style.name}>{user.name}</div>
                            <div className={style.status}>{user.status}</div>
                            {/*<div className={style.location}></div>*/}
                        </div>))
                }
                <button
                    //onClick=(setUsers([1,2,3,4,5,])}
                >
                    Show more
                </button>
            </div>
        </div>
    );
};

export default Users;