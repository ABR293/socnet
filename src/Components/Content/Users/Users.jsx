import React, {useEffect, useState} from 'react';
import style from "./Users.module.css";
import {NavLink} from "react-router-dom";
import noAvatar from "../../../img/NA5.jpg";
import Paginator from "../../Common/Paginator/Paginator";
import {follow} from "../../../Redux/UsersReducer";



/*
let Users = ({totalUserCount, fixSrc, pages, pageSize, onPageChanged, users,
              currentPage, followUser, unfollowUser, isFetching, isFollowing}) => {
        console.log({totalUserCount, fixSrc, pages, pageSize, onPageChanged, users,
            currentPage, followUser, unfollowUser, isFetching, isFollowing});

    useEffect(() => {
        document.title = `Users`;
    });

    return (
        <div>
            <div className={style.pageBlock}>
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
                                //className={style.followBtn}
                                disabled={isFollowing.some(id => id === user.id)}
                                onClick={() => {
                                    unfollowUser(user.id);
                                }}>UnFollow</button>

                            : <button
                                //className={style.followBtn}
                                disabled={isFollowing.some(id => id === user.id)}
                                onClick={() => {
                                    followUser(user.id)
                                }}
                            >Follow</button>}
                        <div className={style.name}>{user.name}</div>
                        <div className={style.status}>{user.status}</div>
                        {/!*<div className={style.location}></div>*!/}
                    </div>))
                }
            </div>
        </div>
    );
};

export default Users;
*/



let Users = ({totalUserCount, fixSrc, pages, pageSize, onPageChanged, users,
                 currentPage, followUser, unfollowUser, isFetching, isFollowing}) => {
    console.log({totalUserCount, fixSrc, pages, pageSize, onPageChanged, users,
        currentPage, followUser, unfollowUser, isFetching, isFollowing});

    useEffect(() => {
        document.title = `Users`;
    });

    return (
        <div>
            <div className={style.pageBlock}>
                <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
                           totalItemsCount={totalUserCount} pageSize={pageSize}/>
            </div>
            <div>
                {(users.map((user) =>
                    <User
                        key={user.id}
                        id={user.id}
                        photo={user.photos.small}
                        link={'/profile/' + user.id}
                        followed={user.followed}
                        name={user.name}
                        status={user.status}
                        isFollowing={isFollowing}
                        followUser={followUser}
                        unfollowUser={unfollowUser}
                    />))
                }
            </div>
        </div>
    );
};

const User = (props) => {

    let [followed, setFollowed] = useState(props.followed);
    let toggleFollowed = () => setFollowed(!followed);

    let onToggleFollowed =()=> {
        followed
            ? props.unfollowUser(props.id)
            : props.followUser(props.id);
        toggleFollowed()
    };

    return (
        <div key={props.id} className={style.userBlock}>
            <div className={style.avatarBlock}>
                <NavLink to={props.link}>
                    <img className={style.avatar}
                         src={props.photo != null ?
                             props.photo : noAvatar}
                         alt=""/>
                </NavLink>
            </div>
            <button
                disabled={props.isFollowing.some(id => id === props.id)}
                onClick={() => {onToggleFollowed()}}
            >
                <div>
                    {props.isFollowing.some(id => id === props.id) ?
                        <div>
                            {followed ? <p>Following</p> : <p>Unfollowing</p>}
                            <span>F</span>
                        </div>
                        :
                        <div>
                            {!followed ? <p>Follow</p> : <p>Unfollow</p>}
                        </div>
                    }
                </div>
            </button>

            <div className={style.name}>{props.name}</div>
            <div className={style.status}>{props.status}</div>
        </div>)
};

// {(props.isFollowing.some(id => id === props.id)& followed)
// && <div><p>Following</p><p>F</p></div>}
{/*}*/}
{/*{(props.isFollowing.some(id => id === props.id) & !followed)*/}
{/*&& <div><p>Unfollowing</p><p>F</p></div>*/}
{/*}*/}
{/*{!props.isFollowing.some(id => id === props.id) &&*/}
{/*<div>{!followed ? <p>Follow</p> : <p>Unfollow</p>}</div>*/}
{/*}*!/*/}
export default Users;

