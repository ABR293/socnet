import React from 'react';
import style from './Users.module.css';

let Users = (props) => {

    if (props.users.length === 0){
        props.setUsers(
            [
                {   id: 8768678,
                    fullname: "Dimon",
                    followed: true,
                    src:"https://img2.akspic.ru/image/146213-tigr-hishhnik-zivotnoe-bengalskij_tigr-bakenbardy-2880x1800.jpg",
                    status:'I`l be back',
                    location:{country:'Russia', city:'Moscow'}},
                {
                    id: 4543535,
                    fullname: "Anton",
                    followed: true,
                    src:"https://s1.1zoom.ru/big7/93/Nissan_Autumn_Yellow_340564.jpg",
                    status:'YOU!!! YOU!!!!',
                    location:{country:'Russia', city:'Smolensk'}},
                {
                    id: 2343242,
                    fullname: "Misha",
                    followed: false,
                    src:'https://www.nastol.com.ua/pic/201305/1920x1200/nastol.com.ua-48872.jpg',
                    status:'Memento mori.....',
                    location:{country:'Ukraine', city:'Kiev'}},
                {
                    id: 2343257,
                    fullname: "Karlos",
                    followed: false,
                    src:"https://www.nastol.com.ua/pic/201305/2560x1600/nastol.com.ua-48150.jpg",
                    status:'Like a Boss!!!',
                    location:{country:'Germany', city:'Munich'}}
        ]);
    }

    return(
        <div>
            {
                props.users.map((user) =>
                <div key={user.id} className={style.userBlock}>
                    <div className={style.avatarBlock}>
                        <img className={style.avatar} src={user.src} alt=""/>
                        { user.followed
                            ? <button onClick={() => {props.unfollow(user.id)}}>UnFollow</button>
                            : <button onClick={() => {props.follow(user.id)}}>Follow</button>}
                    </div>
                    <div className={style.infoBlock}>
                        <div className={style.name}>{user.fullname}</div>
                        <div className={style.status}>{user.status}</div>
                        <div className={style.location}>{user.location.city}, {user.location.country}</div>

                    </div>
                </div>)
                }
            <button
                //onClick={props.setUsers([1,2,3,4,5,])}
            >
                Show more
            </button>
        </div>
        );
};

export default Users;
