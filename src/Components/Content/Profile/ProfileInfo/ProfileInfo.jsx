import React, {useState} from 'react';
import style from "./Profileinfo.module.css";
import ProfileStatusWithHooks from "./../ProfileStatusHOOK";
import ProfileForm from "./ProfileDataForm";
import Modal from "../../../Common/ModalWindow/ModalWindow";
import ReactDOM from "react-dom";
import PhotoAvatar from "./Photo/Photo";

const ProfileInfo = (props) => {

    console.log(props);
    let profile = {
            fullName: props.fullName,
            lookingForAJob: props.lookingForAJob,
            lookingForAJobDescription: props.lookingForAJobDescription,
            aboutMe: props.aboutMe,
            contacts: props.contacts,
        }
    ;

    let [isEditOpen, setEditOpen] = useState(false);

    let toggleEdit = () => {setEditOpen(!isEditOpen)};

    return(
        <div className={style.info}>
            <div>
                {isEditOpen && ReactDOM.createPortal(
                    <Modal>
                       <ProfileForm
                           profile={profile}
                           close={toggleEdit}
                           saveProfile={props.saveProfile}
                       />
                    </Modal>
                    ,
                    document.body
                )}
            </div>

            <div className={style.avatar}>
                <PhotoAvatar avatar={props.avatar} savePhoto={props.savePhoto}/>
            </div>
            <div className={style.edit}>{props.isOwner && <button onClick={toggleEdit}>Edit Profile</button>}</div>
            <div className={style.name}>
                <h3>{props.fullName}</h3>
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
                            return(props.contacts[key] && <div key={key}><b>{key}:</b><p>{props.contacts[key]}</p></div>)
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
