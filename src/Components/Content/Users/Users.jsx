import React from 'react';
import style from "./Users.module.css";
import {NavLink} from "react-router-dom";
import noAvatar from "../../../img/NA5.jpg";



let Users = (props) => {

    return (
        <div>
            <div className={style.pageblock}>
                {props.pages.map((page) => {
                    return (<button
                        onClick={() => {
                            props.onPageChange(page)
                        }}
                        className={props.curentPage === page ?
                            style.pageIndex__selected :
                            style.pageIndex}
                        key={page}
                    >{page}</button>)
                })}
            </div>
            <div>
                {
                    props.users.map((user) =>
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
                                    disabled={props.isFollowing.some(id => id === user.id)}
                                    onClick={() => {
                                        props.unfollowUser(user.id);


                                    }}>UnFollow</button>

                                : <button
                                    className={style.followBtn}
                                    disabled={props.isFollowing.some(id => id === user.id)}
                                    onClick={() => {
                                        props.followUser(user.id)
                                    }}
                                >Follow</button>}
                            <div className={style.name}>{user.name}</div>
                            <div className={style.status}>{user.status}</div>
                            {/*<div className={style.location}></div>*/}
                        </div>)
                }
                <button
                    //onClick={props.setUsers([1,2,3,4,5,])}
                >
                    Show more
                </button>
            </div>
        </div>
    );
};

export default Users;