import React, {useEffect, useState} from 'react';
import style from "./Users.module.css";
import { NavLink } from "react-router-dom";
import noAvatar from "../../../img/NA5.jpg";
import Paginator from "../../Common/Paginator/Paginator";
import loading from '../../Common/loading.svg'

type UsersPropsTypes = {
    totalUserCount : number
    fixSrc : string
    pages : any
    pageSize : number
    onPageChanged : any
    users : any
    currentPage : number
    followUser : (id: number) => void
    unFollowUser : (id: number) => void
    isFetching : boolean
    isFollowing : Array<any>
}

let Users : React.FC<UsersPropsTypes> = ({totalUserCount, fixSrc, pages, pageSize, onPageChanged, users,
                 currentPage, followUser, unFollowUser, isFetching, isFollowing}) => {

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
                {(users.map((user: any) =>
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
                        unfollowUser={unFollowUser}
                    />))
                }
            </div>
        </div>
    );
};

type UserType = {
    id : number
    key: number
    name: string
    photo: any
    link : string
    followed : boolean
    status: string
    isFollowing: any
    followUser: any
    unfollowUser: any
}
 
const User = ({id, key, name, photo, link, followed, status, isFollowing, followUser, unfollowUser}: UserType) => {

    let [ isFollowed, setFollowed] = useState(followed);
    let toggleFollowed = () => setFollowed(!isFollowed);

    let onToggleFollowed =()=> {
        followed
            ? unfollowUser(id)
            : followUser(id);
        toggleFollowed()
    };

    return (
        <div key={id} className={style.userBlock}>
            <div className={style.avatarBlock}>
                <NavLink to={link}>
                    <img className={style.avatar}
                         src={photo != null ?
                             photo : noAvatar}
                         alt=""/>
                </NavLink>
            </div>
            <button
                disabled={isFollowing.some( (i:number):boolean => i === id)}
                onClick={() => {onToggleFollowed()}}
            >
                <div>
                    {isFollowing.some( (i:number):boolean => i === id) ?
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

            <div className={style.name}>{name}</div>
            <div className={style.status}>{status}</div>
        </div>)
};

export default Users;

