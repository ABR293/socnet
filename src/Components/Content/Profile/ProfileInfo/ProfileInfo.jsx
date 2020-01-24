import React, {useState} from 'react';
import style from "./Profileinfo.module.css";
import ProfileStatusWithHooks from "./../ProfileStatusHOOK";
//import ProfileForm from "./ProfileDataForm";
import PhotoAvatar from "./Photo/Photo";
import noAvatar from "../../../../img/NA2.gif";


const ProfileInfo = (props) => {

    return (
        <div className={style.info}>
            <div className={style.avatar}>
                {props.isOwner
                    ? <PhotoAvatar avatar={props.avatar} savePhoto={props.savePhoto}/>
                    : <img src={props.avatar === null ? noAvatar : props.avatar} alt="NICHT AVATAREN!!!"/>
                }
            </div>
            <div className={style.edit}> </div>
            <div className={style.name}>
                <h3>{props.fullName}</h3>
                {props.isOwner && <button onClick={props.openEdit}>Edit Profile</button>}
            </div>
            <div className={style.status}>
                <ProfileStatusWithHooks
                    status={props.status}
                    updateUserStatus={props.updateUserStatus}
                />
            </div>
            <div className={style.infoData}>
                {props.aboutMe && <div className={style.aboutMe}>
                    <h3>About Me:</h3>
                    <p>{props.aboutMe}</p>
                </div>}
                <div className={style.lookingForAJob}>

                    {props.lookingForAJob &&
                    <div>
                        <h3>Looking for a job</h3>
                        <p>{props.lookingForAJobDescription}</p>
                    </div>
                    }
                </div>

                <div className={style.contactsBlock}>
                    <div className={style.contactsList}>
                        <h2>Contacts:</h2>
                        {Object.keys(props.contacts).map(key => {
                            return (props.contacts[key] &&
                                <div key={key}><b>{key}:</b><p>{props.contacts[key]}</p></div>)
                        })}

                    </div>
                </div>
            </div>
            <div>

            </div>
        </div>

    )
};
export default ProfileInfo;
