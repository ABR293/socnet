import React, {useEffect, useState} from 'react';
import style from "./Users.module.css";
import {NavLink} from "react-router-dom";
import noAvatar from "../../../img/NA5.jpg";
import Paginator from "../../Common/Paginator/Paginator";
import loading from '../../Common/loading.svg'



let Users = ({totalUserCount, fixSrc, pages, pageSize, onPageChanged, users,
                 currentPage, followUser, unfollowUser, isFetching, isFollowing}) => {

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
                            <img src={loading} alt={''}/>
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

export default Users;

