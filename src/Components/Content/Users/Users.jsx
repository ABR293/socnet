import React from 'react';
import style from './Users.module.css';

let Users = (props) => {
    return(
        <div>
            {
                props.users.map((user) =>
                <div key={user.id}>
                    <span>{user.fullname}</span>
                    <span>{user.status}</span>
                    <span>{user.location.city}</span>
                </div>)
            }
        </div>
        );
};

export default Users;
